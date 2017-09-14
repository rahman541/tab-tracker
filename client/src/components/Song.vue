<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Song">
        <div v-for="song in songs" :key="song.title">
          {{ song.title }}
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongsService'
import Panel from '@/components/Panel'
export default {
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  async mounted () {
    this.song = await SongsService.index()
  }
}
</script>

<style scoped>
</style>
