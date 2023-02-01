var newQuestionnaire = {
	data() {
		return {
            qaTit: [
                '我的投資目的是？',
                '我打算投入',
                '我打算投資',
                '這筆資金的投資盈虧，對我的生活開支造成影響為',
                '當市場震盪時，我可接受資產的波動程度',
                '如果我的投資資產下跌了20%，會選擇',
            ],
            investmentAmount: {
                marks: {
                    5000: '5,000',
                    100000: '100,000',
                    200000: '200,000',
                    300000: '300,000'
                },
                pigScale: '1',
            },
            investmentTime: {
                marks: {
                    1: '1~3年',
                    2: '3~5年',
                    3: '5~10年',
                },
            },
            earningImpact: {
                marks: {
                    1: '大',
                    2: '中',
                    3: '中低',
                    4: '極小',
                    5: '無',
                },
            },
            qa4BubbleText: '',
            tolerance: {
                marks: {
                    1: '±5%',
                    2: '±10%',
                    3: '±20%',
                    4: '±30%',
                    5: '±40%',
                },
            },
            qa5Text: '',
            investmentAssetsFell: {
                marks: {
                    1: '賣出',
                    2: '不賣出',
                    3: '先觀望',
                    4: '買進(小)',
                    5: '買進(大)',
                },
            },
            qa6Text: '',
        }
    },
    mounted() {
        
    },
    methods: {
        // 修改elementUi slider的tooltip bug
        hideSliderTooltip(ref_name) {
            setTimeout(()=>{
                ((this.$refs[ref_name]).$refs.button1).$refs.tooltip.showPopper = false;
            }, 1000);
        },

        investmentAmount_formatTooltip(val) {
            return '新臺幣 $' + val;
        },
        investmentTime_formatTooltip(val) {
            if ( val == 1 ) {
                return '1年以上 ~ 3年';
            }if ( val == 2 ) {
                return '3年以上 ~ 5年';
            }if ( val == 3 ) {
                return '5年以上 ~ 10年';
            };
        },
        earningImpact_formatTooltip(val) {
            if ( val == 1 ) {
                return '影響很大';
            }if ( val == 2 ) {
                return '有一定程度的影響';
            }if ( val == 3 ) {
                return '影響程度中低';
            }if ( val == 4 ) {
                return '影響極小';
            }if ( val == 5 ) {
                return '完全沒影響';
            };
        },
        tolerance_formatTooltip(val) {
            if ( val == 1 ) {
                return '最高±5%的波動';
            }if ( val == 2 ) {
                return '最高±10%的波動';
            }if ( val == 3 ) {
                return '最高±20%的波動';
            }if ( val == 4 ) {
                return '最高±30%的波動';
            }if ( val == 5 ) {
                return '最高±40%的波動';
            };
        },
        investmentAssetsFell_formatTooltip(val) {
            if ( val == 1 ) {
                return '賣出';
            }if ( val == 2 ) {
                return '不賣出';
            }if ( val == 3 ) {
                return '先觀望';
            }if ( val == 4 ) {
                return '買進(小額)';
            }if ( val == 5 ) {
                return '買進(大幅)';
            };
        },
    },
    watch: {
        "answer.q4"(val) {
            if ( val == 1 ) {
                this.qa4BubbleText = '影響很大';
            }if ( val == 2 ) {
                this.qa4BubbleText = '有一定程度的影響';
            }if ( val == 3 ) {
                this.qa4BubbleText = '影響程度中低';
            }if ( val == 4 ) {
                this.qa4BubbleText = '影響極小';
            }
            if ( val == 5 ) {
                this.qa4BubbleText = '完全沒影響';
            };
        },
        "answer.q5"(val) {
            if ( val == 1 ) {
                this.qa5Text = '±5%';
            }if ( val == 2 ) {
                this.qa5Text = '±10%';
            }if ( val == 3 ) {
                this.qa5Text = '±20%';
            }if ( val == 4 ) {
                this.qa5Text = '±30%';
            }if ( val == 5 ) {
                this.qa5Text = '±40%';
            };
        },
        "answer.q6"(val) {
            if ( val == 1 ) {
                this.qa6Text = '一部份或全部賣出';
            }if ( val == 2 ) {
                this.qa6Text = '停止定期扣款';
            }if ( val == 3 ) {
                this.qa6Text = '不賣出、不停扣';
            }if ( val == 4 ) {
                this.qa6Text = '小額加碼';
            }if ( val == 5 ) {
                this.qa6Text = '大幅加碼';
            };
        },
    },
}