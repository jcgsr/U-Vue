<template>
  <div id="sobre">
    <h2>{{ title }}</h2>
    <h4>
      Série de webapps utilitários feitos usando
      <a
        :href="vueUrl"
        target="new"
        title="Link para o site do Vue.Js"
      >Vue.JS</a>
    </h4>
    <div class="parallax" title="Vue.JS logo no Wikipedia"></div>

    <div class="p-div">
      <p>
        Sobre esse
        <strong>site</strong>: foi idealizado por
        <a :href="diegoUrl" target="new">Diego Luiz</a> para que eu colocasse em prática tudo o que venho aprendendo sobre front-end development, principalmente em relação ao Vue.js (o Framework JavaScript progressivo) nos cursos da
        <a
          :href="hcodeUrl"
          target="new"
        >HCode</a> e da
        <a :href="cod3rUrl" target="new">Cod3r</a>.
      </p>
      <p>
        Então, resolvi reunir todos os projetos (Operações Matemáticas, Cotação do Dólar, etc.) que eu tinha isolados no
        <a
          :href="netlifyUrl"
          target="new"
        >Netlify</a> em um único site: meu primeiro com domímio e hospedagem pagos.
      </p>
      <p>
        O que utilizei para a criação desse projeto foi Vue.js, obviamente,
        <a
          :href="bootstrapUrl"
          target="new"
        >Bootstrap</a>, um template do
        <a :href="bootswatchUrl" target="new">Bootswatch</a>, ícones do
        <a :href="faUrl" target="new">Font Awesome</a>, aimações do
        <a :href="animateUrl" target="new">Animate</a> e uma imagem do
        <a :href="pexelUrl" target="new">Pexel</a>.
      </p>
      <p>Meu objetivo é que esse site cresça à medida que eu aprenda novas funcionalidades, crie novos projetos e que, de fato, possa ter alguma utilidade para quem quer que seja.</p>
    </div>
    <div class="parallax1" title="Foto de Luis gomes no Pexels
" data-title-url></div>
    <div class="p-div_sobre">
      <p>
        Sobre o <strong>autor</strong>: Pernambucano do Recife, Alvirrubro. Tradutor (Ing-Port), Professor de Inglês. Desenvolvedor Web. Aprendendo Vue.js desde maio de 2020 depois de ter terminado o curso de JavaScript do
        <a
          :href="luizURL"
        >Luiz Otávio</a>.
      </p>
      <h4>Contatos</h4>
      <section class="contatos">
        <a :href="joGithub" target="new" title="Github de Jovane">
          <i class="fab fa-github"></i>
        </a>
        <a :href="joLinkedin" target="new" title="Linkedin de Jovane">
          <i class="fab fa-linkedin"></i>
        </a>
        <a :href="joTwitter" target="new" title="Twitter de Jovane">
          <i class="fab fa-twitter-square"></i>
        </a>
        <a :href="joWhatsapp" target="new" title="Whatsapp de Jovane">
          <i class="fab fa-whatsapp-square"></i>
        </a>
        <a :href="joFB" target="new" title="Facebook de Jovane">
          <i class="fab fa-facebook-square"></i>
        </a>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cambio",
  data: () => ({
    title: "Sobre",
    vueUrl: "https://vuejs.org/",
    diegoUrl: "http://www.diegoluiz.com.br/",
    hcodeUrl: "https://www.udemy.com/course/curso-vue-js-completo/",
    cod3rUrl: "https://www.udemy.com/course/vue-js-completo/",
    netlifyUrl: "https://www.netlify.com/",
    bootstrapUrl: "https://getbootstrap.com/",
    bootswatchUrl: "https://bootswatch.com/",
    faUrl: "https://fontawesome.com/",
    animateUrl: "https://animate.style/",
    pexelUrl:
      "https://www.pexels.com/pt-br/foto/atendente-atividade-banco-de-dados-base-de-dados-546819/",
    luizURL:
      "https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/",
    joGithub: "https://github.com/jcgsr",
    joLinkedin:
      "https://www.linkedin.com/in/cabralguerra/?trk=profile-badge&originalSubdomain=br",
    joTwitter: "https://twitter.com/teufel8?ref_src=twsrc%5Etfw",
    joWhatsapp: "https://api.whatsapp.com/send?phone=5579988284730&text=Entrar em contato",
    joFB: "https://facebook.com/cabral8guerra"
  }),
};
</script>

<style lang="css">
#sobre h2,
h4 {
  text-align: center;
  padding: 1rem;
  color: rgba(245, 245, 7, 0.479);
}

#sobre h4 {
  color: rgba(245, 245, 7, 0.479);
}

.parallax {
  /* The image used */
  background-image: url("../assets/logo.png");

  /* Set a specific height */
  min-height: 20rem;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.parallax1 {
  /* The image used */
  background-image: url("../assets/logo1.jpg");

  /* Set a specific height */
  min-height: 20rem;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.p-div {
  height: 55rem;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  max-width: 50%;
  padding: 1rem;
}

.p-div_sobre {
  margin-top: 3rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;
  max-width: 50%;
  padding: 1rem;
}

.p-div_sobre h4 {
  margin-bottom: 2rem;
  margin-top: 2rem;
}

.contatos {
  display: flex;
  margin-top: 2.5rem;  
}

i {
  font-size: 3rem;
  opacity: 0.6;
  transition: 0.8s;
}

i:hover { opacity: 1}

@media only screen and (max-width: 425px) and (max-height: 900px) {
  .p-div {
    height: 53rem;
    font-size: 1rem;
    max-width: 85%;
  }
  .p-div_sobre {
    height: 33rem;
    font-size: 1rem;
    max-width: 85%;
  }

  i {
    font-size: 2.5rem;
  }
}

@media only screen and (min-width: 768px) {
  .p-div {
    height: 40rem;
    font-size: 1.3rem;
    max-width: 75%;
  }
  .p-div_sobre {
    height: 30rem;
    font-size: 1.3rem;
    max-width: 75%;
  }
}
</style>