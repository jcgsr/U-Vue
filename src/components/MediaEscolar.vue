<template>
  <div id="media">
    <h2>{{ title }}</h2>
    <button type="button" class="btn btn-info" @click="showMessage = !showMessage">Instruções</button>
    <Direta />
    <Rec />

    <div class="alert alert-dismissible alert-info" v-show="showMessage">      

      <ul>
      INSTRUÇÕES
        <li>
          A média utilizada nesse WebApp é
          <ins>5.0</ins>.
        </li>
        <li>
          Não se deve usar
          <em>vírgula</em> mas
          <em>ponto</em> nas casas decimais.
        </li>
        <li>
          No campo
          <em>Aprovação Direta</em>, deve-se colocar as notas
          que, somadas, sejam iguais ou superiores a
          <ins>10.0</ins>.
        </li>
        <li>
          No campo
          <em>Recuperação</em>, deve-se colocar
          as notas que, somadas, sejam inferiores a
          <ins>10.0</ins>.
        </li>
        <li>
          Caso uma das Médias Semestrais no campo
          <em>Recuperação</em> seja
          igual ou maior a
          <ins>5.0</ins>,
          <br />deve-se repetir essa mesma média
          na nota de sua respectiva recuperação semestral.
        </li>
        <li>
          Caso a nota de qualquer
          <em>Recuperação</em> seja menor
          que a sua respectiva Média Semestral,
          <br />deve-se descartar
          a nota da recuperação e repetir a
          <em>Média Semestral</em>.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Direta from "./media/Direta";
import Rec from "./media/Rec";

export default {
  name: "Media",
  components: { Direta, Rec },
  data: () => ({
    title: "Média Escolar",
    showMessage: false,
  }),
};
</script>

<style lang="css">
#media h2 {
  text-align: center;
  padding: 1rem;
  color: rgba(245, 245, 7, 0.479);
}

#media button {
  width: 10%;
  margin-bottom: 1rem;
}

.alert{
	max-width: 30%;
}

.alert ul li {
	list-style: square;
	color: aliceblue;
}

@media only screen and (max-width: 600px) {
.alert {
		max-width: 60%;	
		}
  }
</style>