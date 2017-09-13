<template>
  <div>
    <h1>Register</h1>

    <input type="email" name="email" placeholder="Email" v-model="email">
    <input type="password" name="password" placeholder="Password" v-model="password">
    <button>Register</button>

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
  watch: {
    email (value) {
      console.log('email updated', value)
    }
  },
  mounted () {
    setTimeout(() => {
      this.email = 'hello world'
    }, 1000)
  }
}
</script>

<style scoped>

</style>
