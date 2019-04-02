<template>
  <div :class="['item-box', index]" ref="itemBox">
    <div :class="['top-container', {rotate: rotate}]" ref="itemContainer">
      <div class="line-one"></div>
      <div class="line-two"></div>
      <div class="line-three"></div>
      <div class="line-four"></div>
      <div class="rotate-fixed"></div>
      <div class="line-six"></div>
      <div class="block-red"></div>
      <div class="block-green"></div>
      <div class="block-blue"></div>
      <div :class="['logo', index, {animate: logoAnimate}]" ref="logoBox"></div>
    </div>
    <div class="bottom-container" ref="bottomBox">
      <div class="line-top">
        <div class="line-con" ref="botTopLine"></div>
      </div>
      <div class="name-box" ref="nameBox">
        <img src="@/assets/name-one.png" v-if="index === 'one'" alt="">
        <img src="@/assets/name-two.png" v-if="index === 'two'" alt="">
        <img src="@/assets/name-three.png" v-if="index === 'three'" alt="">
        <img src="@/assets/name-four.png" v-if="index === 'four'" alt="">
        <img src="@/assets/name-five.png" v-if="index === 'five'" alt="">
      </div>
      <div class="line-bottom">
        <div class="line-con" ref="botBotLine"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { asyncAnimate } from '@/utils/utils';

export default {
  name: 'AnimateItem',

  props: ['index', 'isdown'],

  data() {
    return {
      rotate: false,
      logoAnimate: false
    }
  },

  methods: {
    async start() {
      const botBotLine = $(this.$refs['botBotLine']);
      const nameBox = $(this.$refs['nameBox']);
      const botTopLine = $(this.$refs['botTopLine']);
      const itemContainer = $(this.$refs['itemContainer']);
      await asyncAnimate({
        dom: botBotLine,
        options: {
          top: 0
        },
        time: 500
      });
      await asyncAnimate({
        dom: nameBox,
        options: {
          opacity: 1
        },
        time: 50
      });
      await asyncAnimate({
        dom: botTopLine,
        options: {
          top: 0
        },
        time: 500
      });
      await asyncAnimate({
        dom: itemContainer,
        options: {
          opacity: 1
        },
        time: 50
      });
      this.rotate = true;
      this.logoAnimate = true;
    },
    async down() {
      const bottomBox = $(this.$refs['bottomBox']);
      await asyncAnimate({
        dom: bottomBox,
        options: {
          top: '8rem'
        },
        time: 400,
        easing: 'swing'
      });
      bottomBox.remove();
    }
  },
  watch: {
    isdown(val) {
      if (val) {
        this.down();
        setTimeout(() => {
          if (this.index !== 'three') {
            $(this.$refs['itemBox']).remove();
          } else {
            $(this.$refs['logoBox']).remove();
          }
        }, 4600);
      }
    }
  },
}
</script>

<style lang='scss' scoped>
@import '@/utils/utils.scss';

