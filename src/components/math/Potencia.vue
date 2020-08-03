<template>
  <div class="soma">
    <div class="container">
       <h2>Potenciação</h2>
       Base <input @focus="$event.target.select()" type="number" name="number1" v-model="number1" />
       Potência <input @focus="$event.target.select()" type="number" name="number2" v-model="number2" />
       <button class="animate__animated animate__jello btn-secondary" @click='zerar'>zerar</button>
       <h2>{{ result }}</h2>
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
      return Math.pow(this.number1, this.number2)
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
.soma {
  text-align: center;
  background-color: rgb(115, 197, 82);
  padding: 1rem;
  display: flex;  
  justify-content: space-around;  
  color: aliceblue;
}

.container {
   max-width: 80%;
   display: flex;
   flex-direction: column;
}

.container button {
   margin-top: 1rem;
}

</style>