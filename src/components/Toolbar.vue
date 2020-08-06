<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor02"
        aria-controls="navbarColor02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarColor02">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link to="/">
              <i class="fas fa-home" title="Home"></i>
              <h6>Início</h6>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/math" class="nav-link">
              <i class="fas fa-calculator" title="Operações Matemáticas"></i>
              <h6>Operações Matemáticas</h6>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/media" class="nav-link">
              <i class="fas fa-graduation-cap" title="Média Escolar"></i>
              <h6>Média Escolar</h6>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/conversor" class="nav-link">
              <i class="fas fa-temperature-high" title="Conversor"></i>
             <h6>Conversor</h6>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/cambio" class="nav-link">
              <i class="fas fa-search-dollar" title="Cotação Dólar/Euro"></i>
              <h6>Cotação</h6>
            </router-link>
          </li>

           <li class="nav-item">
            <router-link to="/imc" class="nav-link">
             <i class="fas fa-weight" title="IMC"></i>
              <h6>IMC</h6>
            </router-link>
          </li>

         <li class="nav-item">
            <router-link to="/cep" class="nav-link">
             <i class="fas fa-mail-bulk" title="CEP"></i>
              <h6>CEP</h6>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/sobre" class="nav-link">
              <i class="fas fa-info" title="Info"></i>
              <h6>Info</h6>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="css">
.navbar  ul li{
  display: flex;
  width: 100%;
}

.navbar h6{
  color: rgba(245, 245, 7, 0.479);
  margin-top: .3rem;
} 

li i {
  font-size: 1.3rem;
  color: rgba(245, 245, 7, 0.479);
}

.navbar button {
  color: rgba(245, 245, 7, 0.479);
}
</style>
