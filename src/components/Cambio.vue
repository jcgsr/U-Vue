<template>
  <div id="cambio">
    <h2>{{ title }}</h2>
    <div class="conversor">
      <Conversor moeda-a="USD" moeda-b="BRL" />
      <Conversor moeda-a="EUR" moeda-b="BRL" />
      <ConversorDollar moeda-a="BRL" moeda-b="USD" />
      <ConversorEuro moeda-a="BRL" moeda-b="EUR" />
    </div>
  </div>
</template>

<script>
import Conversor from "./cambio/Conversor";
import ConversorDollar from "./cambio/ConversorDollar";
import ConversorEuro from "./cambio/ConversorEuro";

export default {
  components: { Conversor, ConversorDollar, ConversorEuro },
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
  display: flex;
  color: rgba(245, 245, 7, 0.479);
  width: 100%;
  margin: 0 auto;
  margin-left: .3rem;
}

@media only screen and (max-width: 600px) {
  .conversor {
 display: grid;
 max-width: 80%;
 margin: 0 auto;
  }
    .card {
      margin-bottom: 1rem;
    }
  }
</style>
