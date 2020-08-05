<template>
   <div id="media">
      <h2>{{ title }}</h2>
		<Direta />
   </div>
</template>

<script>
	import Direta from './media/Direta'

	export default {
		name: 'Media',
		components: { Direta },
		data: () => ({
			title: 'Média Escolar'
		})
	}
</script>

<style lang="css">
	#media h2 {
		text-align: center;
		padding: 1rem;
		color: rgba(245, 245, 7, 0.479);
	}
</style>