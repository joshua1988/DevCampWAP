<template>
  <section class="weather-info-section">
    <div class="weather-info-container">
      <div class="d-w-info">
        <span class="current-title">미세먼지</span>
        <span class="current-icon icon-laughing-face"></span>
        <span class="current-status">좋음</span>
        <span>{{AirInfo.PM10}}㎍/㎥</span>
      </div>
      <div class="d-w-info">
        <span class="current-title">오존</span>
        <span class="current-icon icon-angry-face-teeth"></span>
        <span class="current-status">나쁨</span>
        <span>{{AirInfo.O3}}ppm</span>
      </div>
      <div class="d-w-info">
        <span class="current-title">초미세먼지</span>
        <span class="current-icon icon-face-open-mouth-eyebrows"></span>
        <span class="current-status">보통</span>
        <span>{{AirInfo.PM25}}㎍/㎥</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: ['AirInfo']
}
</script>

<style lang="css">
.weather-info-section {
  position: absolute;
  background: rgba(255, 255, 255, 0.35);
  top: 72%;
  bottom: 0;
  width: 100%;
  color: white;
}
.weather-info-container {
  display: flex;
  text-align: center;
  margin-top: 7%;
  padding: 0 0.5rem;
}
.d-w-info {
  width: 33%;
  display: inline-grid;
}
.d-w-info .current-title {
  font-size: 1.1rem;
}
.d-w-info .current-icon {
  font-size: 3rem;
  margin-top: 4px;
}
</style>
