<template>
  <div id="cep">
    <h2>{{ title }}</h2>
    <div class="alert alert-dismissible alert-danger" v-if="errored">
      <button type="button" class="close" data-dismiss="alert">&times;</button>
      <p>Erro! O servidor não está respondendo. 🙁
        O CEP deve conter 8 números.
      </p>
    </div>   
    <div>
      <div class="card border-secondary mb-3">
        <div class="card-body">
          <h4 class="card-title">Digite o CEP abaixo para ver o endereço correspondente:</h4>
          <input class="form-control" type="number" v-model="cepInfo" />
          <button class="btn btn-secondary" @click="mostrar">Endereço</button>
          <ul>
            <li v-for="(value, key) in info" :key="key">{{ key }}: {{ value}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Endereço",
  data() {
    return {
      title: "Endereço",
      cepInfo: "",
      info: null,
      errored: false,
      errored2: false,
    };
  },
  methods: {
    mostrar() {
      axios
        // "https://cep.awesomeapi.com.br/json/" + this.cepInfo
        .get("https://viacep.com.br/ws/" + this.cepInfo + "/json/")
        .then((res) => {
          this.info = res.data;          
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;          
        })
    },
  },
};
</script>

<style>
#cep h2 {
  text-align: center;
  padding: 1rem;
  color: rgba(245, 245, 7, 0.479);
}

#cep .card {
  width: 50%;
}

#cep button {
  margin: 1rem 0;
}

#cep li {
  font-weight: bold;
  font-size: 1.5rem;
  padding: 0.3rem;
  text-align: left;
}

.alert button {
  max-width: 10%;
  display: block;
}

@media only screen and (max-width: 600px) {
  #cep .card {
    width: 80%;
  }

  #cep li {
    text-align: left;
  }
}
</style>
