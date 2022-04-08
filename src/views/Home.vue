<template>
  <div class="flex-container">
    <div class="text">
      <p>Enter URL here</p>
      <div>
        <input @change="getQrCode" type="text" placeholder="Enter a valid url" v-model="url" />
      </div>
      <h5 style="color:#f15c12;" class="tries" v-show="count > 10">
        Boss man, calm down first<span style="font-size: 1.5rem;">💆🏿‍♂️</span>, you don
        overdo, refresh to try again.
      </h5>
      <h5 style="color:#f15c12;" class="tries" v-show="valid">
        Oga your url no correct <span style="font-size: 1.5rem;">🤷🏿‍♂️</span>, check am abeg
      </h5>
      <h4 v-if="count <= 10" class="tries">
        You have <span>{{ 10 - count }}</span> tries left
      </h4>
      <div>
        <button :disabled="count > 10" @click="getQrCode" class="inputbtn">
          <p>Generate</p>
        </button>
      </div>
      <h4 class="tries"><span>PS:</span> You only have <span>10</span> tries</h4>
    </div>
    <div class="qr-code-container">
      <div class="qr-card">
        <img
          :src="
            qrImage === ''
              ? 'https://www.qrtag.net/api/qr_transparent.svg?url=https://www.qrtag.net'
              : qrImage
          "
        />
      </div>
      <div class="btn-flex">
        <button @click="downloadQrCodeSVG" class="downloadBtn" style="background-color: #0d0c22;">
          <i class="fa fa-download fa-1x" aria-hidden="true"></i> SVG
        </button>
        <button @click="downloadQrCodePNG" class="downloadBtn">
          <i class="fa fa-download fa-1x" aria-hidden="true"></i> PNG
        </button>
      </div>
    </div>
    <div class="remark">Made with ❤️ by Salem</div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {},
  methods: {
    ...mapActions([
      'getQrCode',
      'downloadQrCodeSVG',
      'downloadQrCodePNG',
    ]),
    download() {},
  },
  computed: {
    valid() {
      return this.$store.getters.valid;
    },
    count() {
      return this.$store.getters.count;
    },
    qrImage() {
      return this.$store.getters.qrResult;
    },
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
  margin: auto;
}

.remark {
  display: none;
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
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.9);
  transition: 0.3s;
}

.qr-card img {
  background-color: white;
  width: 100%;
  height: 35vh;
  object-fit: fill;
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
  color: #484950;
  opacity: 0.7;
  font-style: italic;
}

.text p {
  margin: 0;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

h4 {
  font-size: 20px;
}

h4 span {
  color: #f15c12;
}

h5 {
  font-size: 13px;
}

h5 span {
  color: #f15c12;
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

@media only screen
  and (min-device-width: 280px)
  and (max-device-width: 568px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .flex-container {
      flex-direction: column;
      width: 320px;
    }
    .text {
      align-items: center;
      font-size: 1rem;
    }

    input[type="text" i] {
      padding: 10px;
      width: 230px;
      margin-top: 12px;
    }
    h4 {
      font-size: 20px;
      margin: 12px;
    }
    .qr-code-container {
      width: 70%;
      margin-top: 0px;
      position: inherit;
    }

    .btn-flex {
      flex-direction: row;
      position: inherit;
      margin-bottom: 15px;
    }

    .qr-card {
      height: 31vh;
      top: 0%;
      position: inherit;
      width: 90%;
      margin: 18px auto;
    }

    .qr-card img {
      height: 31vh;
    }

    .remark {
      display: inherit;
      margin: 10px;
    }

    h4 span {
      color: #e4dfe0;
    }

}
</style>
