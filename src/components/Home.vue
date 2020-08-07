<template>
  <div id="home">
    <h2>{{ title }}</h2>
    <h4>{{ subtitle }}</h4>
    <div class="container">
      <div class="field">
        <router-link to="/math" class="nav-link">
          <i class="fas fa-calculator" title="Operações Matemáticas"></i>
        </router-link>
      </div>

      <div class="field">
        <router-link to="/media" class="nav-link">
          <i class="fas fa-graduation-cap" title="Média Escolar"></i>
        </router-link>
      </div>

      <div class="field">
        <router-link to="/conversor" class="nav-link">
          <i class="fas fa-temperature-high" title="Conversor"></i>
        </router-link>
      </div>

      <div class="field">
        <router-link to="/cambio" class="nav-link">
          <i class="fas fa-search-dollar" title="Cotação Dólar/Euro"></i>
        </router-link>
      </div>

      <div class="field">
        <router-link to="/imc" class="nav-link">
          <i class="fas fa-weight" title="IMC"></i>
        </router-link>
      </div>

      <div class="field">
        <router-link to="/cep" class="nav-link">
          <i class="fas fa-mail-bulk" title="Endereço"></i>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    title: "U-Vue",
    subtitle: "Webapps utilitários criados em VueJS",
  }),
};
</script>

<style>
#home h2 {
  text-align: center;
  padding: 1rem;
  color: rgba(245, 245, 7, 0.479);
}
#home h4 {
  color: rgba(245, 245, 7, 0.479);
}

.container {
  display: flex;
}
.field {
  width: 20rem;
  height: 15rem;
  background-color: black;
  font-size: 8rem;
  margin-top: 1rem;
  margin-bottom: 2.5rem;
  margin-left: 0.5rem;
}

@media only screen and (max-width: 668px) {
  .container {
    display: grid;
  }
  .field {
    width: 70%;
    height: 90%;
    margin: 1rem auto;
  }
}
@media only screen and (max-width: 1025px) and (orientation: landscape) {
  .container {
    flex-direction: column;
  }
  .field {
    width: 70%;
    height: 90%;
    margin: 1rem auto;
  }
}
</style>
