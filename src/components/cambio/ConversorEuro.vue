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
          <button class="btn btn-secondary" @click="converter">Converter</button>
          <h2 id="value">{{ moedaB_value | currency }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Conversor",
  props: ["moedaA", "moedaB"],
  data() {
    return {
      moedaA_value: "",
      moedaB_value: 0,
      errored: false,
    };
  },
  methods: {
    converter() {
      let de_para = this.moedaA + "_" + this.moedaB;
      let url =
        "https://free.currconv.com/api/v7/convert?q=" +
        de_para +
        "&compact=ultra&apiKey=41c3d3eae7092993a692";

      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          let cotacao = json[de_para];
          this.moedaB_value = (cotacao * parseFloat(this.moedaA_value)).toFixed(
            2
          );
        })
        .catch((error) => {
          console.log(error);
          this.errored = true;
        })
        .finally(() => (this.loading = false));
    },
  },
  filters: {
    currency(value) {
      return "€ " + value;
    },
  },
};
</script>
