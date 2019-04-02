<template>
  <div class="detail-box">
    <div class="btn-back" @touchstart="backToListStart" @touchend="backToListEnd"></div>
    <div class="top-box">
      <div class="line top">
        <div class="line-con" ref="lineTop"></div>
      </div>
      <div :class="['logo', className]" ref="logoCon"></div>
      <div class="line center">
        <div class="line-con" ref="lineCenter"></div>
      </div>
      <div :class="['name-box', className]" ref="nameBox"></div>
      <div class="line bottom">
        <div class="line-con" ref="lineBottom"></div>
      </div>
      <div class="line footer">
        <div class="line-con-left" ref="lineFooterLeft"></div>
        <div class="line-con-right" ref="lineFooterRight"></div>
      </div>
    </div>
    <div class="bottom-box">
      <div class="line-red" ref="lineRed"></div>
      <div class="line-blue" ref="lineBlue"></div>
      <div class="line-one"></div>
      <div :class="['line-two', { animate: lineTwoAnimate }]" ref="lineTwo"></div>
      <div class="rotate-fixed" ref="rotateFixed"></div>
      <div :class="['line-three', { animate: lineThreeAnimate }]" ref="lineThree"></div>
      <div :class="['block-red', { animate: blockRedAnimate }]" ref="blockRed"></div>
      <div :class="['block-green', { animate: blockGreenAnimate }]" ref="blockGreen"></div>
      <div :class="['block-blue', { animate: blockBlueAnimate }]" ref="blockBlue"></div>
      <div class="crossover-line"></div>
      <div
        class="fingerprint"
        @touchstart="touchStart"
        @touchend="touchEnd"
      ></div>
    </div>
  </div>
</template>

<script>
import { asyncAnimate } from '@/utils/utils';
import { mapState } from 'vuex';

