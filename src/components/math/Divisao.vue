<template>
<div class="soma">
    <div class="card border-secondary mb-3">
      <div class="card-body">
        <h4 class="card-title">Divisão</h4>
        <input class="form-control" @focus="$event.target.select()" type="number" name="number1" v-model="number1" /> ÷
       <input class="form-control" @focus="$event.target.select()" type="number" name="numbr2" v-model="number2" />
       <button class="animate__animated animate__pulse btn btn-secondary" @click='zerar'>zerar</button>
       <h2>{{ result }}</h2>
      </div>
    </div>    
  </div>  
</template>

<script>
export default {
  data() {
    return {
      number1: 0,
      number2: 0                    
    };
  }, 
  computed: {
    result() {
      return parseFloat(this.number1) / parseFloat(this.number2);
    },
    
  },
  methods: {
     zerar: function() {        
        this.number1 = 0
        this.number2 = 0
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
