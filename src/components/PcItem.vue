<template>
  <div class="item-box">
    <button @click="start" class="start-btn">初始动画</button>
    <button @click="down" class="start-btn down">下落</button>
    <div :class="['item-container', {rotate}]" ref="itemContainer">
      <div class="line-one"></div>
      <div class="line-two"></div>
      <div class="line-three"></div>
      <div class="line-four"></div>
      <div class="line-five"></div>
      <div class="line-six"></div>
      <div class="block-red"></div>
      <div class="block-green"></div>
      <div class="block-blue"></div>
    </div>
    <div class="bottom-box" ref="bottomBox">
      <div class="line top">
        <div class="line-con" ref="botTopLine"></div>
      </div>
      <div class="line bottom">
        <div class="line-con" ref="botBotLine"></div>
      </div>
      <div class="name-box" ref="nameBox"></div>
    </div>
  </div>
</template>

<script>
import { asyncAnimate } from '@/utils/utils';

export default {
  name: 'PcItem',

  data() {
    return {
      rotate: false
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
    },

    down() {
      const bottomBox = $(this.$refs['bottomBox']);
      asyncAnimate({
        dom: bottomBox,
        options: {
          top: '859px'
        },
        time: 500,
        easing: 'swing'
      });
    }
  },
}
</script>

<style lang='scss' scoped>
@mixin position-center($width, $height) {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -($height / 2);
  margin-left: -($width / 2);
  width: $width;
  height: $height;
}

.item-box {
  position: relative;
  width: 469px;
  height: 100%;
  text-align: center;
  padding: 10px {
    bottom: 0;
  }
  .start-btn {
    position: absolute;
    top: -200px;
    left: 50%;
    margin-left: -50px;
    width: 100px;
    height: 30px;
    background: #fff;
    color: #000;
    cursor: pointer;
    border-radius: 10px;
    outline: none;
    &.down {
      top: -160px;
    }
  }
  .item-container {
    position: relative;
    width: 100%;
    height: 449px;
    border-radius: 50%;
    opacity: .2;
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
      .line-four {
        animation: linefour 2s infinite linear;
      }
      @keyframes linefour {
        0% {
          transform: rotate(50deg)
        }
        45% {
          transform: rotate(-35deg)
        }
        50% {
          transform: rotate(-40deg)
        }
        95% {
          transform: rotate(45deg)
        }
        100% {
          transform: rotate(50deg)
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
    .line-one {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: url('../assets/line-one.png') no-repeat {
        size: 100% 100%;
      }
    }
    .line-two {
      @include position-center(354px, 354px);
      background: url('../assets/line-two.png') no-repeat {
        size: 100% 100%;
      }
    }
    .line-three {
      @include position-center(280px, 280px);
      background: url('../assets/line-three.png') no-repeat {
        size: 100% 100%;
      }
    }
    .line-four {
      position: absolute;
      right: 87px;
      bottom: 92px;
      width: 260px;
      height: 260px;
      background: url('../assets/line-four.png') no-repeat {
        size: 225px 235px;
        position: right bottom;
      }
    }
    .line-five {
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -121px;
      width: 242px;
      height: 380px;
      background: url('../assets/line-five.png') no-repeat {
        size: 100% 100%;
      }
    }
    .line-six {
      @include position-center(212px, 212px);
      background: url('../assets/line-six.png') no-repeat {
        size: 100% 100%;
      }
    }
    .block-red {
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -169.5px;
      margin-left: -176px;
      width: 352px;
      height: 357px;
      background: url('../assets/block-red.png') no-repeat {
        size: 100% 100%;
      }
    }
    .block-green {
      position: absolute;
      top: 20px;
      right: 7px;
      width: 430px;
      height: 430px;
      background: url('../assets/block-green.png') no-repeat {
        size: 378px 317px;
        position: right top;
      }
    }
    .block-blue {
      position: absolute;
      top: -3px;
      left: 1px;
      width: 430px;
      height: 430px;
      background: url('../assets/block-blue.png') no-repeat {
        size: 231px 442px;
        position: left top;
      }
    }
  }
  .bottom-box {
    position: absolute;
    top: 459px;
    bottom: 0;
    left: 0;
    right: 0;
    .line {
      position: absolute;
      left: 50%;
      margin-left: -3px;
      width: 6px;
      background: rgba(53, 178, 193, .2);
      &.top {
        top: 0;
        height: 38px;
        .line-con {
          position: absolute;
          left: 2px;
          bottom: 0;
          width: 2px;
          opacity: 1;
          background: rgba(53, 178, 193, 1);
          box-shadow: 0px 0px 4px 0px rgba(53, 178, 193, 1);
        }
      }
      &.bottom {
        top: 106px;
        bottom: 0;
        .line-con {
          position: absolute;
          left: 2px;
          bottom: 0;
          width: 2px;
          opacity: 1;
          background: rgba(53, 178, 193, 1);
          box-shadow: 0px 0px 4px 0px rgba(53, 178, 193, 1);
        }
      }
    }
    .name-box {
      position: absolute;
      top: 26px;
      left: 50%;
      margin-left: -127px;
      width: 254px;
      height: 92px;
      opacity: .2;
      background: url('../assets/name-box.png') no-repeat {
        size: 100% 100%;
      }
    }
  }
}
</style>
