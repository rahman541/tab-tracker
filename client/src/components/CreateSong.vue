<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song metadata">
        <v-text-field
          label="Title"
          v-model="title"
        ></v-text-field>

        <v-text-field
          label="Genre"
          v-model="genre"
        ></v-text-field>

        <v-text-field
          label="Album"
          v-model="album"
        ></v-text-field>

        <v-text-field
          label="Album Image Url"
          v-model="albumImage"
        ></v-text-field>

        <v-text-field
          label="Youtube ID"
          v-model="youtubeId"
        ></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-2">
        <v-text-field
            label="Tab"
            multi-line
            v-model="tab"
          ></v-text-field>

          <v-text-field
            label="Lyrics"
            multi-line
            v-model="lyrics"
          ></v-text-field>
      </panel>
      <v-btn dark class="cyan" @click="create">Create Song</v-btn>
    </v-flex>
  </v-layout>
</template>

<script>
import Panel from '@/components/Panel'
export default {
  data () {
    return {
      id: null,
      title: null,
      artist: null,
      genre: null,
      album: null,
      albumImage: null,
      youtubeId: null,
      lyrics: null,
      tab: null
    }
  },
  methods: {
    create () {

    }
  },
  components: {
    Panel
  }
}
</script>

<style scoped>
</style>
