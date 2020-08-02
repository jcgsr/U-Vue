<template>
   <div id="math">
      <h2>{{ title }}</h2>
   </div>
</template>

<script>
	export default {
		name: 'Math',
		data: () => ({
			title: 'Math Vue'
		})
	}
</script>

<style lang="css">
	#math h2 {
		text-align: center;
		padding: 1rem;
		color: rgba(245, 245, 7, 0.479);
	}
</style>