// import the component - chart you need
import { Bar } from 'vue-chartjs'
import { getYesterday, getLastMonth } from './time.js'

export default Bar.extend({
  props: ['selectedPeriod'],
  data () {
    return {
      datacollection: {
        labels: [],
        datasets: [
          {
            label: '',
            backgroundColor: '#f4e1e1',
            data: []
          }
        ]
      },
      url: '',
      dailyURL: 'http://openAPI.seoul.go.kr:8088/746a5361636a6f7337336e4f656579/json/DailyAverageAirQuality/1/1/',
      monthlyURL: 'http://openapi.seoul.go.kr:8088/746a5361636a6f7337336e4f656579/json/MonthlyAverageAirQuality/1/1/'
    }
  },
  created () {
    if (this.selectedPeriod == 'yesterday') {
      this.updateURL('daily');
      this.fetchData('yesterday');
    } else {
      this.updateURL('monthly');
      this.fetchData('lastMonth');
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    // this.renderChart(this.datacollection);
  },
  methods: {
    clearChartData() {
      this.datacollection.labels = [];
      this.datacollection.datasets[0].data = [];
    },
    updateURL(date) {
      if (date == 'daily') {
        this.url = this.dailyURL + getYesterday();
      } else if (date == 'monthly') {
        this.url = this.monthlyURL + getLastMonth();
      }
    },
    setChartLabel(text) {
      this.datacollection.datasets[0].label = text;
    },
    setChartX_Asis(xValue) {
      this.datacollection.labels.push(xValue);
    },
    setChartY_Asis(yValue) {
      this.datacollection.datasets[0].data.push(yValue);
    },
    fetchData(period) {
      return this.$http.get(this.url).then(function (result) {
        switch (period) {
          case 'yesterday':
            if (result.body.DailyAverageAirQuality.RESULT.CODE == "INFO-000") {
              this.clearChartData();
              var resultObj = result.body.DailyAverageAirQuality.row[0];

              // 그래프 상단 이름 지정
              var label = resultObj.MSRDT_DE + " " + resultObj.MSRSTE_NM + '의 날씨';
              this.setChartLabel(label);

              // x 축값 대입
              this.setChartX_Asis('미세먼지');
              this.setChartX_Asis('초미세먼지');

              // y 축값 대입
              this.setChartY_Asis(resultObj.PM10);
              this.setChartY_Asis(resultObj.PM25);

              // 차트 그리기
              this.renderChart(this.datacollection);
            }
            break;
          case 'lastMonth':
            if (result.body.MonthlyAverageAirQuality.RESULT.CODE == "INFO-000") {
              this.clearChartData();
              var resultObj = result.body.MonthlyAverageAirQuality.row[0];

              // 그래프 상단 이름 지정
              var label = resultObj.MSRDT_MT + " " + resultObj.MSRSTE_NM + '의 평균 날씨';
              this.setChartLabel(label);

              // x 축값 대입
              this.setChartX_Asis('미세먼지');
              this.setChartX_Asis('초미세먼지');

              // y 축값 대입
              this.setChartY_Asis(resultObj.PM10);
              this.setChartY_Asis(resultObj.PM25);

              this.renderChart(this.datacollection);
            }
            break;
          default:
        }

      }, function (error) {
        console.log("Failed at calling OPEN API", error);
      });
    }
  }
})
