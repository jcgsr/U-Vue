<template>
  <div class="container">
    <div class="alert alert-dismissible alert-danger" v-if="errored">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <p>Erro! O servidor não está respondendo. 🙁</p>
    </div>
    <div class="conversor">
      <div class="card border-secondary mb-3">
        <div class="card-body">
          <h4 class="card-title">{{ moedaA }} para {{ moedaB }}</h4>
          <input class="form-control" type="number" v-model="moedaA_value" :placeholder="moedaA" />
          <h2 id="value">{{ result | currency }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Conversor",
  props: ["moedaA", "moedaB"],
  data() {
    return {
      moedaA_value: "",
      moedaB_value: 0,
      errored: false,
      info: null,
    };
  },
  mounted() {
    axios
      .get("https://economia.awesomeapi.com.br/all/EUR-BRL")
      .then((res) => (this.info = res.data.EUR.bid))
      .catch((error) => {
        console.log(error);
        this.errored = true;
      })      
  },

  computed: {
    result() {
      return (this.moedaA_value / this.info).toFixed(2);
    },
  },

  filters: {
    currency(value) {
      return "€ " + value.toLocaleString();
    },
  },
};
</script>

<style>
.conversor input {
  margin-bottom: 1rem;
}

.conversor button {
  margin-top: 1rem;
}

#value {
  margin-top: 1rem;
}

.alert button {
  max-width: 10%;
  display: block;
}
</style>
