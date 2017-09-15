<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Login">
        <v-text-field
          v-model="email"
          name="email"
          label="Email"
          id="email"
        ></v-text-field>

        <v-text-field
          v-model="password"
          type="password"
          name="password"
          label="Password"
          id="password"
        ></v-text-field>

        <v-alert
          :value="error"
          transition="scale-transition"
          error>
          {{ error }}
        </v-alert>﻿

        <v-btn class="cyan" @click="login" dark>Login</v-btn>
      </panel>
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
    async login () {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
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
