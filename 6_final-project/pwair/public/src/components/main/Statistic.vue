<template lang="html">
  <div>
    <md-card class="example-box-card">
      <md-toolbar md-theme="white" class="md-dense">
        <h3 class="md-title">지난 미세먼지 지수 보기</h3>
      </md-toolbar>

      <md-card-area>
        <md-tabs md-right :md-dynamic-height="false" class="md-transparent example-tabs" style="line-height: 47px !important;">
          <md-tab md-label="어제" md-active>
            <!-- Vue Chart -->
            <BarChart v-bind:selectedPeriod="yesterday"></BarChart>
          </md-tab>

          <md-tab md-label="지난달">
            <!-- Vue Chart -->
            <BarChart v-bind:selectedPeriod="lastMonth"></BarChart>
          </md-tab>
        </md-tabs>
      </md-card-area>
    </md-card>
  </div>
</template>

<script>
import BarChart from '@/utils/charts.js';

export default {
  data () {
    return {
      yesterday: 'yesterday',
      lastMonth: 'lastMonth'
    }
  },
  components: {
    BarChart
  }
}
</script>

<style scoped>
.example-box-card {
  margin: 0 0.3rem;
  position: relative;
  overflow: hidden;
}
.example-tabs {
  margin-top: -48px;

  @media (max-width: 480px) {
    margin-top: -1px;
    background-color: #fff;
  }
}
.md-tabs-navigation-scroll-container {
  height: 47px !important;
  display: flex;
}
</style>
