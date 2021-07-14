/* eslint-disable no-shadow */
const axios = require('axios').default;

const state = {
  url: '',
  loading: false,
  qrResult: '',
  qrHistory: [],
};

const getters = {
  url: (state) => state.url,
  loading: (state) => state.loading,
  qrResult: (state) => state.qrResult,
  qrHistory: (state) => state.qrHistory,
};

const actions = {
  getQrCode({ commit }) {
    state.loading = true;
    const { url } = state;
    axios.get(`https://qrtag.net/api/qr_transparent.png?url=${url}`)
      .then((response) => {
        console.log(response);
        commit('setQrCode', response);
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
