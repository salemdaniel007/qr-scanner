<template>
  <div id="app">
    <div class="flex-container">
      <div class="container">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
    </div>
  </div>
</template>

<style>
body {
  background-color: #cdd8e4;
  background-image: linear-gradient(315deg, #9fbfe0 0%, #d7deec 74%);
  background-attachment: fixed;
  background-size: cover;
}

.flex-container {
  display: flex;
  height: 100vh;
}

.container {
  margin: auto;
  padding: 2px 16px;
  width: 80%;
  height: 75vh;
  border-radius: 2rem;
  background-color: #f0f1f1;
  backdrop-filter: blur(5px);
  box-shadow: 0 32px 32px 0 rgba(0, 0, 0, 0.1), 200px 50px 100px 50px rgba(0, 0, 0, 0.2);
}
</style>
