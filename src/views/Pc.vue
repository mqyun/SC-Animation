<template>
  <div class="pc-container">
    <audio src="" id="eventAudio"></audio>
    <div :class="['in-title', { animate: inTitleAnimate }]"></div>
    <div :class="['top-title', { animate: topTitleAnimate }, { 'animate-final': topTitleFinalAnimate }]"></div>
    <div :class="['final-title', { animate: finalTitleAnimate }]"></div>
    <div :class="['container', { animateall: animateAll }]" ref="allItemBox">
      <animate-item
        :class="['item-animate', { animateone: mergeAnimate.one }]"
        index="one"
        :isdown="isDown"
        ref="animateone"
      />
      <animate-item
        :class="['item-animate', { animatetwo: mergeAnimate.two }]"
        index="two"
        :isdown="isDown"
        ref="animatetwo"
      />
      <animate-item
        :class="['item-animate', { animatethree: mergeAnimate.three }]"
        index="three"
        :isdown="isDown"
        ref="animatethree"
      />
      <animate-item
        :class="['item-animate', { animatefour: mergeAnimate.four }]"
        index="four"
        :isdown="isDown"
        ref="animatefour"
      />
      <animate-item
        :class="['item-animate', { animatefive: mergeAnimate.five }]"
        index="five"
        :isdown="isDown"
        ref="animatefive"
      />
    </div>
  </div>
</template>

<script>
import AnimateItem from '@/components/AnimateItem';
import { mapState } from 'vuex';

export default {
  name: 'Pc',

  data() {
    return {
      isStartAnimate: true,
      inTitleAnimate: false,
      topTitleAnimate: false,
      topTitleFinalAnimate: false,
      finalTitleAnimate: false,
      mergeAnimate: {
        one: false,
        two: false,
        three: false,
        four: false,
        five: false
      },
      animateAll: false,
      isDown: false
    }
  },

  computed: {
    ...mapState(['channel', 'ws', 'inAnimateArr'])
  },

  created() {
    this.setHtmlFontSize();
    if (window.addEventListener) {
      window.addEventListener('resize', () => {
        this.setHtmlFontSize();
      }, false);
    }
    this.initWebsocket();
  },

  components: {
    AnimateItem
  },

  methods: {
    initWebsocket() {
      this.ws.onmessage = (e) => {
        const data = JSON.parse(e.data);
        if (this.channel === data.channel) {
          // 动画
          if (data.type === 'animate') {
            if (this.isStartAnimate) {
              this.startAnimate();
            }
            this.$store.commit({
              type: 'SAVE_INANIMATE',
              index: data.data.index
            });
            this.$refs[`animate${data.data.index}`].start();
            if (this.inAnimateArr.length === 5) {
              setTimeout(() => {
                this.start();
              }, 2000);
            }
          }
          // 声音
          if (data.type === 'audio') {
            this.playAudio(parseInt(data.data.index));
          }
        }
      }
    },

    // 开始动画
    startAnimate() {
      this.isStartAnimate = false;
      this.animatein();
    },

    setHtmlFontSize() {
      const deviceWidth = document.documentElement.clientWidth > 1920 ? 1920 : document.documentElement.clientWidth
      document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / 19.2 + 'px !important'
    },

    start() {
      this.isDown = true;
      setTimeout(() => {
        this.mergeAnimate.one = true;
      }, 400);
      setTimeout(() => {
        this.mergeAnimate.four = true;
      }, 1200);
      setTimeout(() => {
        this.mergeAnimate.two = true;
      }, 2000);
      setTimeout(() => {
        this.mergeAnimate.five = true;
      }, 2400);
      setTimeout(() => {
        this.animateAll = true;
      }, 3600);
      setTimeout(() => {
        this.topTitleAnimate = true;
        this.topTitleFinalAnimate = true;
      }, 4200);
      setTimeout(() => {
        this.finalTitleAnimate = true;
      }, 5100);
    },

    animatein() {
      this.inTitleAnimate = true;
      setTimeout(() => {
        this.topTitleAnimate = true;
      }, 100);
    },

    playVideo() {
      this.playAudio(2);
    }
  }
}
</script>

<style lang='scss' scoped>
@import '@/utils/utils.scss';

.pc-container {
  position: relative;
  transform-origin: center bottom;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url('../assets/BG.png') {
    position: center center;
  }
  .in-title {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: rem(-502/2);
    margin-left: rem(-1893/2);
    width: rem(1893);
    height: rem(502);
    transform: scale(1);
    background: url('../assets/in-title.png') no-repeat {
      size: 100%;
    }
    &.animate {
      transform: scale(0);
      animation: intitle .8s;
    }
    @keyframes intitle {
      from {
        transform: scale(1)
      }
      to {
        transform: scale(0)
      }
    }
  }
  .top-title {
    transform: scale(0);
    position: absolute;
    top: rem(95);
    left: 50%;
    margin-left: rem(-988/2);
    width: rem(988);
    height: rem(65);
    transform: scale(0);
    background: url('../assets/top-title.png') no-repeat {
      size: 100%;
    }
    &.animate {
      transform: scale(1);
      animation: toptitle .8s;
    }
    @keyframes toptitle {
      from {
        transform: scale(0)
      }
      to {
        transform: scale(1)
      }
    }
    &.animate-final {
      opacity: 0;      
      animation: toptitle-final .8s;
    }
    @keyframes toptitle-final {
      from {
        opacity: 1
      }
      to {
        opacity: 0
      }
    }
  }
  .final-title {
    position: absolute;
    left: 50%;
    margin-top: 0;
    top: rem(-600);
    margin-left: rem(-621);
    width: rem(1242);
    height: rem(571);
    z-index: 99;
    background: url('../assets/final-logo.png') no-repeat {
      size: 100%;
    }
    &.animate {  
      top: 50%;
      margin-top: rem(-300);
      animation: finaltitle .7s;
    }
    @keyframes finaltitle {
      0% {
        top: rem(-600);
        margin-top: 0;
      }
      20% {
        top: 50%;
        margin-top: rem(-300);
      }
      40% {
        top: 50%;
        margin-top: rem(-425);
      }
      60% {
        top: 50%;
        margin-top: rem(-300);
      }
      80% {
        top: 50%;
        margin-top: rem(-330);
      }
      100% {
        top: 50%;
        margin-top: rem(-300);
      }
    }
  }
  .container {
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: rem(-(344*5+15*4) / 2);
    width: rem(344*5+15*4);
    height: rem(344+468);
    .item-animate {
      &.animateone {
        @include animate-merge(mergeone, 0, 0, -5);
      }
      &.animatetwo {
        @include animate-merge(mergetwo, 200, 344+15, -5, .8s);
      }
      &.animatefour {
        @include animate-merge(mergefour, 200, (344+15)*3, 5, .8s);
      }
      &.animatefive {
        @include animate-merge(mergefive, 0, (344+15)*4, 5);
      }
    }
    &.animateall {
      transform: scale(2.5);
      transform-origin: center 33.3%;
      animation: animateall 1.5s;
      @keyframes animateall {
        0% {
          transform: scale(1)
        }
        15% {
          transform: scale(.9)
        }
        30% {
          transform: scale(1.1)
        }
        45% {
          transform: scale(.9)
        }
        60% {
          transform: scale(1.1)
        }
        75% {
          transform: scale(0)
        }
        100% {
          transform: scale(2)
        }
      }
    }
  }
}
</style>
