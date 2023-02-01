Vue.use(VueScrollTo);
var front = {
  data() {
    return {
      localList: ["10.88.110.89", "10.88.110.62", "10.127.105.69", "10.127.105.74", "127.0.0.1", "localhost"],
      color: ["#87c8db", "#8491c7", "#fa8666", "#f4d66c", "#AEC785"],
      RiskDict: {
        99: ["2380a74e-2759-47d6-956c-065cdc748a69", "不適合Robo", "請至一般交易平台"],
        1: ["2DB3A998-0C12-4EFD-A870-4A47169A6B59", "低風險", "RR3"],
        2: ["ECA257EC-E532-4D89-836E-D38597C9078C", "低風險", "RR3"],
        3: ["655B27AC-C2FA-4F7F-B88C-82EA6AB9CE22", "低風險", "RR3"],
        4: ["5F4F06BB-FE1A-468A-8DE2-7BB598BC50E9", "中等風險", "RR4"],
        5: ["54E44CDC-1D4A-47F8-8946-E6DAD3A84BE1", "中等風險", "RR4"],
        6: ["1FC6DD00-335C-4057-846C-1C52C604E71A", "中等風險", "RR4"],
        7: ["D83404E4-362B-4871-A337-34938DCD9157", "高風險", "RR5"],
        8: ["A5291768-C143-494E-A679-9E79B4A9BE1C", "高風險", "RR5"],
        9: ["74A0F757-1720-4F2A-832F-C35AB72AB742", "高風險", "RR5"],
      },
      answer: {
        q1: "",
        q1_text: "",
        q2: 50000,
        q3: 0,
        q4: 0,
        q5: 0,
        q6: 0,
      },
      res: {},
    };
  },
  computed: {
    testMode() {
      return location.hostname != "event.franklin.com.tw";
    },
    localMode() {
      return this.localList.indexOf(location.hostname) > -1;
    },
    apiUrl() {
      return this.testMode ? "https://wt.franklin.com.tw/AI_Robo/Recomm/New/" : "https://www.franklin.com.tw/AI_Robo/Recomm/New/";
    },
    valUrl() {
      if (this.localMode) return "http://demo3869121.mockable.io/";
      return this.testMode ? "https://wt.franklin.com.tw/Chart/NavData/" : "https://www.franklin.com.tw/Chart/NavData/";
    },
    q1Word() {
      var arr = ["", "創業基金", "購屋準備", "教育基金", "結婚準備", "退休準備", "自訂目標"];
      var index = this.answer.q1 ? this.answer.q1.split("-")[1] : 0;
      return index == 6 ? `${arr[index]}：${this.answer.q1_text}` : arr[index];
    },
    q3Word() {
      var arr = ["", "1年以上 ~ 3年", "3年以上 ~ 5年", "5年以上 ~ 10年"];
      var index = this.answer.q3 ? this.answer.q3 : 0;
      return arr[index];
    },
    calculateScore() {
      return parseInt(this.answer.q4 || 0) + parseInt(this.answer.q5 || 0) + parseInt(this.answer.q6 || 0);
    },
    getScore() {
      var x = this.calculateScore;
      var investmentyear = this.answer.q3;
      // investment_year 與 QA3 投資年限對應
      // 1： 低風險, 2: 中低風險, 3: 高風險
      if (x <= 3) {
        return 99;
      }
      if (x >= 4 && x <= 7) {
        switch (investmentyear) {
          default:
          case 1:
            return 1;
          case 2:
            return 2;
          case 3:
            return 3;
        }
      }
      if (x >= 8 && x <= 11) {
        switch (investmentyear) {
          default:
          case 1:
            return 4;
          case 2:
            return 5;
          case 3:
            return 6;
        }
      }
      if (x >= 12 && x <= 15) {
        switch (investmentyear) {
          default:
          case 1:
            return 7;
          case 2:
            return 8;
          case 3:
            return 9;
        }
      }
    },
    getRiskByScore() {
      if (this.getScore) {
        return this.RiskDict[this.getScore][1];
      } else {
        return "";
      }
    },
    getGuid() {
      if (this.getScore) {
        return this.RiskDict[this.getScore][0];
      } else {
        return "";
      }
    },
    getWording() {
      if (this.getScore <= 3) {
        return "你是一位典型風險趨避的投資者，非常在乎取得確定的投資回報，無法接受短期內資產的大幅波動。";
      } else if (this.getScore <= 6) {
        return "你是一位在乎風險大於收益的穩健型投資者，期望在相對低風險中，可以取得較為穩健的回報。";
      } else {
        return "你可以承受較高的風險，為了追求較大的回報，願意接受資產在短期的大幅波動，或是相對較長期的虧損。";
      }
    },
    historyRate() {
      return this.res.risk_rate ? this.res.risk_rate.toFixed(2) : 0;
    },
    fundLength() {
      return this.res.risk_rate ? this.res.rp_list.length : 0;
    },
  },
  beforeMount() {
    this.res = this.localMode
      ? {
          risk_rate: 7.20918,
          rp_list: [
            {
              FundInfo: {
                FundCategory: "全球股票",
                FundId: "1000",
                FundName: "測試基金1",
                WarningDesc: null,
              },
              InvestRatio: 5,
            },
            {
              FundInfo: {
                FundCategory: "產業型",
                FundId: "1000",
                FundName: "測試基金2",
                WarningDesc: null,
              },
              InvestRatio: 5,
            },
            {
              FundInfo: {
                FundCategory: "平衡型",
                FundId: "1000",
                FundName: "測試基金3",
                WarningDesc: null,
              },
              InvestRatio: 20,
            },
            {
              FundInfo: {
                FundCategory: "債券型",
                FundId: "1000",
                FundName: "測試基金4",
                WarningDesc: "﹙本基金之配息來源可能為本金﹚",
              },
              InvestRatio: 35,
            },
            {
              FundInfo: {
                FundCategory: "債券型",
                FundId: "1000",
                FundName: "測試基金5",
                WarningDesc: "﹙本基金之配息來源可能為本金﹚",
              },
              InvestRatio: 35,
            },
          ],
          title: "測試組合99號",
        }
      : {};
  },
  mounted() {
    if (this.localMode) {
      this.answer.q1 = "1-2";
      this.answer.q3 = Math.floor(Math.random() * 3) + 1;
      this.answer.q4 = Math.floor(Math.random() * 5) + 1;
      this.answer.q5 = Math.floor(Math.random() * 5) + 1;
      this.answer.q6 = Math.floor(Math.random() * 5) + 1;
      this.step = 3;
      this.complete = true;
      this.planDetails = true;
      this.$nextTick(() => {
        this.pieChart();
        this.serieChart();
      });
    }
  },
  methods: {
    chkAnswer(q) {
      let checkFun = new Array();
      checkFun[0] = () => {};

      // 第一題
      checkFun[1] = () => {
        if (!this.answer.q1) {
          alert("請選擇投資目的");
          return;
        }
        if (this.answer.q1 == "1-6" && !this.answer.q1_text) {
          alert("請填寫自訂目標");
          return;
        }
        this.next();
      };
      // 第二題
      checkFun[2] = () => {
        if (this.answer.q2 < 50000) {
          alert("請填寫大於50000的金額");
          return;
        }
        this.next();
      };
      // 第三題
      checkFun[3] = () => {
        if (!this.answer.q3) {
          alert("請選擇投資年限");
          return;
        }
        this.next();
      };
      // 第四題
      checkFun[4] = () => {
        if (!this.answer.q4) {
          alert("請選擇投資盈虧影響程度");
          return;
        }
        this.next();
      };
      // 第五題
      checkFun[5] = () => {
        if (!this.answer.q5) {
          alert("請選擇可接受波動程度");
          return;
        }
        this.next();
      };
      // 第六題
      checkFun[6] = () => {
        if (!this.answer.q6) {
          alert("請選擇資產下跌了20%後的動作");
          return;
        }
        this.next();
      };

      // 對題數防呆
      if (this.questionnaire < 0 || this.questionnaire > 6) return;

      checkFun[this.questionnaire]();
    },
    next() {
      if (this.questionnaire == 6) {
        this.getResult();
        return;
      }
      this.questionnaire++;
    },
    agree() {
      this.questionnaire = 1;
      this.$nextTick(() => {
        this.$scrollTo("#questionnaire");
        this.toggleModal("warning");
      });
    },
    toggle() {
      this.planDetails = !this.planDetails;
      this.$nextTick(() => {
        this.$scrollTo(`${this.planDetails ? "#plan-toggle" : "#plan"}`);
      });
    },
    // api接口
    setPromise(methods, url, data) {
      return new Promise((resolve, reject) => {
        $.ajax({
          type: methods,
          dataType: "json",
          url: url,
          data: data,
          success: (res) => {
            resolve(res);
          },
          error: (result) => {
            reject(result);
          },
        });
      });
    },
    setQueryResult(data) {
      return this.setPromise("GET", `${this.apiUrl}${this.getGuid}`, data);
    },
    setFundValue(fundID, data) {
      return this.setPromise("GET", `${this.valUrl}${fundID}`, data);
    },
    async getResult() {
      this.step = 2;
      this.questionnaire++;

      await new Promise((resolve) => {
        setTimeout(() => {
          if (this.getScore == 99) {
            alert(`您的風險評估${this.RiskDict[99][1]}，${this.RiskDict[99][2]}`);

            this.step = 1;
            this.questionnaire = 6;

            return;
          } else {
            resolve();
          }
        }, 333);
      });

      try {
        var res = await this.setQueryResult({});
        this.res = res;

        await new Promise((resolve) => {
          this.pieChart(resolve);
        });
        await new Promise((resolve) => {
          this.serieChart(resolve);
        });

        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 900);
        });

        await new Promise((resolve) => {
          this.complete = true;
          this.step = 3;
          this.$nextTick(() => {
            this.$scrollTo("#plan");
          });
        });
      } catch (err) {
        this.step = 1;
        this.questionnaire = 6;
        console.log("setQueryResult-err:", err);
      }
    },
    async setLineChart(fundID) {
      // console.log("fundID:", fundID);

      this.toggleModal("chart");
      try {
        const lineData = await this.setFundValue(fundID);

        let valueData;
        await new Promise((resolve) => {
          valueData = lineData.map((x) => {
            return [x[0], x[1]];
          });
          setTimeout(() => {
            resolve();
          }, 333);
        });

        // await new Promise((resolve) => {});
        this.$nextTick(() => {
          this.lineChart(valueData);
        });
      } catch (err) {
        console.log("getFundValue-err:", err);
      }
    },
    lineChart(data) {
      Highcharts.stockChart("plan-fundChart", {
        chart: {
          style: {
            fontFamily: 'Arial, "Noto Sans TC", sans-serif',
          },
        },
        credits: {
          enabled: false,
        },
        navigation: {
          buttonOptions: {
            enabled: false,
          },
        },
        navigator: {
          series: {
            type: "areaspline",
            color: "#ffffff",
            fillOpacity: 0.4,
            dataGrouping: {
              smoothed: false,
            },
            lineColor: "#3d6ed0",
            lineWidth: 1,
            marker: {
              enabled: false,
            },
            shadow: false,
          },
          handles: {
            backgroundColor: "#fff",
            borderColor: "#666",
            lineWidth: 1,
            width: 20,
            height: 17,
          },
        },
        scrollbar: {
          barBackgroundColor: "#fff",
          barBorderRadius: 5,
          barBorderWidth: 2,
          barBorderColor: "#ccc",
          rifleColor: "#3c3c3c",
          minWidth: "1",

          buttonBackgroundColor: "#fff",
          buttonBorderWidth: 2,
          buttonBorderColor: "#3d6ed0",
          buttonArrowColor: "#3d6ed0",
          buttonBorderRadius: 20,

          trackBackgroundColor: "#f4f4f4",
          trackBorderWidth: 3,
          trackBorderColor: "#fff",
          trackBorderRadius: 7,

          size: 20,
        },
        rangeSelector: {
          allButtonsEnabled: true,
          buttonSpacing: 10,
          selected: 0,
          inputEnabled: false,
          buttons: [
            {
              type: "month",
              count: 1,
              text: "1\u6708",
            },
            {
              type: "month",
              count: 3,
              text: "3\u6708",
            },
            {
              type: "month",
              count: 6,
              text: "6\u6708",
            },
            {
              type: "year",
              count: 1,
              text: "1\u5e74",
            },
            {
              type: "year",
              count: 3,
              text: "3\u5e74",
            },
            {
              type: "year",
              count: 5,
              text: "5\u5e74",
            },
            {
              type: "year",
              count: 10,
              text: "10\u5e74",
            },
          ],
          buttonTheme: {
            r: 30,
            "stroke-width": 2,
            fill: "#fff",
            height: 28,
            states: {
              select: {
                fill: "#3d6ed0",
                stroke: "#3d6ed0",
                style: {
                  color: "white",
                },
              },
            },
          },
          labelStyle: {
            color: "silver",
            fontWeight: "bold",
          },
          buttonPosition: {
            x: window.innerWidth >= 992 ? 10 : -20,
          },
        },
        title: {
          text: "基金淨值走勢圖",
          style: {
            color: "#222",
            fontSize: "20px",
          },
        },
        xAxis: {
          dateTimeLabelFormats: {
            second: "%Y-%m-%d<br/>%H:%M:%S",
            minute: "%Y-%m-%d<br/>%H:%M",
            hour: "%Y-%m-%d<br/>%H:%M",
            day: "%Y<br/>%m-%d",
            week: "%Y<br/>%m-%d",
            month: "%Y-%m",
            year: "%Y",
          },
        },

        yAxis: {
          opposite: false,
          lineColor: "red",
        },
        plotOptions: {
          area: {
            // lineColor: "#3d6ed0",
            fillColor: {
              linearGradient: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 1,
              },
              stops: [
                [0, "rgba(61, 110, 208, 0.3)"],
                [1, "rgba(255, 255, 255, 0)"],
              ],
            },
          },
          series: {
            dataGrouping: {
              enabled: true,
              approximation: "open",
            },
            marker: {
              fillColor: "#3d6ed0",
              lineWidth: 2,
              lineColor: "rgba(255, 255, 255, 0.8)",
              radius: 6,
            },
          },
        },
        tooltip: {
          backgroundColor: "rgba(0,0,0,0.8)",
          borderColor: "#fff",
          borderWidth: 0,
          borderRadius: 10,
          shadow: false,
          style: {
            color: "#fff",
            fontSize: "16px",
          },
          valueDecimals: 2,
          xDateFormat: "%Y-%m-%d",
        },
        series: [
          {
            type: "area",
            name: "淨值",
            data: data,
            color: "#3d6ed0",
          },
        ],
      });
    },
    pieChart(resolve) {
      let pieData = this.res.rp_list.map((val) => {
        return { name: val.FundInfo.FundName, y: val.InvestRatio };
      });

      var pie = Highcharts.chart(
        "investmentRatio-chart",
        {
          colors: this.color,
          credits: {
            enabled: false,
          },
          chart: {
            type: "pie",
            width: 220,
            height: 220,
          },
          title: {
            text: "投資比例",
            align: "center",
            verticalAlign: "middle",
            x: 3.5,
            y: 0,
          },
          subtitle: {
            text: "5.00%",
            align: "center",
            verticalAlign: "middle",
            x: 5,
            y: 37.5,
            style: { color: "#eb6100" },
          },
          tooltip: {
            enabled: true,
            headerFormat: '<span style="font-size: .7rem">{point.key}  </span>',
            pointFormat: '<span style="font-size: .7rem">{point.percentage:.2f}%</span>',
            valueSuffix: "%",
          },
          plotOptions: {
            pie: {
              allowPointSelect: true,
              cursor: "pointer",
              depth: 45,
              innerSize: "75%",
              dataLabels: {
                enabled: false,
              },
              showInLegend: false,
              point: {
                events: {
                  click(event) {
                    pie.setTitle(
                      {
                        text: "投資比例",
                        align: "center",
                        verticalAlign: "middle",
                        x: 3.5,
                        y: 0,
                      },
                      {
                        text: `${event.point.percentage.toFixed(2)}%`,
                        align: "center",
                        verticalAlign: "middle",
                        x: 5,
                        y: 37.5,
                        style: { color: "#eb6100" },
                      }
                    );
                  },
                },
              },
            },
          },
          series: [
            {
              data: pieData,
            },
          ],
        },
        (chart) => {
          chart.series[0].data[0].select();
          if (resolve) resolve();
        }
      );
    },
    serieChart(resolve) {
      let series = [];
      series = this.res.rp_list
        .map((e) => {
          return e.FundInfo.FundCategory;
        })
        .reduce((obj, item) => {
          [[obj], obj[item]];
          obj[item] = obj[item] ? obj[item] + 1 : 1;
          return obj;
        }, {});

      // 計算百分比總數
      let sum = Object.values(series).reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);

      // 處理百分比
      series = Object.keys(series).map((key) => {
        return [key, (series[key] * 100) / sum];
      });

      Highcharts.chart(
        "fundCategory",
        {
          credits: {
            enabled: false,
          },
          chart: {
            type: "column",
            backgroundColor: null,
          },
          title: {
            text: "",
          },
          xAxis: {
            type: "category",
            labels: {
              style: {
                fontSize: "15px",
              },
            },
          },
          yAxis: {
            min: 0,
            title: {
              text: "",
            },
          },
          legend: {
            enabled: false,
          },
          tooltip: {
            pointFormat: "{point.y:.2f} %",
          },
          series: [
            {
              colorByPoint: true,
              data: series,
              dataLabels: {
                enabled: true,
                color: "#000000",
                style: { color: "black", fontSize: "15px", fontWeight: "normal", textOutline: "0px" },
                format: "{point.y:.2f}%",
                y: 10,
              },
            },
          ],
        },
        (chart) => {
          if (resolve) resolve();
        }
      );
    },
  },
};
