<template>
   <div id="math">
      <h2>{{ title }}</h2>
		<Soma />
		<Subtracao />
		<Multiplicacao />
		<Divisao />
		<Quadrado />
		<Cubo />
		<Potencia />
		<Porcentagem />
		<RaizQuadrada />
   </div>
</template>

<script>
	import Soma from './math/Soma'
	import Subtracao from './math/Subtracao'
	import Multiplicacao from './math/Multiplicacao'
	import Divisao from './math/Divisao'
	import Quadrado from './math/Quadrado'
	import Cubo from './math/Cubo'
	import Potencia from './math/Potencia'
	import Porcentagem from './math/Porcentagem'
	import RaizQuadrada from './math/RaizQuadrada'


	export default {
		components: { Soma, Subtracao, Multiplicacao, Divisao, Quadrado, Cubo, Potencia, Porcentagem, RaizQuadrada },
		name: 'Math',
		data: () => ({
			title: 'Math Vue'
		})
	}
</script>

<style lang="css">
	#math h2 {		
		padding: 1rem;
		color: rgba(245, 245, 7, 0.479);
	}
	
/style>
