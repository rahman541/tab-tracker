<template>
  <panel title="Youtube Video">
    <youtube
      :video-id="youtubeId"
      :player-width="600"
      :player-height="232"
    ></youtube>
  </panel>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ]
}
</script>

<style scoped>
</style>
