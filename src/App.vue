<template>
  <div>
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
*,
html {
  box-sizing: border-box;
  width: 100%;
  text-align: center;
}
</style>
