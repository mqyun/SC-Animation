<template>
  <div class="pc-container">
    <button class="btn start" @click="start">合并</button>
    <div class="in-title" v-show="inTitleBlock"></div>
    <div class="top-title" v-show="topTitleBlock"></div>
    <div :class="['container', { animateall: animateAll }]" ref="allItemBox">
      <animate-item
        :class="['item-animate', { animateone: mergeAnimate.one }]"
        index="one"
        :isdown="isDown"
      />
      <animate-item
        :class="['item-animate', { animatetwo: mergeAnimate.two }]"
        index="two"
        :isdown="isDown"
      />
      <animate-item
        :class="['item-animate', { animatethree: mergeAnimate.three }]"
        index="three"
        :isdown="isDown"
      />
      <animate-item
        :class="['item-animate', { animatefour: mergeAnimate.four }]"
        index="four"
        :isdown="isDown"
      />
      <animate-item
        :class="['item-animate', { animatefive: mergeAnimate.five }]"
        index="five"
        :isdown="isDown"
      />
    </div>
  </div>
</template>

<script>
import AnimateItem from '@/components/AnimateItem';

export default {
  name: 'Pc',

  data() {
    return {
      inTitleBlock: false,
      topTitleBlock: true,
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

  created() {
    this.setHtmlFontSize();
    if (window.addEventListener) {
      window.addEventListener('resize', () => {
        this.setHtmlFontSize();
      }, false);
    }
  },

  components: {
    AnimateItem
  },

  methods: {
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
      }, 2400);
      setTimeout(() => {
        this.mergeAnimate.two = true;
      }, 4400);
      setTimeout(() => {
        this.mergeAnimate.five = true;
      }, 6400);
      setTimeout(() => {
        this.animateAll = true;
      }, 8400);
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
  background: url('../assets/BG.png') {
    position: center center;
  }
  .btn {
    position: fixed;
    left: 50%;
    margin-left: rem(-50);
    width: rem(100);
    height: rem(40);
    border-radius: rem(10);
    cursor: pointer;
    outline: none;
    &.start {
      top: rem(50);
    }
  }
  .in-title {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: rem(-502/2);
    margin-left: rem(-1893/2);
    width: rem(1893);
    height: rem(502);
    background: url('../assets/in-title.png') no-repeat {
      size: 100%;
    }
  }
  .top-title {
    position: absolute;
    top: rem(95);
    left: 50%;
    margin-left: rem(-988/2);
    width: rem(988);
    height: rem(65);
    background: url('../assets/top-title.png') no-repeat {
      size: 100%;
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
        @include animate-merge(mergeone, 0, 0);
      }
      &.animatetwo {
        @include animate-merge(mergetwo, rem(200), rem(344+15));
      }
      &.animatefour {
        @include animate-merge(mergefour, rem(200), rem((344+15)*3));
      }
      &.animatefive {
        @include animate-merge(mergefive, 0, rem((344+15)*4));
      }
    }
    &.animateall {
      transform: scale(2);
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
