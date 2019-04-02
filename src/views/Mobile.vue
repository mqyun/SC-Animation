<template>
  <div class="container">
    <div class="title"></div>
    <div class="nav-item one" @click="checkNav('one')"></div>
    <div class="nav-item two" @click="checkNav('two')"></div>
    <div class="nav-item three" @click="checkNav('three')"></div>
    <div class="nav-item four" @click="checkNav('four')"></div>
    <div class="nav-item five" @click="checkNav('five')"></div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Mobile',

  created() {
    this.setHtmlFontSize();
    if (window.addEventListener) {
      window.addEventListener('resize', () => {
        this.setHtmlFontSize();
      }, false);
    }
  },

  computed: {
    ...mapState(['channel', 'ws'])
  },
  
  methods: {
    setHtmlFontSize() {
      const deviceWidth = document.documentElement.clientWidth;
      document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / 7.5 + 'px !important'
    },

    checkNav(index) {
      const channel = this.channel;
      this.ws.send(JSON.stringify({
        channel: this.channel,
        type: 'audio',
        data: {
          index: 1
        }
      }));
      this.$router.push({
        path: 'mobileDetail',
        query: {
          index,
          channel
        }
      });
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/utils/utils.scss';

.container {
  position: relative;
  width: 100%;
  min-height: 100%;
  overflow: {
    x: hidden;
    y: auto;
  }
  padding-top: rem(356);
  background: linear-gradient(180deg, rgba(24, 41, 68, 1) 0%, rgba(0, 0, 0, 1) 100%);
  text-align: center;
  .title {
    position: absolute;
    top: 0;
    left: 0;
    width: rem(750);
    height: rem(436);
    background: url('../assets/mobile/title.png') no-repeat {
      size: 100%;
    }
  }
  .nav-item {
    width: rem(458);
    height: rem(165);
    margin: 0 auto rem(26);
    cursor: pointer;
    &.one {
      background: url('../assets/mobile/nav-one.png') no-repeat {
        size: 100%;
      }
    }
    &.two {
      background: url('../assets/mobile/nav-two.png') no-repeat {
        size: 100%;
      }
    }
    &.three {
      background: url('../assets/mobile/nav-three.png') no-repeat {
        size: 100%;
      }
    }
    &.four {
      background: url('../assets/mobile/nav-four.png') no-repeat {
        size: 100%;
      }
    }
    &.five {
      background: url('../assets/mobile/nav-five.png') no-repeat {
        size: 100%;
      }
    }
  }
}
</style>
