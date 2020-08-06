<template>
  <div id="imc">
  
      <h2>IMC</h2>
  <div class="card border-secondary mb-3">
    <div class="card-body">
		Peso
      <input
        class="form-control"
        @focus="$event.target.select()"
        type="number"
        name="peso"
        v-model="peso"
      /> Altura
      <input
        class="form-control"
        @focus="$event.target.select()"
        type="number"
        name="altura"
        v-model="altura"
      />
      <button class="animate__animated animate__tada btn btn-secondary" @click="zerar">zerar</button>
      <h2>{{ result }}</h2>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      peso: 0,
      altura: 0,
    };
  },
  computed: {
    result() {
      return (parseFloat(this.peso) / (parseFloat(this.altura) * parseFloat(this.altura))).toFixed(2);
    },
  },
  methods: {
    zerar: function () {
      this.peso = 0;
      this.altura = 0;
    },
  },
};
</script>

<style scoped>
.card {
  max-width: 50%;
  margin-top: 1rem;
  color: rgba(245, 245, 7, 0.479);
}

.card button {
   margin-top: 1rem;
}

  @media only screen and (max-width: 600px) {
.card {
		max-width: 80%;	
		}
  }
</style>
