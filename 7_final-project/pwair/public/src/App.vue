<template>
  <div id="app" v-bind:style="appStyle">
    <router-view name="nestedHeader" :toastMessage='openToast'></router-view>
    <router-view v-bind:geoLocation='geoLocation' v-bind:AirInfo='AirInfo' v-bind:appStyle='appStyle' :toastMessage='openToast'></router-view>
    <router-view name="summaryView" v-bind:AirInfo='AirInfo'></router-view>

    <!-- alert on the bottom -->
    <md-snackbar :md-position="vertical + ' ' + horizontal" ref="snackbar" :md-duration="duration">
      <span>{{snackbar_msg}}</span>
      <md-button class="md-lblue" @click.native="$refs.snackbar.close()">Close</md-button>
    </md-snackbar>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      // Toast on the bottom
      vertical: 'bottom',
      horizontal: 'center',
      duration: 3000,
      snackbar_msg: "",

      // Geolocation
      geoLocation : {
        currentLocation: null,
        currentLocationLat: null,
        currentLocationLon: null,
        currentDistrict: null
      },

      // Air status info
      AirInfo : {
        MSRDT: '201706291700',
        IDEX_NM: '나쁨',
        PM10: null,
        PM25: null,
        O3: null
      },

      appStyle : {
        background: '#2772DB',
        height: '100%'
      }
    }
  },
  methods: {
    // Get User's Location Info
    getUserLocation() {
      return navigator.geolocation.getCurrentPosition(function(position) {
        this.geoLocation.currentLocation = position.coords;
        this.geoLocation.currentLocationLon = position.coords.longitude;
        this.geoLocation.currentLocationLat = position.coords.latitude;
        this.geoInfoToDistrictName(position.coords.latitude, position.coords.longitude);
      }.bind(this), function (error) { // getCurrentPosition 비동기 실행 결과 값을 컴포넌트에 매핑
        console.log('Error occurred. Error code: ' + error.code);
        switch (error.code) {
          case 0:
            console.log("Geolocation unknown error");
            break;
          case 1:
            console.log("Geolocation permission denied");
            break;
          case 2:
            console.log("Geolocation position unavailble");
            break;
          case 3:
            console.log("Getting location info timed out");
            break;
          default:
            console.log("Track the error");
        }
      }, { maximumAge: 5 * 60 * 1000 });
    },
    // naver from coord to address -- https://navermaps.github.io/maps.js/docs/tutorial-3-geocoder-geocoding.example.html
    geoInfoToDistrictName(lat, lng) {
      var self = this;
      naver.maps.Service.reverseGeocode({
        // 역삼역 고정값
        location: new naver.maps.LatLng(37.4954841, 127.0333574),
      }, function(status, response) {
        if (status !== naver.maps.Service.Status.OK) {
          return alert('Something wrong!');
        }
        var result = response.result, // 검색 결과의 컨테이너
            items = result.items; // 검색 결과의 배열

        // console.log(items[0].addrdetail.sigugun);
        self.geoLocation.currentDistrict = items[0].addrdetail.sigugun;
      });
    },

    // Toast Log messages
    openToast(msg) {
      this.$refs.snackbar.open();
      this.snackbar_msg = msg;
    }
  },
  created() {
    // Get geolocation info
    if (navigator.geolocation) {
      console.log('Geolocation is supported!');
      this.getUserLocation();
    } else {
      console.log('Geolocation is not supported for this Browser/OS.');
    }
  }
}
</script>
