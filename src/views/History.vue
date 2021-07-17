<template>
  <div class="history">
    <h1>BEHOLD... the works of <span>thy hands</span></h1>
    <div class="history-img-container" >
      <div v-for="url in historyUrl" :key="url">
        <img :src="url" alt="" />
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'History',
  computed: {
    historyUrl() {
      return this.$store.getters.qrHistory;
    },
  },
};
</script>

<style>
.history {
  display: flex;
  width: 810px;
  height: 65vh;
  flex-direction: column;
  align-items: center;
}
h1 {
  background: linear-gradient(45deg, #0f1a7a, #f15c12);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
  -webkit-text-fill-color: transparent;
}

.history-img-container {
  display: flex;
  flex-flow: row wrap;
}

.history-img-container div {
  margin: 5px;
}

.history-img-container img {
  background-color: white;
  border-radius: 10px;
  width: 130px;
  height: 130px;
  margin: 10px auto;
  padding: 10px;
  box-shadow: 0 4px 8px 0 rgba(24, 23, 23, 0.2);
  transition: 0.3s;
}

.history-img-container img:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.6);
}
</style>
