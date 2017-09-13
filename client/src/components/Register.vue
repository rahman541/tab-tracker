<template>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" placeholder="Email" v-model="email">
    <input type="password" name="password" placeholder="Password" v-model="password">
    <button @click="register">Register</button>

  </div>
</template>

<script>
export default {
  data () {
    return {
      email: 'ahs@yahoo.com',
      password: '1213232'
    }
  },
  methods: {
    register () {
      console.log('register button clicked!', this.email, this.password)
    }
  }
}
</script>

<style scoped>

</style>
