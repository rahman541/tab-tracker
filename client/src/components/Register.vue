<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-2">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>
        <div  class="pl-4 pr-4 pb-2">

          <v-text-field
            v-model="email"
            name="email"
            label="Email"
            id="email"
          ></v-text-field>

          <v-text-field
            v-model="password"
            name="password"
            label="Password"
            id="password"
          ></v-text-field>

          <div v-html="error" class="error" /><br/>

          <v-btn class="cyan" @click="register" dark>Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
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
        console.log(response)
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
