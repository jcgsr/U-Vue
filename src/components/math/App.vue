<template>

  <div id="app">
   <h1 class="animate__animated animate__bounce">{{ titulo }}</h1>
   <Soma />
   <Subtracao />
   <Multiplicacao />
   <Divisao />
   <Quadrado />
   <Cubo />
   <Potencia />
   <Porcentagem />
   <RaizQuadrada />
   <Footer />
   
  </div>
  
</template>

<script>
import Footer from './Footer.vue'
import Soma from './Soma.vue'
import Subtracao from './Subtracao.vue'
import Multiplicacao from './Multiplicacao.vue'
import Divisao from './Divisao.vue'
import Quadrado from './Quadrado.vue'
import Cubo from './Cubo.vue'
import Potencia from './Potencia.vue'
import Porcentagem from './Porcentagem.vue'
import RaizQuadrada from './RaizQuadrada.vue'

export default {
  data() {
    return {
      titulo: 'Math Vue'
    }
  },
  components: {
    Footer,
    Soma,
    Subtracao,
    Multiplicacao, 
    Divisao,
    Quadrado,
    Cubo,
    Potencia,
    Porcentagem,
    RaizQuadrada
  }
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&display=swap');
  *, html, body {
    font-family: 'Inconsolata', monospace;
    width: 100%;
  }
  h1 {
    text-align: center;
  }
</style>