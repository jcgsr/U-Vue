<template>
  <div id="afinador">
    <h2>Afinador</h2>
    <div class="card border-secondary mb-3">
      <div class="card-body">
        <!-- <h4>{{ track.title}}</h4>
        <audio 
          :src="track.audioURL"
          controls
          :ref="`player-${track.title}`"
          type="audio/mp3"
          @play="stopOthers(track.title)"
        ></audio>-->
        <h2 style="color: blueviolet;">Mi (E)</h2>
        <audio controls>
          <source src="./tons/Mi82.mp3" type="audio/mp3" />
        </audio>

        <h2 style="color: orange;">Lá (A)</h2>
        <audio controls>
          <source src="./tons/La110.mp3" type="audio/mp3" />
        </audio>

        <h2 style="color: blue;">Ré (D)</h2>
        <audio controls>
          <source src="./tons/Re146.mp3" type="audio/mp3" />
        </audio>

        <h2 style="color: red;">Sol (G)</h2>
        <audio controls>
          <source src="./tons/Sol196.mp3" type="audio/mp3" />
        </audio>

        <h2 style="color: rgba(136, 241, 15, 0.932);">Si (B)</h2>
        <audio controls>
          <source src="./tons/Si247.mp3" type="audio/mp3" />
        </audio>

        <h2 style="color: blueviolet;">Mi (E)</h2>
        <audio controls>
          <source src="./tons/Mi330.mp3" type="audio/mp3" />
        </audio>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Afinador",
  data() {
    return {};
  },
  mounted() {
    document.addEventListener(
      "play",
      function (e) {
        var audios = document.getElementsByTagName("audio");
        for (var i = 0, len = audios.length; i < len; i++) {
          if (audios[i] != e.target) {
            audios[i].pause();
          }
        }
      },
      true
    );
  },
};
</script>

<style lang="css">
#afinador h2 {
  text-align: center;
  padding: 1rem;
  color: rgba(245, 245, 7, 0.479);
}

.card {
  width: 50%;
}

@media only screen and (max-width: 450px) {
  .card {
    width: 80%;
  }
}
</style>