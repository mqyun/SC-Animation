<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  created() {
    const channel = this.$route.query.channel;
    this.$store.commit({
      type: 'CREATE_WS'
    });
    this.$store.commit({
      type: 'SAVE_CHANNEL',
      channel
    });
  },
}
</script>

<style lang="scss">
  html, body, #app {
    width: 100%;
    height: 100%;
    overflow: hidden {
      y: auto;
    }
  }

  * {
    border: none;
    box-sizing: border-box;
  }
</style>
