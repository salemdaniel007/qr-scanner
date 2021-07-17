/* eslint-disable no-shadow */
const axios = require('axios').default;

const state = {
  url: '',
  loading: false,
  qrResult: '',
  qrHistory: [],
  count: 0,
};

const getters = {
  url: (state) => state.url,
  loading: (state) => state.loading,
  qrResult: (state) => state.qrResult,
  qrHistory: (state) => state.qrHistory,
  count: (state) => state.count,
};

const actions = {
  getQrCode({ commit }) {
    state.loading = true;
    state.count = parseInt(state.count, 10) + parseInt(1, 10);
    const { url } = state;
    axios.get(`https://qrtag.net/api/qr_transparent.png?url=${url}`)
      .then((response) => {
        console.log(response);
        if (state.count <= 10) {
          state.qrHistory.push(response.config.url);
        }
        commit('setQrCode', response.config.url);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const mutations = {
  setUrl: (state, payload) => { state.url = payload; },
  setQrCode: (state, response) => { state.qrResult = response; },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
