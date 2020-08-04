<template>
  <div class="tempetatura">
    <div class="card border-secondary  mb-3 animate__animated animate__fadeInLeft" style="max-width: 20rem;">
      <div class="card-header">°F para °C</div>
      <div class="card-body">
        <div class="card-text">
          <h3>{{ subtitulo }}</h3>
          <input class="form-control" @focus="$event.target.select()" type="number" name="number" v-model="number" />
          <h3>{{ result }}</h3>
        </div>
      </div>
    </div>

    <div class="card border-secondary mb-3 animate__animated animate__fadeInRight" style="max-width: 20rem;">
      <div class="card-header">°C para °F</div>
      <div class="card-body">
        <div class="card-text">
          <h3>{{ subtitulo1 }}</h3>
          <input class="form-control" @focus="$event.target.select()" type="number" name="number1" v-model="number1" />
          <h3>{{ result1 }}</h3>
        </div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      subtitulo: "Fahrenheit - Celsius",
      subtitulo1: "Celsius - Fahrenheit",
      number: 0,
      number1: 0,
    };
  },

  computed: {
    result() {
      return ((this.number - 32) / 1.8).toFixed(2) + ' °C'
    },
    result1() {
      return ((this.number1*1.8) + 32).toFixed(2) + ' °F'
    }
  }
};
</script>

<style>
.temperatura {
  text-align: center;
}

h3 {
  padding: 1rem;
}
</style>
