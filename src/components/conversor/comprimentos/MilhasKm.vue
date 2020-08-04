<template>
  <div class="milhas">
    <div class="card border-secondary mb-3 animate__animated animate__fadeInLeft" style="max-width: 20rem;">
      <div class="card-header">Milha para Km</div>
      <div class="card-body">
        <div class="card-text">
          <h3>{{ subtitulo }}</h3>
          <input class="form-control" @focus="$event.target.select()" type="number" name="number" v-model="number" />
          <h3>{{ result }}</h3>
        </div>
      </div>
    </div>

    <div class="card border-secondary mb-3 animate__animated animate__fadeInRight" style="max-width: 20rem;">
      <div class="card-header">Km para Milha</div>
      <div class="card-body">
        <div class="card-text">
          <h3>{{ subtitulo1 }}</h3>
          <input @class="form-control" focus="$event.target.select()" type="number" name="number1" v-model="number1" />
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
      subtitulo: "Milha - Km",
      subtitulo1: "Km - Milha",
      number: 1,
      number1: 1,
    };
  },

  computed: {
    result() {
      return (this.number * 1.609).toFixed(2) + 'km' 
    },
    result1() {
      return (this.number1 / 1.609).toFixed(2) + 'mi'
    }
  }
};
</script>

<style>
.milhas {
  color: aliceblue;
  text-align: center;
}

h3 {
  padding: 1rem;
}
</style>
