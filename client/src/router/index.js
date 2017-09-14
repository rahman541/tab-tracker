import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Song from '@/components/Song'
import CreateSong from '@/components/CreateSong'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: Hello
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/song',
      name: 'song',
      component: Song
    },
    {
      path: '/songs/create',
      name: 'songs-create',
      component: CreateSong
    }
  ]
})
