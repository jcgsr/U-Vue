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
    <div class="tabela">
      <table border="3">
        <thead>
          <tr class="table-active">
            <th scope="col">IMC</th>
            <th scope="col">Situação</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Abaixo de 16</td>
            <td>Muito abaixo do peso</td>
          </tr>
          <tr>
            <td>Entre 16 e 19</td>
            <td>Abaixo do peso</td>
          </tr>
          <tr>
            <td>Entre 19 e 25</td>
            <td>Peso normal</td>
          </tr>
          <tr>
            <td>Entre 25 e 30</td>
            <td>Excesso de peso</td>
          </tr>
          <tr>
            <td>Entre 30 e 35</td>
            <td>Obesidade</td>
          </tr>
          <tr>
            <td>Acima de 35</td>
            <td>Obesidade mórbida</td>
          </tr>
        </tbody>
      </table>
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
      return (
        parseFloat(this.peso) /
        (parseFloat(this.altura) * parseFloat(this.altura))
      ).toFixed(2);
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

.tabela {
  width: 30%;
}

.tabela td,
tr,
th {
  font-weight: bold;
  padding: 1rem;
  font-size: 1.5rem;
}

.card button {
  margin-top: 1rem;
}

@media only screen and (max-width: 600px) {
  .card {
    max-width: 80%;
  }
  .tabela td,
  tr,
  th {
    font-weight: bold;
    font-size: 1.2rem;
  }
  .tabela {
    width: 80%;
  }
}
</style>
