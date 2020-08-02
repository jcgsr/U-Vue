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
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/math" class="nav-link">
              <i class="fas fa-calculator" title="Operações Matemáticas"></i>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/media" class="nav-link">
              <i class="fas fa-graduation-cap" title="Média Escolar"></i>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/cambio" class="nav-link">
              <i class="fas fa-search-dollar" title="Cotação Dólar/Euro"></i>
            </router-link>
          </li>

          <li class="nav-item">
            <router-link to="/sobre" class="nav-link">
              <i class="fas fa-info" title="Info"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="css">
li i {
  font-size: 1.3rem;
  color: rgba(245, 245, 7, 0.479);
}

.navbar button {
  color: rgba(245, 245, 7, 0.479);
}
</style>
