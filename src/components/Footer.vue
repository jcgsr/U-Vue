<template>
  <div id="footer">
    &copy;{{ footer }}
    <a class="btn btn-info" :href="link">Jovane</a>
    <br>
    {{ msg }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer: "2020 - U-Vue criado e desenvolvido por ",
      link: "https://jcgsr.github.io/",
      msg: "Todos os Direitos Reservados"
    };
  },
};
</script>

<style scoped>
#footer {
  text-align: center;
  background-color: rgb(22, 21, 21);
  padding: 0.5rem;
  width: 100%;
  margin: 0 auto;
}

a:link {
  text-decoration: none;
  width: 8%;
}

@media only screen and (max-width: 450px) {
  a:link {
    width: 24%;
  }
}

@media only screen and (min-width: 736px) {
  a:link {
    width: 10%;
  }
}
</style>
