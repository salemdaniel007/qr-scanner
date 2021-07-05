<template>
  <div>
    <div class="flex-container">
      <div class="text">This is the text we are talking about here</div>
      <div class="qr-code-container"></div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
};
</script>

<style>
.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.qr-code-container {
  border-radius: 2rem;
  padding: 2px 16px;
  width: 30%;
  height: 70vh;
  background-color: #010847;
}

</style>
