<template>
<div class="card border-secondary mb-3">
    <div class="card-body">
      <h4 class="card-title">Raiz Quadrada</h4>
      <input class="form-control" @focus="$event.target.select()" type="number" name="number" v-model="number" /> 
       <button class="animate__animated animate__shakeX btn btn-secondary" @click='zerar'>zerar</button>
       <h2>{{ result }}</h2>
    </div>
  </div>  
</template>

<script>
export default {
  data() {
    return {
      number: 0                        
    };
  }, 
  computed: {
    result() {
      return Math.sqrt(this.number)
    },
    
  },
  methods: {
     zerar: function() {        
        this.number = 0        
     }
  }  
  
};
</script>

<style scoped>
.card {
  max-width: 50%;
  margin-bottom: 1rem;
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
