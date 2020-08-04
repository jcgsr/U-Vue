<template>
  <div id="conversor">
    <h2>{{ title }}</h2>
    <div class="button-div">
      <button
        @click="temperatura"
        type="button"
        class="btn btn-secondary animate__animated animate__backInLeft"
      >Temperatura</button>
      <button
        @click="comprimento"
        type="button"
        class="btn btn-secondary animate__animated animate__fadeInDown"
      >Comprimento</button>
      <button
        @click="massa"
        type="button"
        class="btn btn-secondary animate__animated animate__backInRight"
      >Massa</button>
    </div>
    <Temperatura v-if="showTemperatura" />
    <Comprimento v-if="showComprimento" />
    <Massa v-if="showMassa" />
    <p>{{ dataAtual }}</p>
  </div>
</template>

<script>
import Temperatura from "./conversor/Temperatura";
import Massa from "./conversor/Massa";
import Comprimento from "./conversor/comprimentos/Comprimento";

export default {
  data() {
    return {
      title: "Conversor Vue",
      showTemperatura: true,
      showComprimento: false,
      showMassa: false,
      dataAtual: ''
    };
  },
  components: {
    Temperatura,
    Comprimento,
    Massa,
  },
  methods: {
    temperatura() {
      this.showTemperatura = true;
      this.showComprimento = false;
      this.showMassa = false;
    },
    comprimento() {
      (this.showComprimento = true), (this.showTemperatura = false);
      this.showMassa = false;
    },
    massa() {
      this.showMassa = true;
      this.showComprimento = false;
      this.showTemperatura = false;
    },
    hoje() {
      let dataHoje = new Date();
      this.dataAtual = dataHoje.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "short",
        year: "numeric"
      });
    }
  },
  mounted() {
    this.hoje();
  }
};
</script>

<style>
	#conversor h2 {
		text-align: center;
		padding: 1rem;
		color: rgba(245, 245, 7, 0.479);
	}

.button-div {
  margin-bottom: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  text-align: center;
  max-width: 30%;
}

.button-div button {
	margin-left: .5rem;
	color: rgba(245, 245, 7, 0.479);
}
</style>
