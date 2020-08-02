<template>
   <div id="sobre">
      <h2>{{ title }}</h2>
   </div>
</template>

<script>
	export default {
		name: 'Cambio',
		data: () => ({
			title: 'Sobre'
		})
	}
</script>

<style lang="css">
	#sobre h2 {
		text-align: center;
		padding: 1rem;
		color: rgba(245, 245, 7, 0.479);
	}
</style>