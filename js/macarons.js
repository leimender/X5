/**
 * Created by Administrator on 2016/9/1 0001.
 */
define(function() {

    var theme = {
        // Ĭ��ɫ��
        color: [
            '#2ec7c9','#b6a2de','#5ab1ef','#ffb980','#d87a80',
            '#8d98b3','#e5cf0d','#97b552','#95706d','#dc69aa',
            '#07a2a4','#9a7fd1','#588dd5','#f5994e','#c05050',
            '#59678c','#c9ab00','#7eb00a','#6f5553','#c14089'
        ],

        // ͼ�����
        title: {
            textStyle: {
                fontWeight: 'normal',
                color: '#008acd'          // ������������ɫ
            }
        },

        // ֵ��
        dataRange: {
            itemWidth: 15,
            color: ['#5ab1ef','#e0ffff']
        },

        // ������
        toolbox: {
            color : ['#1e90ff', '#1e90ff', '#1e90ff', '#1e90ff'],
            effectiveColor : '#ff4500'
        },

        // ��ʾ��
        tooltip: {
            backgroundColor: 'rgba(50,50,50,0.5)',     // ��ʾ������ɫ��Ĭ��Ϊ͸����Ϊ0.7�ĺ�ɫ
            axisPointer : {            // ������ָʾ���������ᴥ����Ч
                type : 'line',         // Ĭ��Ϊֱ�ߣ���ѡΪ��'line' | 'shadow'
                lineStyle : {          // ֱ��ָʾ����ʽ����
                    color: '#008acd'
                },
                crossStyle: {
                    color: '#008acd'
                },
                shadowStyle : {                     // ��Ӱָʾ����ʽ����
                    color: 'rgba(200,200,200,0.2)'
                }
            }
        },

        // �������ſ�����
        dataZoom: {
            dataBackgroundColor: '#efefff',            // ���ݱ�����ɫ
            fillerColor: 'rgba(182,162,222,0.2)',   // �����ɫ
            handleColor: '#008acd'    // �ֱ���ɫ
        },

        // ����
        grid: {
            borderColor: '#eee'
        },

        // ��Ŀ��
        categoryAxis: {
            axisLine: {            // ��������
                lineStyle: {       // ����lineStyle����������ʽ
                    color: '#008acd'
                }
            },
            splitLine: {           // �ָ���
                lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                    color: ['#eee']
                }
            }
        },

        // ��ֵ��������Ĭ�ϲ���
        valueAxis: {
            axisLine: {            // ��������
                lineStyle: {       // ����lineStyle����������ʽ
                    color: '#008acd'
                }
            },
            splitArea : {
                show : true,
                areaStyle : {
                    color: ['rgba(250,250,250,0.1)','rgba(200,200,200,0.1)']
                }
            },
            splitLine: {           // �ָ���
                lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                    color: ['#eee']
                }
            }
        },

        polar : {
            axisLine: {            // ��������
                lineStyle: {       // ����lineStyle����������ʽ
                    color: '#ddd'
                }
            },
            splitArea : {
                show : true,
                areaStyle : {
                    color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
                }
            },
            splitLine : {
                lineStyle : {
                    color : '#ddd'
                }
            }
        },

        timeline : {
            lineStyle : {
                color : '#008acd'
            },
            controlStyle : {
                normal : { color : '#008acd'},
                emphasis : { color : '#008acd'}
            },
            symbol : 'emptyCircle',
            symbolSize : 3
        },

        // ����ͼĬ�ϲ���
        bar: {
            itemStyle: {
                normal: {
                    barBorderRadius: 5
                },
                emphasis: {
                    barBorderRadius: 5
                }
            }
        },

        // ����ͼĬ�ϲ���
        line: {
            smooth : true,
            symbol: 'emptyCircle',  // �յ�ͼ������
            symbolSize: 3           // �յ�ͼ�δ�С
        },

        // K��ͼĬ�ϲ���
        k: {
            itemStyle: {
                normal: {
                    color: '#d87a80',       // ���������ɫ
                    color0: '#2ec7c9',      // ���������ɫ
                    lineStyle: {
                        color: '#d87a80',   // ���߱߿���ɫ
                        color0: '#2ec7c9'   // ���߱߿���ɫ
                    }
                }
            }
        },

        // ɢ��ͼĬ�ϲ���
        scatter: {
            symbol: 'circle',    // ͼ������
            symbolSize: 4        // ͼ�δ�С������뾶����������ͼ��Ϊ������������ܿ��ΪsymbolSize * 2
        },

        // �״�ͼĬ�ϲ���
        radar : {
            symbol: 'emptyCircle',    // ͼ������
            symbolSize:3
            //symbol: null,         // �յ�ͼ������
            //symbolRotate : null,  // ͼ����ת����
        },

        map: {
            itemStyle: {
                normal: {
                    areaStyle: {
                        color: '#ddd'
                    },
                    label: {
                        textStyle: {
                            color: '#d87a80'
                        }
                    }
                },
                emphasis: {                 // Ҳ��ѡ����ʽ
                    areaStyle: {
                        color: '#fe994e'
                    }
                }
            }
        },

        force : {
            itemStyle: {
                normal: {
                    linkStyle : {
                        color : '#1e90ff'
                    }
                }
            }
        },

        chord : {
            itemStyle : {
                normal : {
                    borderWidth: 1,
                    borderColor: 'rgba(128, 128, 128, 0.5)',
                    chordStyle : {
                        lineStyle : {
                            color : 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                },
                emphasis : {
                    borderWidth: 1,
                    borderColor: 'rgba(128, 128, 128, 0.5)',
                    chordStyle : {
                        lineStyle : {
                            color : 'rgba(128, 128, 128, 0.5)'
                        }
                    }
                }
            }
        },

        gauge : {
            axisLine: {            // ��������
                lineStyle: {       // ����lineStyle����������ʽ
                    color: [[0.2, '#2ec7c9'],[0.8, '#5ab1ef'],[1, '#d87a80']],
                    width: 10
                }
            },
            axisTick: {            // ������С���
                splitNumber: 10,   // ÿ��splitϸ�ֶ��ٶ�
                length :15,        // ����length�����߳�
                lineStyle: {       // ����lineStyle����������ʽ
                    color: 'auto'
                }
            },
            splitLine: {           // �ָ���
                length :22,         // ����length�����߳�
                lineStyle: {       // ����lineStyle�����lineStyle������������ʽ
                    color: 'auto'
                }
            },
            pointer : {
                width : 5
            }
        },

        textStyle: {
            fontFamily: '΢���ź�, Arial, Verdana, sans-serif'
        }
    };

    return theme;
});