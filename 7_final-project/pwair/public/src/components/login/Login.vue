<template lang="html">
  <form novalidate @submit.stop.prevent="submit">
    <LoginHeader></LoginHeader>
    <LoginForm :toastMessage='toastMessage'></LoginForm>
    <LoginSNS></LoginSNS>
  </form>
</template>

<script>
import LoginHeader from './LoginHeader.vue'
import LoginForm from './LoginForm.vue'
import LoginSNS from './LoginSNS.vue'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  props: ['geoLocation', 'toastMessage'],
  components: {
    LoginHeader: LoginHeader,
    LoginForm: LoginForm,
    LoginSNS: LoginSNS
  }
}
</script>

<style lang="css">
button {
  border-radius: 1em;
}
</style>
