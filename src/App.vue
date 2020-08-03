<template>
  <div id="app">
    <Toolbar />    
    <transition
      enter-active-class="animate__animated animate__zoomIn"
      leave-active-class="animate__animated animate__zoomOut"
      mode="out-in"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>

import Toolbar from "./components/Toolbar";

export default {
  name: "App",

  components: {   
    Toolbar,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
* {
  box-sizing: border-box;
  text-align: center;  
  margin: 0 auto;
  width: 100%;
}

</style>
