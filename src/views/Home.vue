<template>
  <div class="flex-container">
    <div class="text">
      <p>Enter URL here</p>
      <div><input type="text" placeholder="Enter a valid url" v-model="url" /></div>
      <div>
        <button @click="getQrCode" class="inputbtn"><p>Generate</p></button>
      </div>
    </div>
    <div class="qr-code-container">
      <div class="qr-card">
        <img src="https://qrtag.net/api/qr_transparent.svg?url=https://www.qrtag.net" alt="qrtag" />
      </div>
      <div class="btn-flex">
        <button class="downloadBtn" style="background-color: #0d0c22;">
          <i class="fa fa-download fa-1x" aria-hidden="true"></i> SVG
        </button>
        <button class="downloadBtn">
          <i class="fa fa-download fa-1x" aria-hidden="true"></i> PNG
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {},
  methods: {
    ...mapActions(['getQrCode']),
  },
  computed: {
    url: {
      get() {
        return this.$store.getters.url;
      },
      set(value) {
        this.$store.commit('setUrl', value);
      },
    },
  },
};
</script>

<style>
.flex-container {
  width: 900px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.qr-code-container {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #086295;
  border-width: 10px;
  border-radius: 1.5rem;
  padding: 2px 16px;
  width: 30%;
  height: 70vh;
}

.qr-card {
  background-color: white;
  position: absolute;
  top: 10%;
  padding: 10px;
  border-radius: 10px;
  margin: 10px auto;
  width: 80%;
  height: 35vh;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}

.qr-card img {
  background-color: white;
  width: 100%;
  height: 35vh;
  object-fit: cover;
}

input[type="text" i] {
  padding: 15px;
  width: 300px;
  border-radius: 2rem;
  transition: all 0.2s ease-in;
}

input[type="text" i]:focus {
  border: solid #f15c12;
  outline-width: 0;
  transition: all 0.2s ease-in;
}

::placeholder {
  color: #0f1a7a;
  opacity: 0.7;
}

.text p {
  margin: 0;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.text p:hover {
  text-shadow: 0px 0px 30px #fdec6e;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.inputbtn {
  cursor: pointer;
  padding: 15px;
  border-radius: 2rem;
  margin: 5px;
  width: 150px;
  color: white;
  align-self: flex-end;
  border: none;
  background-color: #f15c12;
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.4);
}

.inputbtn p {
  font-size: 16px;
}

.btn-flex {
  display: flex;
  flex-direction: row;
  position: absolute;
  bottom: 22%;
}

.downloadBtn {
  cursor: pointer;
  padding: 12px;
  border-radius: 1rem;
  margin: 5px;
  width: 90px;
  color: white;
  border: none;
  background-color: #f15c12;
}

.text {
  color: #0d0c22;
  margin: auto;
  text-align: center;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
