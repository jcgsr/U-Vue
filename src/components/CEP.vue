<template>
  <div id="imc">
    <h2>{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: "CEP",

  data: () => ({
    title: "CEP",
  }),
};
</script>

<style lang="css">
   #imc h2 {
      text-align: center;
      padding: 1rem;
      color: rgba(245, 245, 7, 0.479);
   }
</style>
