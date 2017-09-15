<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song metadata">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title"
        ></v-text-field>

        <v-text-field
          label="Genre"
          required
          :rules="[required]"
          v-model="song.genre"
        ></v-text-field>

        <v-text-field
          label="Artist"
          required
          :rules="[required]"
          v-model="song.artist"
        ></v-text-field>

        <v-text-field
          label="Album"
          required
          :rules="[required]"
          v-model="song.album"
        ></v-text-field>

        <v-text-field
          label="Album Image Url"
          required
          :rules="[required]"
          v-model="song.albumImageUrl"
        ></v-text-field>

        <v-text-field
          label="Youtube ID"
          required
          :rules="[required]"
          v-model="song.youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-text-field
            label="Tab"
            required
            :rules="[required]"
            multi-line
            v-model="song.tab"
          ></v-text-field>

          <v-text-field
            label="Lyrics"
            required
            :rules="[required]"
            multi-line
            v-model="song.lyrics"
          ></v-text-field>
      </panel>

      <v-alert
        class="ml-4"
        :value="error"
        transition="scale-transition"
        error>
        {{error}}
      </v-alert>﻿

      <v-btn dark class="cyan" @click="save">Update Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'
export default {
  data () {
    return {
      error: null,
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Field is required.'
    }
  },
  methods: {
    async save () {
      this.error = null
      const areAllFieldFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (!areAllFieldFilledIn) {
        this.error = 'Please fill in all the required field.'
        return
      }
      try {
        const songId = this.$store.state.route.params.songId
        await SongsService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    console.log('songsss')
    try {
      const songId = this.$store.state.route.params.songId
      this.song = (await SongsService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
