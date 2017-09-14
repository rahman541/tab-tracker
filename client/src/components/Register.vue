<template>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" placeholder="Email" v-model="email">
    <input type="password" name="password" placeholder="Password" v-model="password">

    <div v-html="error" class="error" /><br/>

    <button @click="register">Register</button>

  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<style scoped>
.error { color: red; }
</style>
