<template>
   
  <div id="app">

    <div class="souad">
			<img src="./assets/giphy.gif" alt="">
    </div>
    <HelloWorld msg="Welcome to my application. I'm SOUAD"/>
    <div class="souad">
      <img alt="Vue logo" src="./assets/logo.png">
    </div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
/*   margin-top: 60px;
 */  
 background-color: rgb(196, 30, 187);
}



</style>