.item-box {
  position: absolute;
  bottom: 0;
  width: rem(344);
  &.one {
    top: 0;
    left: 0;
  }
  &.two {
    top: rem(200);
    left: rem(344+15);
  }
  &.three {
    top: rem(100);
    left: rem((344+15)*2);
  }
  &.four {
    top: rem(200);
    left: rem((344+15)*3);
  }
  &.five {
    top: 0;
    left: rem((344+15)*4);
  }
  .top-container {
    position: absolute;
    top: 0;
    width: rem(344);
    height: rem(344);
    opacity: .2;
    .logo {
      transform: scale(0);
      &.animate {
        animation: logo-animate .25s;
        transform: scale(1);
        @keyframes logo-animate {
          0% {
            transform: scale(0)
          }
          45% {
            transform: scale(1.3)
          }
          100% {
            transform: scale(1)
          }
        }
      }
      &.one {
        @include absolute-center(140, 116);
        background: url('../assets/logo1.png') no-repeat {
          size: 100%;
        }
      }
      &.two {
        @include absolute-center(138, 138);
        background: url('../assets/logo2.png') no-repeat {
          size: 100%;
        }
      }
      &.three {
        @include absolute-center(126, 140);
        background: url('../assets/logo3.png') no-repeat {
          size: 100%;
        }
      }
      &.four {
        @include absolute-center(130, 130);
        background: url('../assets/logo4.png') no-repeat {
          size: 100%;
        }
      }
      &.five {
        @include absolute-center(130, 126);
        background: url('../assets/logo5.png') no-repeat {
          size: 100%;
        }
      }
    }
    .line-one {
      @include absolute-center(326, 326);
      background: url('../assets/line-one.png') no-repeat {
        size: 100%;
      }
    }
    .line-two {
      @include absolute-center(258, 258);
      background: url('../assets/line-two.png') no-repeat {
        size: 100%;
      }
    }
    .line-three {
      @include absolute-center(200, 200);
      background: url('../assets/line-three.png') no-repeat {
        size: 100%;
      }
    }
    .line-four {
      @include absolute-center(155, 155);
      background: url('../assets/line-four.png') no-repeat {
        size: 100%;
      }
    }
    .rotate-fixed {
      @include absolute-center(206, 278);
      top: 0;
      margin-top: rem(13);
      background: url('../assets/rotate-fixed.png') no-repeat {
        size: 100%;
      }
    }
    .block-red {
      @include absolute-center(268, 269);
      background: url('../assets/block-red.png') no-repeat {
        size: 100%;
      }
    }
    .block-green {
      @include absolute-center(318, 318);
      background: url('../assets/block-green.png') no-repeat {
        size: 100%;
      }
    }
    .block-blue {
      @include absolute-center(336, 336);
      background: url('../assets/block-blue.png') no-repeat {
        size: 100%;
      }
    }
    &.rotate {
      .line-one {
        animation: lineone 8s infinite linear;
      }
      @keyframes lineone {
        from {
          transform: rotate(0deg)
        }
        to {
          transform: rotate(359deg)
        }
      }
      .line-two {
        animation: linetwo 15s infinite linear;
      }
      @keyframes linetwo {
        from {
          transform: rotate(0deg)
        }
        to {
          transform: rotate(-359deg)
        }
      }
      .line-three {
        animation: linethree 2s infinite linear;
      }
      @keyframes linethree {
        0% {
          transform: rotate(53deg)
        }
        45% {
          transform: rotate(-27deg)
        }
        50% {
          transform: rotate(-32deg)
        }
        95% {
          transform: rotate(48deg)
        }
        100% {
          transform: rotate(53deg)
        }
      }
      .line-four {
        animation: linefour 6s infinite linear;
      }
      @keyframes linefour {
        from {
          transform: rotate(0deg)
        }
        to {
          transform: rotate(359deg)
        }
      }
      .block-red {
        animation: blockred 6s infinite linear;
      }
      @keyframes blockred {
        from {
          transform: rotate(0deg)
        }
        to {
          transform: rotate(359deg)
        }
      }
      .block-green {
        animation: blockgreen 2s infinite linear;
      }
      @keyframes blockgreen {
        from {
          transform: rotate(0deg)
        }
        to {
          transform: rotate(-359deg)
        }
      }
      .block-blue {
        animation: blockblue 2s infinite linear;
      }
      @keyframes blockblue {
        from {
          transform: rotate(0deg)
        }
        to {
          transform: rotate(359deg)
        }
      }
    }
  }
  .bottom-container {
    position: absolute;
    top: rem(335);
    bottom: 0;
    width: 100%;
    .line-top {
      position: absolute;
      top: 0;
      height: rem(57);
      left: 50%;
      margin-left: rem(-2);
      width: rem(4);
      background: rgba(53, 178, 193, .2);
      .line-con {
        position: absolute;
        bottom: 0;
        left: rem(1);
        width: rem(2);
        background: rgba(53, 178, 193, 1);
        box-shadow: 0px 0px 3px 0px rgba(53, 178, 193, 1);
      }
    }
    .name-box {
      position: absolute;
      top: rem(45);
      left: 50%;
      margin-left: rem(-261/2);
      width: rem(261);
      height: rem(96);
      opacity: .2;
      background: url('../assets/name-box.png') no-repeat {
        size: 100%;
      }
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        height: rem(52);
      }
    }
    .line-bottom {
      position: absolute;
      top: rem(128);
      bottom: 0;
      left: 50%;
      margin-left: rem(-2);
      width: rem(4);
      background: rgba(53, 178, 193, .2);
      .line-con {
        position: absolute;
        bottom: 0;
        left: rem(1);
        width: rem(2);
        background: rgba(53, 178, 193, 1);
        box-shadow: 0px 0px 3px 0px rgba(53, 178, 193, 1);
      }
    }
  }
}
</style>
