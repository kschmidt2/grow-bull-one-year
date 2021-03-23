Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});


function drawHighcharts() {
    Highcharts.chart("chart-container-bull-one-year", { // add the proper ID here
        chart: {
            type: 'line',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 0,
            spacingTop: 20
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '17Ql0YYsBM29J-qIuWYxL0o2NP67QLj8VBkvt8WD_Abk',
        },
        // for line charts only
        plotOptions: {
            series: {
                lineWidth: 1,
                // clip: false,
                marker: {
                    enabled: false,
                    symbol: 'circle',
                    fillColor: '#ffffff',
                    states: {
                        hover: {
                            fillColor: '#ffffff'
                        }
                    }
                }
            }
        },
        legend: {
            align: 'right',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: 10,
            y: -10,
            // enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                },
                // edits xAxis ticks
                // dateTimeLabelFormats: {
                //     week: '%b. %e',
                // },
            },
            tickLength: 5,
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow',
                            // formatter: function () {
            //     return Highcharts.numberFormat(this.value,0,'.',',');
            // },
            },
            // min: ,
            // max: ,
            // tickAmount: ,
            // adds commas to thousands
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            shared: true,
            valueSuffix: '%',
            // valuePrefix: '',
            valueDecimals: 2,
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -8
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    }),
    Highcharts.chart("chart-container-bull-one-year-2", { // add the proper ID here
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100,
            spacingLeft: 0,
            spacingTop: 25
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '17Ql0YYsBM29J-qIuWYxL0o2NP67QLj8VBkvt8WD_Abk',
            googleSpreadsheetWorksheet: 2
        },
        // for bar charts only
        plotOptions: {
            series: {
                groupPadding: 0.1,
                clip: false,
            } 
        },
        // for line charts only
        // plotOptions: {
        //     series: {
        //         lineWidth: 1,
        //         // clip: false,
        //         marker: {
        //             enabled: false,
        //             symbol: 'circle',
        //             fillColor: '#ffffff',
        //             states: {
        //                 hover: {
        //                     fillColor: '#ffffff'
        //                 }
        //             }
        //         }
        //     }
        // },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                },
                // edits xAxis ticks
                // dateTimeLabelFormats: {
                //     week: '%b. %e',
                // },
            },
            tickLength: 5,
            // tickInterval: 24 * 3600 * 1000 * 7
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow',
                            formatter: function () {
                return Highcharts.numberFormat(this.value,0,'.',',');
            },
            },
            plotLines: [{
                width: 2,
                value: 76.12,
                zIndex: 5,
                label: {
                    text: 'S&P 500',
                    align: 'center',
                    y: -5,
                    rotation: 0
                }
            }],
            // min: ,
            max: 1000,
            // tickAmount: ,
            // adds commas to thousands
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            valueSuffix: '%',
            // valuePrefix: '',
            valueDecimals: 2,
        },
        responsive: {
            rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                chart: {
                spacingRight: 20
                },
                legend: {
                    align: 'left',
                    x: -8
                },
                tooltip: {
                    enabled: false
                }
            }
            }]
        }
    })
}

if (document.readyState === 'complete' || document.readyState === 'interactive') {
    drawHighcharts();
} else {
    document.addEventListener("DOMContentLoaded", drawHighcharts);
}