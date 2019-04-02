export default {
  // 保存房间号
  SAVE_CHANNEL(state, payload) {
    state.channel = payload.channel
  },
  // 创建websocket
  CREATE_WS(state) {
    // const host = location.host;
    const host = '172.16.10.2:8080';
    state.ws = new WebSocket(`ws://${host}/websocket`);
    state.ws.onclose = () => {
      state.ws = new WebSocket(`ws://${host}/websocket`);
    }
  },
  // 已启用动画
  SAVE_INANIMATE(state, payload) {
    if (state.inAnimateArr.indexOf(payload.index) === -1) {
      state.inAnimateArr.push(payload.index);
    }
  }
}
