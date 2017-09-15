<template>
  <panel title="Song Metadata">
    <v-layout>
      <v-flex xs6>
        <div class="song-title">
          {{ song.title }}
        </div>
        <div class="song-artist">
          {{ song.artist }}
        </div>
        <div class="song-genre">
          {{ song.genre }}
        </div>
      </v-flex>

      <v-flex xs6>
        <img class="album-image" :src="song.albumImageUrl" /> <br/>
        {{ song.album }}
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
export default {
  props:[
    'song'
  ]
}
</script>

<style scoped>
</style>
