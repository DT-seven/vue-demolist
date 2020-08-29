<template>
  <div id="app">
    <div id="nav">
      <router-view></router-view>
    </div>
    <div class="btn">
      <router-link to="/button">Input</router-link>
      <router-link to="/cube">Cube</router-link>
      <router-link to="/slide">SlideShow</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "app",
};
</script>
<style lang="scss" scoped>
.btn {
  display: flex;
  justify-content: center;
  margin-top: 100px;
}
a {
  display: block;
  opacity: 0.6;
  cursor: pointer;
  overflow: hidden;
  width: 80px;
  height: 30px;
  margin: 0 10px;
  text-align: center;
  border-radius: 10px;
  font: 0.8rem/30px Arial, sans-serif;
  font-family: "Ubuntu", Helvetica, Arial, sans-serif;
  background: #505050;
  text-decoration: none;
  transition: color 200ms ease-out;
  color: darken(rgba(#fff, 0.8), 40%);
}

#nav {
  display: flex;
  margin-top: 100px;
  justify-content: center;
}
</style>
