<template>
  <div id="cambio">
    <h2>{{ title }}</h2>
    <div class="conversor">
      <ConversorDollarReal moeda-a="USD" moeda-b="BRL" />
      <ConversorEuroReal moeda-a="EUR" moeda-b="BRL" />
      <ConversorRealDollar moeda-a="BRL" moeda-b="USD" />
      <ConversorRealEuro moeda-a="BRL" moeda-b="EUR" />
    </div>
  </div>
</template>

<script>
import ConversorDollarReal from "./cambio/ConversorDollarReal";
import ConversorEuroReal from "./cambio/ConversorEuroReal";
import ConversorRealDollar from "./cambio/ConversorRealDollar";
import ConversorRealEuro from "./cambio/ConversorRealEuro";

export default {
  components: { ConversorDollarReal, ConversorEuroReal, ConversorRealDollar, ConversorRealEuro },
  name: "Cambio",
  data: () => ({
    title: "Taxa de Câmbio",
  }),
};
</script>

<style lang="css">
#cambio h2 {
  padding: 1rem;
  color: rgba(245, 245, 7, 0.479);
}

.conversor {
  /* display: flex; */
  color: rgba(245, 245, 7, 0.479);
  width: 100%;
  margin: 0 auto;
  margin-left: .3rem;
}

@media only screen and (max-width: 600px) {
  .conversor {
 display: grid;
 margin: 0 auto;
  }
    .card {
      margin-bottom: 1rem;
    }
  }
</style>
