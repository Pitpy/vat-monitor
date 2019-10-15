<template>
<div class="att">
    <div class="ttitle"> {{ amountTitle2.title6 }} </div>
    <div class="cht" v-if="this.$store.getters.data != null">
        <e-charts :options="DataOption" :class="['pie1']" style="width: 100%; height: 30vh;"/>
    </div>
</div>
</template>

<script>
import numeral from 'numeral'
import jdata from '@/views/data.json'

import ECharts from 'vue-echarts'
// import ECharts from 'vue-echarts/components/ECharts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/polar'

export default {
    components: {
        ECharts
    },
    data() {
        return {
            num: numeral,
            amountTitle: jdata.amountTitle,
            amountTitle2: jdata.amountTitle2,
            show: true,
            display: false,
            size: {
                s1: '',
                s2: '',
                s3: '',
                s4: ''
            }
        }
    },
    mounted(){
        window.addEventListener("resize", () => {
            if (window.innerWidth < 900) {
               this.show = false
               this.size.s2 = '55%'
               this.size.s4 = '58%'
            } else {
                this.show = true
                this.size.s2 = '52%'
                this.size.s4 = '55%'
            }
        });
        if (window.innerWidth < 900) {
            this.show = false
            this.size.s2 = '55%'
            this.size.s4 = '58%'
        } else {
            this.show = true
            this.size.s2 = '55%'
            this.size.s4 = '55%'
        }
    },
    computed: {
        DataOption() {
            let data = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} ({d}%)",
                    textStyle: {
                        fontFamily: 'saysettha',
                        color: '#fff'
                    }
                },
                legend: {
                    orient: 'horizontal',
                    x: 'center',
                    data: [`${jdata.amountTitle2.title1}: ${this.$store.getters.data.inOut.cntPersonIn}`, `${jdata.amountTitle2.title2}: ${this.$store.getters.data.inOut.cntPersonOut}`, `${jdata.amountTitle2.title4}: ${this.$store.getters.data.inOut.cntVehicleIn}`, `${jdata.amountTitle2.title5}: ${this.$store.getters.data.inOut.cntVehicleOut}`],
                    textStyle: {
                        fontFamily: 'saysettha',
                        color: '#fff',
                        fontSize: 12
                    }
                },
                series: [{
                        name: 'ພາຫະນະຂາເຂົ້າ-ຂາອອກ',
                        type: 'pie',
                        selectedMode: 'single',
                        radius: [0, '40%'],
                        center: ['51%', this.size.s2],
                        label: {
                             normal: {
                                show: this.show,
                                formatter: ' {b|{b} }',
                                backgroundColor: 'rgba(66, 61, 61, 1)',
                                borderColor: '#aaa',
                                borderWidth: 1,
                                borderRadius: 4,
                                rich: {
                                    b: {
                                        fontFamily: 'saysettha',
                                        fontSize: 16,
                                        lineHeight: 33
                                    },
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: true
                            }
                        },
                        data: [{
                                value: this.$store.getters.data.inOut.cntVehicleIn,
                                name: `${jdata.amountTitle2.title4}: ${this.$store.getters.data.inOut.cntVehicleIn}`,
                                itemStyle: {
                                    fontFamily: 'saysettha',
                                    color: '#ffe341',
                                },
                            },
                            {
                                value: this.$store.getters.data.inOut.cntVehicleOut,
                                name: `${jdata.amountTitle2.title5}: ${this.$store.getters.data.inOut.cntVehicleOut}`,
                                itemStyle: {
                                    fontFamily: 'saysettha',
                                    color: '#51ef92',
                                },
                                selected: true
                            }
                        ]
                    },
                    {
                        name: 'ຜູ້ໂດຍສານຂາເຂົ້າ-ຂາອອກ',
                        type: 'pie',
                        radius: ['60%', '73%'],
                        center: ['50%', this.size.s4],
                        label: {
                            normal: {
                                show: this.show,
                                formatter: ' {b|{b} }',
                                backgroundColor: 'rgba(66, 61, 61, 0.5)',
                                borderColor: '#aaa',
                                borderWidth: 1,
                                borderRadius: 4,
                                rich: {
                                    b: {
                                        fontFamily: 'saysettha',
                                        fontSize: 16,
                                        lineHeight: 33
                                    },
                                }
                            }
                        },
                        data: [{
                                value: this.$store.getters.data.inOut.cntPersonOut,
                                name: `${jdata.amountTitle2.title2}: ${this.$store.getters.data.inOut.cntPersonOut}`,
                                itemStyle: {
                                    color: '#53e8fc',
                                    fontFamily: 'saysettha',
                                    fontSize: 16
                                }
                            },
                            {
                                value: this.$store.getters.data.inOut.cntPersonIn,
                                name: `${jdata.amountTitle2.title1}: ${this.$store.getters.data.inOut.cntPersonIn}`,
                                itemStyle: {
                                    color: '#f75d5d',
                                    fontFamily: 'saysettha',
                                    fontSize: 16
                                }
                            }
                        ]
                    }
                ]
            }
            return data
        }
    }
}
</script>

<style scoped>
    canvas {
        width: 369px;
    }
</style>
