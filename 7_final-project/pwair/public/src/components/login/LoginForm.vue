<template lang="html">
  <section class="section-login-input">
    <md-input-container>
      <md-input type="text" v-model="email" placeholder="Email"></md-input>
    </md-input-container>
    <md-input-container>
      <md-input type="password" v-model="password" placeholder="Password"></md-input>
    </md-input-container>
    <md-button class="btn-default btn-full" v-on:click.native="loginWithInfo">Login</md-button>
  </section>
</template>

<script>
export default {
  props: ['toastMessage'],
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    loginWithInfo(event) {
      var self = this;
      if (this.loginExceptionHandler()) return true;

      return firebase.auth().signInWithEmailAndPassword(this.email, this.password).catch(function(error) {
        if (error.code === 'auth/wrong-password') {
          alert('Wrong password.');
        } else {
          alert(error.message);
        }
        console.log(error);
      }).then(function (user) {
        console.log(user, "has been logged");
        self.clearForm();
        self.authRouter();
        self.$router.push({path : '/home'});
        self.toastMessage(user.email + " just logged in");
      });
    },
    loginExceptionHandler() {
      if ( this.email === "" || this.password === "") {
        alert("enter the email and password");
        return true;
      }
      return false;
    },
    clearForm() {
      this.email = "";
      this.password = "";
    },
    authRouter() {
      this.$router.options.routes[1].meta.authRequired = false;
    }
  }
}
</script>

<style scoped>
.section-login-input {
  padding: 1.5rem;
  padding: 1.5rem;
  margin: 0 2rem 1rem;
  background: white;
  padding: 1rem 1.5rem 1.5rem;
}
.md-input-container {
  margin: 0px 0 24px;
}
.btn-default {
  background: #ffe340;
}
.btn-full {
  width: 100%;
  margin: 0;
}
</style>
