<template>
  <div id="app">
    <audio class="wp-audio-shortcode" id="audio-377-1" preload="none" style="width: 100%;" controls="controls"><source type="audio/mpeg" src="https://blog.sparrow.moe/wp-content/uploads/2017/10/safe_haven.mp3?_=1" /><source type="audio/mpeg" src="http://blog.project-sparrow.ml/wp-content/uploads/2017/10/safe_haven.mp3?_=1" /><a href="https://blog.sparrow.moe/wp-content/uploads/2017/10/safe_haven.mp3">https://blog.sparrow.moe/wp-content/uploads/2017/10/safe_haven.mp3</a></audio>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/hello1">点击进入hello1</router-link>

    </div>
    <router-view/>
  </div>
</template>


<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

