/* eslint-disable no-shadow */
const axios = require('axios').default;

const state = {
  url: '',
  loading: false,
  qrResult: '',
  qrHistory: [],
  count: 0,
  downloadUrl: '',
  valid: false,
};

const getters = {
  url: (state) => state.url,
  loading: (state) => state.loading,
  qrResult: (state) => state.qrResult,
  qrHistory: (state) => state.qrHistory,
  count: (state) => state.count,
  downloadUrl: (state) => state.downloadUrl,
  valid: (state) => state.valid,
};

const actions = {
  getQrCode({ commit }) {
    const pattern = new RegExp('^(https?:\\/\\/)?' // protocol
          + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' // domain name
          + '((\\d{1,3}\\.){3}\\d{1,3}))' // ip (v4) address
          + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port
          + '(\\?[;&amp;a-z\\d%_.~+=-]*)?' // query string
          + '(\\#[-a-z\\d_]*)?$', 'i');
    if (pattern.test(state.url)) {
      state.valid = false;
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
    } else {
      state.valid = true;
    }
  },

  downloadQrCodePNG({ commit }) {
    const { url } = state;
    axios({
      url: `https://qrtag.net/api/qr_transparent.png?url=${url}`,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      const fileURL = window.URL.createObjectURL(new Blob([response.data]));
      const fURL = document.createElement('a');

      fURL.href = fileURL;
      fURL.setAttribute('download', 'file.png');
      document.body.appendChild(fURL);

      fURL.click();
      commit('downloadQrCode', response.data);
    }).catch((err) => {
      console.log(err);
    });
  },
  downloadQrCodeSVG() {
    const { url } = state;
    axios({
      url: `https://qrtag.net/api/qr_transparent.svg?url=${url}`,
      method: 'GET',
      responseType: 'blob',
    }).then((response) => {
      const fileURL = window.URL.createObjectURL(new Blob([response.data]));
      const fURL = document.createElement('a');

      fURL.href = fileURL;
      fURL.setAttribute('download', 'file.svg');
      document.body.appendChild(fURL);

      fURL.click();
    }).catch((err) => {
      console.log(err);
    });
  },
  validateUrl() {
    const pattern = new RegExp('^(https?:\\/\\/)?' // protocol
          + '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' // domain name
          + '((\\d{1,3}\\.){3}\\d{1,3}))' // ip (v4) address
          + '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' // port
          + '(\\?[;&amp;a-z\\d%_.~+=-]*)?' // query string
          + '(\\#[-a-z\\d_]*)?$', 'i');
    if (pattern.test(state.url)) {
      state.valid = false;
    } else {
      state.valid = true;
    }
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