export default {
  name: 'MobileDetail',

  data() {
    return {
      className: this.$route.query.index,
      lineTwoAnimate: false,
      lineThreeAnimate: false,
      blockRedAnimate: false,
      blockGreenAnimate: false,
      blockBlueAnimate: false,
      canWsSend: false,
      canAnimate: false,
      isSuccess: false,
      isInLeave: false,
      backTouchTime: true
    }
  },

  computed: {
    ...mapState(['channel', 'ws'])
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
    },

    backToListStart() {
      this.backTouchTime = true;
      setTimeout(() => {
        if (this.backTouchTime) {
          this.$router.replace({
            path: '/mobile'
          });
        }
      }, 1000);
    },

    backToListEnd() {
      this.backTouchTime = false;
    },

    // 开始按住
    async touchStart() {
      this.ws.send(JSON.stringify({
        channel: this.channel,
        type: 'audio',
        data: {
          index: 2
        }
      }));
      if (this.isSuccess || this.isInLeave) {
        return false;
      }
      this.canWsSend = false;
      this.canAnimate = true;
      const rotateFixed = $(this.$refs['rotateFixed']);
      const lineThree = $(this.$refs['lineThree']);
      const lineTwo = $(this.$refs['lineTwo']);
      const blockRed = $(this.$refs['blockRed']);
      const blockGreen = $(this.$refs['blockGreen']);
      const blockBlue = $(this.$refs['blockBlue']);
      const lineRed = $(this.$refs['lineRed']);
      const lineBlue = $(this.$refs['lineBlue']);
      const lineFooterLeft = $(this.$refs['lineFooterLeft']);
      const lineFooterRight = $(this.$refs['lineFooterRight']);
      const lineBottom = $(this.$refs['lineBottom']);
      const nameBox = $(this.$refs['nameBox']);
      const lineCenter = $(this.$refs['lineCenter']);
      const logoCon = $(this.$refs['logoCon']);
      const lineTop = $(this.$refs['lineTop']);
      if (this.canAnimate) {
        await asyncAnimate({
          dom: rotateFixed,
          options: {
            opacity: 1
          },
          time: 300
        });
      }
      if (this.canAnimate) {
        await asyncAnimate({
          dom: lineThree,
          options: {
            opacity: 1
          },
          time: 300
        });
      }
      if (this.canAnimate) {
        await asyncAnimate({
          dom: lineTwo,
          options: {
            opacity: 1
          },
          time: 100
        });
      }
      if (this.canAnimate) {
        await asyncAnimate({
          dom: blockRed,
          options: {
            opacity: 1
          },
          time: 200
        });
      }
      if (this.canAnimate) {
        await Promise.all([asyncAnimate({
          dom: blockGreen,
          options: {
            opacity: 1
          },
          time: 300
        }), asyncAnimate({
          dom: blockBlue,
          options: {
            opacity: 1
          },
          time: 300
        })]);
      }
      if (this.canAnimate) {
        await Promise.all([asyncAnimate({
          dom: lineBlue,
          options: {
            opacity: 1
          },
          time: 300
        }), asyncAnimate({
          dom: lineRed,
          options: {
            opacity: 1
          },
          time: 300
        })]);
      }
      if (this.canAnimate) {
        this.lineThreeAnimate = true;
      }
      setTimeout(() => {
        if (this.canAnimate) {
          this.lineTwoAnimate = true;
          this.blockRedAnimate = true;
        }
      }, 500);
      setTimeout(() => {
        if (this.canAnimate) {
          this.blockBlueAnimate = true;
          this.blockGreenAnimate = true;
        }       
      }, 1000);
      if (this.canAnimate) {
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 1500);
        });
      }
      if (this.canAnimate) {
        await Promise.all([asyncAnimate({
          dom: lineFooterLeft,
          options: {
            left: '0.04rem'
          },
          time: 500
        }), asyncAnimate({
          dom: lineFooterRight,
          options: {
            right: '0.04rem'
          },
          time: 500
        })]);
      }
      if (this.canAnimate) {
        await asyncAnimate({
          dom: lineBottom,
          options: {
            top: 0
          },
          time: 300
        });
      }
      if (this.canAnimate) {
        await asyncAnimate({
          dom: nameBox,
          options: {
            opacity: 1
          },
          time: 300
        });
      }
      if (this.canAnimate) {
        await asyncAnimate({
          dom: lineCenter,
          options: {
            top: 0
          },
          time: 300
        });
      }
      if (this.canAnimate) {
        await asyncAnimate({
          dom: logoCon,
          options: {
            opacity: 1
          },
          time: 300
        });
      }
      if (this.canAnimate) {
        await asyncAnimate({
          dom: lineTop,
          options: {
            top: 0
          },
          time: 300
        });
      }
      if (this.canAnimate) {
        this.canWsSend = true;
        this.isSuccess = true;
      }
    },

    // 结束按住
    async touchEnd() {
      if (!this.canWsSend) {
        this.isInLeave = true;
        this.canAnimate = false;
        this.canWsSend = false;
        const rotateFixed = $(this.$refs['rotateFixed']);
        const lineThree = $(this.$refs['lineThree']);
        const lineTwo = $(this.$refs['lineTwo']);
        const blockRed = $(this.$refs['blockRed']);
        const blockGreen = $(this.$refs['blockGreen']);
        const blockBlue = $(this.$refs['blockBlue']);
        const lineRed = $(this.$refs['lineRed']);
        const lineBlue = $(this.$refs['lineBlue']);
        const lineFooterLeft = $(this.$refs['lineFooterLeft']);
        const lineFooterRight = $(this.$refs['lineFooterRight']);
        const lineBottom = $(this.$refs['lineBottom']);
        const nameBox = $(this.$refs['nameBox']);
        const lineCenter = $(this.$refs['lineCenter']);
        const logoCon = $(this.$refs['logoCon']);
        const lineTop = $(this.$refs['lineTop']);
        const leaveTime = 30;
        await asyncAnimate({
          dom: lineTop,
          options: {
            top: '2.14rem'
          },
          time: leaveTime
        });
        await asyncAnimate({
          dom: logoCon,
          options: {
            opacity: .2
          },
          time: leaveTime
        });
        await asyncAnimate({
          dom: lineCenter,
          options: {
            top: '1.5rem'
          },
          time: leaveTime
        });
        await asyncAnimate({
          dom: nameBox,
          options: {
            opacity: .2
          },
          time: leaveTime
        });
        await asyncAnimate({
          dom: lineBottom,
          options: {
            top: '0.58rem'
          },
          time: leaveTime
        });
        await Promise.all([asyncAnimate({
          dom: lineFooterLeft,
          options: {
            left: '50%'
          },
          time: leaveTime
        }), asyncAnimate({
          dom: lineFooterRight,
          options: {
            right: '50%'
          },
          time: leaveTime
        })]);
        await new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, 50);
        });
        this.lineThreeAnimate = false;
        this.lineTwoAnimate = false;
        this.blockRedAnimate = false;
        this.blockBlueAnimate = false;
        this.blockGreenAnimate = false;
        await Promise.all([asyncAnimate({
          dom: lineBlue,
          options: {
            opacity: 0
          },
          time: leaveTime
        }), asyncAnimate({
          dom: lineRed,
          options: {
            opacity: 0
          },
          time: leaveTime
        })]);
        await Promise.all([asyncAnimate({
          dom: blockGreen,
          options: {
            opacity: .2
          },
          time: leaveTime
        }), asyncAnimate({
          dom: blockBlue,
          options: {
            opacity: .2
          },
          time: leaveTime
        })]);
        await asyncAnimate({
          dom: blockRed,
          options: {
            opacity: .2
          },
          time: leaveTime
        });
        await asyncAnimate({
          dom: lineTwo,
          options: {
            opacity: .2
          },
          time: leaveTime
        });
        await asyncAnimate({
          dom: lineThree,
          options: {
            opacity: .2
          },
          time: leaveTime
        });
        await asyncAnimate({
          dom: rotateFixed,
          options: {
            opacity: .2
          },
          time: leaveTime
        });
        this.isInLeave = false;
      }
    }
  },

  watch: {
    canWsSend(val) {
      if (val) {
        this.ws.send(JSON.stringify({
          channel: this.channel,
          type: 'animate',
          data: {
            index: this.className
          }
        }));
      }
    }
  },
}
</script>

