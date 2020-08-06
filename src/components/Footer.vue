<template>
  <div id="footer">
    &copy;{{ footer }}
    <a class="btn btn-info" :href="link">Jovane</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      footer: "2020 - U-Vue criado e desenvolvido por ",
      link: "https://jcgsr.github.io/",
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
  max-width: 8%;
}

@media only screen and (max-width: 600px) {
  a:link {
    max-width: 30%;
  }
}

@media only screen and (max-width: 800px) {
  a:link {
    max-width: 15%;
  }
}
</style>