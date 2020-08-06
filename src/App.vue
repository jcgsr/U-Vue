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
    <p>{{ dataAtual }}</p>
    <Footer />
  </div>
</template>

<script>
import Toolbar from "./components/Toolbar";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Toolbar,
    Footer,
  },

  data: () => ({
    dataAtual: "",
  }),
  methods: {
    hoje() {
      let dataHoje = new Date();
      this.dataAtual = dataHoje.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });
    },
  },
  mounted() {
    this.hoje();
  },
};
</script>

<style>
*,
body,
html {
  box-sizing: border-box;
  text-align: center;
  margin: 0 auto;
  width: 100%;
  color: rgba(245, 245, 7, 0.479);
  scroll-behavior: smooth;
}

#app p {
  color: rgba(245, 245, 7, 0.479);
  padding: .5rem;
  
}

</style>