<style lang='scss' scoped>
@import '@/utils/utils.scss';

.detail-box {
  position: relative;
  width: 100%;
  min-height: 100%;
  background: linear-gradient(180deg, rgba(24, 41, 68, 1) 0%, rgba(0, 0, 0, 1) 100%);
  padding-top: rem(780);
  .btn-back {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: rem(300);
    cursor: pointer;
  }
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
        .line-con {
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: rem(-1);
          width: rem(2);
          background: rgba(53, 178, 193, 1);
          box-shadow: 0px 0px 8px 0px rgba(53, 178, 193, 1);
        }
      }
      &.center {
        top: rem(498);
        height: rem(150);
        .line-con {
          position: absolute;
          bottom: 0;
          left: 50%;
          margin-left: rem(-1);
          width: rem(2);
          background: rgba(53, 178, 193, 1);
          box-shadow: 0px 0px 8px 0px rgba(53, 178, 193, 1);
        }
      }
      &.bottom {
        top: rem(768);
        height: rem(54);
        .line-con {
          position: absolute;
          bottom: rem(-4);
          left: 50%;
          margin-left: rem(-1);
          width: rem(2);
          background: rgba(53, 178, 193, 1);
          box-shadow: 0px 0px 8px 0px rgba(53, 178, 193, 1);
        }
      }
      &.footer {
        top: rem(822);
        height: rem(10);
        margin-left: rem(-26);
        width: rem(52);
        border-radius: rem(5);
        .line-con-left {
          position: absolute;
          top: 50%;
          left: 50%;
          right: 50%;
          margin-top: rem(-1);
          height: rem(2);
          background: rgba(53, 178, 193, 1);
          box-shadow: 0px 0px 8px 0px rgba(53, 178, 193, 1);
        }
        .line-con-right {
          position: absolute;
          top: 50%;
          left: 50%;
          right: 50%;
          margin-top: rem(-1);
          height: rem(2);
          background: rgba(53, 178, 193, 1);
          box-shadow: 0px 0px 8px 0px rgba(53, 178, 193, 1);
        }
      }
    }
    .logo {
      position: absolute;
      top: rem(202);
      left: 50%;
      margin-left: rem(-154);
      width: rem(308);
      height: rem(308);
      opacity: .2;
      &.one {
        background: url('../assets/mobile/logo-one.png') no-repeat {
          size: 100%;
        }
      }
      &.two {
        background: url('../assets/mobile/logo-two.png') no-repeat {
          size: 100%;
        }
      }
      &.three {
        background: url('../assets/mobile/logo-three.png') no-repeat {
          size: 100%;
        }
      }
      &.four {
        background: url('../assets/mobile/logo-four.png') no-repeat {
          size: 100%;
        }
      }
      &.five {
        background: url('../assets/mobile/logo-five.png') no-repeat {
          size: 100%;
        }
      }
    }
    .name-box {
      position: absolute;
      top: rem(625);
      left: 50%;
      margin-left: rem(-229);
      width: rem(458);
      height: rem(165);
      opacity: .2;      
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
  .bottom-box {
    position: relative;
    width: rem(750);
    height: rem(750);
    .line-red {
      @include absolute-center(750, 680);
      opacity: 0;
      background: url('../assets/mobile/line-red.png') no-repeat {
        size: 100%;
      }
    }
    .line-blue {
      @include absolute-center(718, 334);
      opacity: 0;
      background: url('../assets/mobile/line-blue.png') no-repeat {
        size: 100%;
      }
    }
    .line-one {
      @include absolute-center(560, 560);
      opacity: .2;
      background: url('../assets/mobile/line-one.png') no-repeat {
        size: 100%;
      }
    }
    .line-two {
      @include absolute-center(444, 444);
      opacity: .2;
      background: url('../assets/mobile/line-two.png') no-repeat {
        size: 100%;
      }
      &.animate {
        animation: linetwo 15s infinite linear;
      }
      @keyframes linetwo {
        from {
          transform: rotate(0deg)
        }
        to {
          transform: rotate(359deg)
        }
      }
    }
    .rotate-fixed {
      @include absolute-center(356, 476);
      opacity: .2;
      top: rem(340);
      background: url('../assets/mobile/detailrotate-fixed.png') no-repeat {
        size: 100%;
      }
    }
    .line-three {
      @include absolute-center(348, 348);
      opacity: .2;
      transform: rotate(52deg);
      background: url('../assets/mobile/line-three.png') no-repeat {
        size: 100%;
      }
      &.animate {
        animation: linethree 1s infinite linear;
      }
      @keyframes linethree {
        0% {
          transform: rotate(52deg)
        }
        45% {
          transform: rotate(-27deg)
        }
        50% {
          transform: rotate(-38deg)
        }
        95% {
          transform: rotate(48deg)
        }
        100% {
          transform: rotate(52deg)
        }
      }
    }
    .block-red {
      @include absolute-center(460, 460);
      opacity: .2;
      background: url('../assets/mobile/block-red.png') no-repeat {
        size: 100%;
      }
      &.animate {
        animation: blockred 1s infinite linear;
      }
      @keyframes blockred {
        from {
          transform: rotate(0deg)
        }
        to {
          transform: rotate(-359deg)
        }
      }
    }
    .block-green {
      @include absolute-center(552, 552);
      opacity: .2;
      background: url('../assets/mobile/block-green.png') no-repeat {
        size: 100%;
      }
      &.animate {
        animation: blockgreen 1s infinite linear;
      }
      @keyframes blockgreen {
        from {
          transform: rotate(0deg)
        }
        to {
          transform: rotate(359deg)
        }
      }
    }
    .block-blue {
      @include absolute-center(576, 576);
      opacity: .2;
      background: url('../assets/mobile/block-blue.png') no-repeat {
        size: 100%;
      }
      &.animate {
        animation: blockblue 1s infinite linear;
      }
      @keyframes blockblue {
        from {
          transform: rotate(0deg)
        }
        to {
          transform: rotate(-359deg)
        }
      }
    }
    .fingerprint {
      @include absolute-center(230, 228);
      opacity: .6;
      cursor: pointer;
      background: url('../assets/mobile/fingerprint.png') no-repeat {
        size: 100%;
      }
    }
    .crossover-line {
      @include absolute-center(482, 480);
      background: url('../assets/mobile/crossover-line.png') no-repeat {
        size: 100%;
      }
    }
  }
}
</style>
