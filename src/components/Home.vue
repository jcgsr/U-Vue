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

        <div class="field">
          <router-link to="/afinador" class="nav-link">
            <i class="fas fa-guitar" title="Afinador"></i>
          </router-link>
        </div>
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
  opacity: 0.6;
  transition: 0.8s;
}

.field i {
  font-size: 6rem;
}

.field:hover {
  opacity: 1;
}

@media only screen and (max-width: 450px) {
  .container {
    display: flex;
    flex-direction: column;
  }
  .field {
    width: 70%;
    height: 90%;
    margin: 1rem auto;
  }
}
@media only screen and (min-width: 768px) {
  .field {
    width: 70%;
    height: 90%;
    margin: 1rem auto;
    margin-left: 0.5rem;
  }
}
</style>
