<template>
  <div class="container">
    <div class="card border-secondary mb-3">
      <div class="card-body">
        <h4 class="card-title">Aprovação Direta</h4>
        <div class="notas">
          1ª Nota:
          <input
            @focus="$event.target.select()"
            class="form-control"
            type="number"
            name="nota1"
            v-model="nota1"
          />
          2ª Nota:
          <input class="form-control" type="number" name="nota2" v-model="nota2" />
          3ª Nota:
          <input class="form-control" type="number" name="nota3" v-model="nota3" />
          4ª Nota:
          <input class="form-control" type="number" name="nota4" v-model="nota4" />
                   
          Média 1º Semestre:
          <h4>{{ mediaSem1 }}</h4>
          <hr>
          Média 2º Semestre:
          <h4>{{ mediaSem2 }}</h4>
          <br />
          <em>Média Final:</em>
          <h4>{{ mFinal }}</h4>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            nota1: '',
            nota2: '',
            nota3: '',
            nota4: '',
            media1: '',
            media2: '',
            mediaFinal: '',
        }
    },
    computed: {
        mediaSem1() {
            return (parseFloat(this.nota1) + parseFloat(this.nota2)) / 2;
        },
        mediaSem2() {
            return (parseFloat(this.nota3) + parseFloat(this.nota4)) / 2;
        },
        mFinal() {
            return (parseFloat(this.mediaSem1) + parseFloat(this.mediaSem2)) / 2;
        }
    }
}
</script>

<style lang="css">
.container .card {
  max-width: 50%;
}

.container .card input {
  margin-bottom: 0.5rem;
}

@media only screen and (max-width: 600px) {
  .container .card {
    max-width: 80%;
  }
}
</style>
