<template lang="html">
  <div>
    <!-- header on the top -->
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <span class="nav-icon icon-menu"></span>
      </md-button>
      <h2 class="md-title">PWAir</h2>
      <span style="flex: 1"></span>
      <md-button class="md-icon-button" v-on:click.native="refreshData">
        <span class="nav-icon icon-refresh2"></span>
      </md-button>
    </md-toolbar>

    <!-- side navbar -->
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar>
        <div class="md-toolbar-container">
          <h3 class="md-title side-nav-title">Sidenav content</h3>
        </div>
      </md-toolbar>
      <md-list>
        <md-list-item>
          <router-link to="/home" v-on:click.native="toggleLeftSidenav">Home</router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/logs" v-on:click.native="toggleLeftSidenav">Statistic</router-link>
        </md-list-item>
        <md-list-item @click.native="signOut">Logout</md-list-item>
        <PushSwitch></PushSwitch>
      </md-list>
    </md-sidenav>
  </div>
</template>

<script>
  import PushSwitch from './PushSwitch.vue'
  import { eventBus } from '@/main';

  export default {
    props: {
      'toastMessage': Function
    },
    methods: {
      // Header Buttons
      toggleLeftSidenav(event) {
        event.preventDefault();
        return this.$refs.leftSidenav.toggle();
      },
      refreshData() {
        eventBus.$emit('refresh', 10);
      },
      signOut(event) {
        var self = this;
        firebase.auth().signOut().then(function() {
          self.deAuth();
          self.$router.push({path : '/'});
          self.toastMessage('Logged out');
        }, function(error) {
          console.log("error : ", error);
        });
      },
      deAuth() {
        this.$router.options.routes[1].meta.authRequired = true;
      }
    },
    components: {
      PushSwitch: PushSwitch
    }
  }
</script>

<style lang="css">
.side-nav-title {
  color: black;
}
.md-toolbar {
  background-color: transparent !important;
}
.nav-icon {
  font-size: 1.6rem;
}
</style>
