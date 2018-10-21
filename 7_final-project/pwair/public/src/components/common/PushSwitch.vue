<template lang="html">
  <md-list-item>
    <md-switch v-model="pushChecked" md-align="center" class="md-white">{{ pushSwitchMessage }}</md-switch>
  </md-list-item>
</template>

<script>
import { updateSubscriptionOnServer } from '@/utils/firebase-push'

export default {
  data() {
    return {
      pushChecked: false,
      isSubscribed: false,
      pushSwitchMessage: 'push is off'
    }
  },
  watch: {
    pushChecked() {
      isSubscribed ? this.unSubscribeUser() : this.subscribeUser();
    }
  },
  methods: {
    // Push Registration
    subscribeUser() {
      var self = this;
      swRegistration.pushManager.subscribe({
        userVisibleOnly: true
      })
      .then(function(subscription) {
        console.log('User is subscribed:', subscription);
        console.log(firebase.auth().currentUser);
        var userEmail = firebase.auth().currentUser.email;
        var uid = firebase.auth().currentUser.uid;

        isSubscribed = true;
        updateSubscriptionOnServer(userEmail, subscription, uid, isSubscribed);

        self.updateSwitchText('push is on');
      })
      .catch(function(err) {
        console.log('Failed to subscribe the user: ', err);
        self.updateSwitchText('push is off');
      });
    },
    unSubscribeUser() {
      var self = this;
      swRegistration.pushManager.getSubscription().then(function(subscription) {
        subscription.unsubscribe().then(function(successful) {
          console.log('Unsubscribed subscription : ', subscription);
          var userEmail = firebase.auth().currentUser.email;
          var uid = firebase.auth().currentUser.uid;

          isSubscribed = false;
          updateSubscriptionOnServer(userEmail, subscription, uid, isSubscribed);

          self.updateSwitchText('push is off');
        }).catch(function(e) {
          console.log('Failed to unsubscribe the user: ', e);
          self.updateSwitchText('push is on');
        })
      });
      this.updateSwitchText('push is off');
    },
    updateSwitchText(msg) {
      return this.pushSwitchMessage = msg;
    }
  }
}
</script>
