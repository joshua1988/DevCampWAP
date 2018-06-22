<template lang="html">
  <div class="current-air-container">
    <section v-if="geoLocation.currentDistrict" class="air-status-section">
      <span class="main-icon" v-bind:class="airStatusIcon"></span>
      <div class="main-status-score">{{AirInfo.IDEX_MVL}}</div>
      <div class="main-status-text">{{AirInfo.MSRSTE_NM}}의 대기는 지금 {{AirInfo.IDEX_NM}}!</div>
      <div class="main-status-date">기준 : {{AirInfo.MSRDT}}</div>
    </section>
  </div>
</template>

<script>
import { eventBus } from '@/main';

export default {
  // Data from App.vue
  props: {
    'geoLocation' : {
      type: Object,
      // required: true
      // default: 100
    },
    'AirInfo' : {
      type: Object
    },
    'toastMessage': {
      type: Function
    },
    'appStyle' : {
      type: Object
    }
  },
  data () {
    return {
      items: null
    }
  },
  computed: {
    airStatusIcon: function () {
      return {
        'icon-laughing-face': this.AirInfo.IDEX_NM == '좋음',
        'icon-face-open-mouth-eyebrows': this.AirInfo.IDEX_NM == '보통',
        'icon-angry-face-teeth': this.AirInfo.IDEX_NM == '나쁨'
      }
    }
  },
  methods: {
    fetchData(districtName) {
      var self = this;

      // 한글 URL 로 HTTP GET 요청시 발생하는 인코딩 문제 해결 필요
      var decodedURL = districtName;
      var url = 'http://openapi.seoul.go.kr:8088/746a5361636a6f7337336e4f656579/json/RealtimeCityAir/1/25/';

      // 권역 선택 + 자치구 선택
      // http://openAPI.seoul.go.kr:8088/746a5361636a6f7337336e4f656579/json/RealtimeCityAir/1/5/동북권/성북구

      console.log(url);
      return this.$http.get(url).then(function (result) {
        if (result.body.RealtimeCityAir.RESULT.CODE == "INFO-000") {
          var airData = result.body.RealtimeCityAir.row[21];
          console.log("the data was well received");
          // console.log(airData);

          self.setAirStatus(airData);
          self.updateAppColor(airData.IDEX_NM);
        }
      }, function (error) {
        console.log("Failed at calling OPEN API", error);
      });
    },
    setAirStatus(airData) {
      this.AirInfo.MSRDT = airData.MSRDT;
      this.AirInfo.IDEX_NM = airData.IDEX_NM;
      this.AirInfo.PM10 = airData.PM10;
      this.AirInfo.PM25 = airData.PM25;
      this.AirInfo.O3 = airData.O3;
      this.AirInfo.MSRSTE_NM = airData.MSRSTE_NM;
      this.AirInfo.IDEX_MVL = airData.IDEX_MVL;
    },
    updateAppColor(status) {
      switch (status) {
        case '나쁨':
          this.appStyle.background = '#FA4659';
          break;
        case '보통':
          this.appStyle.background = '#ffa020';
          break;
        case '좋음':
          this.appStyle.background = '#53dcbf';
          break;
        default:
      }
    }
  },
  created() {
    // Get weather info from Seoul Weather Center
    this.fetchData();

    // eventClick passed from a different component (Header)
    var self = this;
    eventBus.$on('refresh', function (data) {
      self.fetchData(self.geoLocation.currentDistrict)
    });
  },
  watch: {
    // call again the method if the route changes
    '$route': ['fetchData']
  }
}
</script>

<style lang="css">
.current-air-container {
  text-align: center;
  color: white;
  height: 60%;
  display: table;
  width: 100%;
}
.air-status-section {
  vertical-align: middle;
  line-height: normal;
  display: table-cell;
}
.main-icon {
  font-size: 7rem;
}
.main-status-text {
  font-size: 1.6rem;
  margin: 1rem 0 0.5rem;
  font-weight: bolder;
}
.main-status-date {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.73);
}
.main-status-score {
  font-size: 3.2rem;
  font-weight: 100;
}
</style>
