<template>
	<div id="home">
		<h2>{{ title }}</h2>
	</div>
</template>

<script>
	export default {
		name: 'Home',
		data: () => ({
			title: 'U-Vue'
		})
	}
</script>

<style lang="css">
	#home h2 {
		text-align: center;
		padding: 1rem;
		color: rgba(245, 245, 7, 0.479);
	}
</style>
