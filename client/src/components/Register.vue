<template>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" placeholder="Email" v-model="email">
    <input type="password" name="password" placeholder="Password" v-model="password">
    <button @click="register">Register</button>

  </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: 'ahs@yahoo.com',
      password: '1213232'
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>

</style>
