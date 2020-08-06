<template>
	<div id="home">
		<h2>{{ title }}</h2>
		<h4>{{ subtitle }}</h4>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data: () => ({
			title: 'U-Vue',
			subtitle: 'Webapps utilitários criados em VueJS'
		})
	}
</script>

<style>
	#home h2 {
		text-align: center;
		padding: 1rem;
		color: rgba(245, 245, 7, 0.479);
	}
	#home h4 {
		color: rgba(245, 245, 7, 0.479);
	}
</style>
