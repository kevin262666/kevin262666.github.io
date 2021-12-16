var content = new Vue({
    el: "#content",
    data: {
        screenWidth: document.body.clientWidth,
        screenHeight: document.body.clientHeight,
        windowWidth: window.innerWidth,
        windowHeight: window.innerHeight,
        menuBtnActive: false,
        navbarShow: false,
        ieUseMask: true,
        thisPath: location.protocol + "//" + location.host,

        flag: false,
        TextNum1: "",
        TextNum2: "",
        TextNum3: "",
        winner: "",
        winner2: [],
        numLenght = 3,
        numPos: [-1021, -902, -784, -666, -548, -429, -1614, -1495, -1377, -1258],

        game2Winner: [],
    },
    mounted() {
        this.useJq();

        // this.sameHeight('fund1');
        // setTimeout(()=>{
        // 	this.sameHeight('fund1');
        // }, 1000);

        $(window).resize(() => {
            this.windowWidth = $(window).innerWidth();
            this.windowHeight = $(window).innerHeight();

            // this.sameHeight('fund1');
        });

        this.$nextTick(function () {
            this.game2();
        });
    },
    methods: {
        toggleModal(name) {
            this.$refs[name].toggle = !this.$refs[name].toggle;
        },
        toggleMobileNavbar() {
            this.menuBtnActive === false
                ? (this.menuBtnActive = true)
                : (this.menuBtnActive = false);
            this.navbarShow === false
                ? (this.navbarShow = true)
                : (this.navbarShow = false);
        },
        hideMobileNavbar() {
            this.menuBtnActive = false;
            this.navbarShow = false;
        },
        sameHeight(name) {
            let item = $("." + name),
                itemLeight = item.length,
                giftItemHeight = [];

            item.removeAttr("style");

            for (let n = 0; n < itemLeight; n++) {
                giftItemHeight[n] = item.eq(n).innerHeight();
            }
            let height = Math.max.apply(null, giftItemHeight);
            item.css("height", height);
        },

        //-------------------------------------使用jq區塊
        useJq() {
            new WOW().init();
        },

        // 抽獎
        letGo() {
            // this.TextNum1 = parseInt(Math.random() * 4); //随机数
            // this.TextNum2 = parseInt(Math.random() * 7);
            // this.TextNum3 = parseInt(Math.random() * 7);

            // let num1 = [-549, -668, -786, -904][this.TextNum1]; //在这里随机
            // let num2 = [-1377, -1495, -1614, -430, -549, -668, -786, -904][this.TextNum2];
            // var num3 = [-1377, -1495, -1614, -430, -549, -668, -786, -904][this.TextNum3];

            this.TextNum1 = this.winner[0];
            this.TextNum2 = this.winner[1];
            this.TextNum3 = this.winner[2];

            let num1 = this.numPos[this.TextNum1],
                num2 = this.numPos[this.TextNum2],
                num3 = this.numPos[this.TextNum3];

            $(".num-con1").animate({ top: -1140 }, 700, "linear", function () {
                $(this).css("top", 0).animate({ top: num1 }, 3000, "linear");
            });
            $(".num-con2").animate({ top: -1140 }, 500, "linear", function () {
                $(this).css("top", 0).animate({ top: num2 }, 5000, "linear");
            });
            $(".num-con3").animate({ top: -1140 }, 600, "linear", function () {
                $(this).css("top", 0).animate({ top: num3 }, 7000, "linear");
            });
        },

        // 重置
        reset() {
            $(".num-con1,.num-con2,.num-con3").css({ top: -430 });
        },

        // 隨機數字區間 X ~ X
        getRandom(min, max){
            return Math.floor(Math.random()*(max-min+1))+min;
        },

        // 數字前補0
        paddingLeft(str){
            // console.log(str, str.length);
            if(str.length >= this.numLenght) {
                return str;
                // console.log('1');
            } else{
                // console.log('2');
                return this.paddingLeft("0" + str);
            };
        },

        game() {
            if (!this.flag) {
                this.flag = true;
                this.$set(this.winner2, 0, ' ');
                this.winner = (this.paddingLeft(this.getRandom(1, 280).toString())).split("");
                this.reset();
                this.letGo();
                console.log(this.winner);
                setTimeout(()=> {
                    this.$set(this.winner2, 0, this.winner.join(''));
                }, 7100);
                setTimeout(()=> {
                    this.flag = false;
                }, 8100);
            };
        },

        // ------------------------------------------------------------------
        game2() {
            var $hand = $(".hand"),
                canUse = true;

            $hand.click(()=> {
                if (canUse) {
                    canUse = false;
                    this.$set(this.game2Winner, 0, ' ');

                    var data = [1, 2, 3, 4, 5, 6];
                    data = data[Math.floor(Math.random() * data.length)];

                    setTimeout(()=> {
                        let twData;
                        if(data==1) {
                            twData = '專注'
                        }if(data==2) {
                            twData = '自律'
                        }if(data==3) {
                            twData = '熱忱'
                        }if(data==4) {
                            twData = '變革'
                        }if(data==5) {
                            twData = '創新'
                        }if(data==6) {
                            twData = '當責'
                        };
                        this.$set(this.game2Winner, 0, twData);
                    }, 9500);

                    switch (data) {
                        case 1:
                            rotateFunc(1, 16, "中1", data);
                            break;
                        case 2:
                            rotateFunc(2, 47, "中2", data);
                            break;
                        case 3:
                            rotateFunc(3, 76, "中3", data);
                            break;
                        case 4:
                            rotateFunc(4, 106, "中4", data);
                            break;
                        case 5:
                            rotateFunc(5, 135, "中5", data);
                            break;
                        case 6:
                            rotateFunc(6, 164, "中6", data);
                            break;
                        case 7:
                            rotateFunc(7, 193, "中7", data);
                            break;
                        case 8:
                            rotateFunc(7, 223, "中8", data);
                            break;
                        case 9:
                            rotateFunc(7, 252, "中9", data);
                            break;
                        case 10:
                            rotateFunc(7, 284, "中10", data);
                            break;
                        case 11:
                            rotateFunc(7, 314, "中11", data);
                            break;
                        case 12:
                            rotateFunc(7, 345, "中12", data);
                            break;
                    }
                    setTimeout(function () {
                        canUse = true;
                    }, 10200);
                }
            });

            var oldClassName = "";
            function rotateFunc(awards, angle, text, no) {
                console.log(awards, angle, text, no);
                // $hand.css({
                //   'transform': 'rotate('+ angle +'deg)',
                // });
                $hand.removeClass(oldClassName);
                setTimeout(function () {
                    oldClassName = "rotate" + no;
                    $hand.addClass("rotate" + no);
                }, 100);
            }
        },
    },
    watch: {
        screenWidth(val) {
            this.screenWidth = val;
        },
        screenHeight(val) {
            this.screenHeight = val;
        },
        windowWidth(val) {
            this.windowWidth = val;
        },
        windowHeight(val) {
            this.windowHeight = val;
        },
    },
});
