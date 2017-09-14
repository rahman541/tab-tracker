<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Register">
        <form name="tab-tracker-form" autocomplete="off">
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
            autocomplete="new-password"
            id="password"
          ></v-text-field>

          <div v-html="error" class="error" /><br/>

          <v-btn class="cyan" @click="register" dark>Register</v-btn>
        </form>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
import Panel from '@/components/Panel'
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
        this.$store.dispatch('setToken', response.data.token)
        this.$store.dispatch('setUser', response.data.user)
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
.error { color: red; }
</style>
