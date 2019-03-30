<template>
  <div class="detail-box">
    <div class="top-box">
      <div class="line top"></div>
      <div class="logo-two"></div>
      <div class="line center"></div>
    </div>
    <div class="bottom-box">
      <div class="line-red"></div>
      <div class="line-blue"></div>
      <div class="line-one"></div>
      <div class="line-two"></div>
      <div class="rotate-fixed"></div>
      <div class="line-three"></div>
      <div class="block-red"></div>
      <div class="block-green"></div>
      <div class="block-blue"></div>
      <div class="fingerprint"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MobileDetail',

  data() {
    return {
      index: parseInt(this.$route.query.index)
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

  methods: {
    setHtmlFontSize() {
      const deviceWidth = document.documentElement.clientWidth;
      document.getElementsByTagName('html')[0].style.cssText = 'font-size:' + deviceWidth / 7.5 + 'px !important'
    }
  },
}
</script>

<style lang='scss' scoped>
@import '@/utils/utils.scss';

.detail-box {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(24, 41, 68, 1) 0%, rgba(0, 0, 0, 1) 100%);
  .top-box {
    .line {
      position: absolute;
      left: 50%;
      margin-left: rem(-4);
      width: rem(8);
      background: rgba(53, 178, 193, .2);
      &.top {
        top: 0;
        height: rem(214);
      }
      &.center {
        top: rem(498);
        height: rem(150);
      }
    }
    .logo-two {
      position: absolute;
      top: rem(202);
      left: 50%;
      margin-left: rem(-154);
      width: rem(308);
      height: rem(308);
      background: url('../assets/mobile/logo-two.png') no-repeat {
        size: 100%;
      }
    }
  }
  .bottom-box {
    position: absolute;
    bottom: rem(108);
    width: rem(750);
    height: rem(750);
    .line-red {
      @include absolute-center(750, 680);
      background: url('../assets/mobile/line-red.png') no-repeat {
        size: 100%;
      }
    }
    .line-blue {
      @include absolute-center(718, 334);
      background: url('../assets/mobile/line-blue.png') no-repeat {
        size: 100%;
      }
    }
    .line-one {
      @include absolute-center(560, 560);
      background: url('../assets/mobile/line-one.png') no-repeat {
        size: 100%;
      }
    }
    .line-two {
      @include absolute-center(444, 444);
      background: url('../assets/mobile/line-two.png') no-repeat {
        size: 100%;
      }
    }
    .rotate-fixed {
      @include absolute-center(356, 476);
      top: rem(340);
      background: url('../assets/mobile/rotate-fixed.png') no-repeat {
        size: 100%;
      }
    }
    .line-three {
      @include absolute-center(348, 348);
      background: url('../assets/mobile/line-three.png') no-repeat {
        size: 100%;
      }
    }
    .block-red {
      @include absolute-center(460, 460);
      background: url('../assets/mobile/block-red.png') no-repeat {
        size: 100%;
      }
    }
    .block-green {
      @include absolute-center(552, 552);
      background: url('../assets/mobile/block-green.png') no-repeat {
        size: 100%;
      }
    }
    .block-blue {
      @include absolute-center(576, 576);
      background: url('../assets/mobile/block-blue.png') no-repeat {
        size: 100%;
      }
    }
    .fingerprint {
      @include absolute-center(230, 228);
      background: url('../assets/mobile/fingerprint.png') no-repeat {
        size: 100%;
      }
    }
  }
}
</style>
