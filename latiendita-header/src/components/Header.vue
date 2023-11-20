<template>
	<header>
		<div class="logo-container">
			<img src="../assets/latiendita.png" alt="Logo de la tiendita" />
			<!-- <h1>Tiendita</h1> -->
		</div>
		<div class="search-container">
			<input type="text" @input="onInput" v-model="searchQuery" placeholder="Buscar productos..." />
			<button @click="buscarBtn"><img src="../assets/lupa-dark.png" alt="Logo de la tiendita" /></button>

			<button class="btn-primary" @click="verProductos">Productos</button>
		</div>
		<div class="product-section"></div>
	</header>
</template>

<script>
export default {
	name: 'HeaderView',
	data() {
		return {
			searchQuery: '',
		};
	},
	methods: {
		onInput() {
			// this.$emit('buscar-productos', this.searchQuery);
			const event = new CustomEvent('search', {detail: this.searchQuery});
			window.dispatchEvent(event);
		},
		buscarBtn() {
			// this.$emit('buscar-productos', this.searchQuery);
			const event = new CustomEvent('search', {detail: this.searchQuery});
			window.dispatchEvent(event);
		},
		verProductos() {
			// this.$emit('buscar-productos', this.searchQuery);
			const event = new CustomEvent('search', {detail: ''});
			window.dispatchEvent(event);
			this.searchQuery = '';
		},
	},
};
</script>

<style scoped>
/* Estilos CSS para el header */
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 20px;
	background-color: #11757c;
	border-bottom: 1px solid #e7e7e7;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.logo-container {
	display: flex;
	align-items: center;
}

.logo-container img {
	/* width: 60px; */
	height: 60px;
	margin-right: 15px;
}

.logo-container h1 {
	color: #333;
	font-size: 24px;
}

.search-container {
	display: flex;
	align-items: center;
	margin-left: 10px;
}

.search-container input {
	padding: 10px;
	margin-right: 10px;
	border-radius: 4px;
	border: 1px solid #ddd;
}

.search-container button {
	padding: 10px 20px;
	background-color: #ddd;
	color: #002022;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	margin-right: 10px;
}

.search-container img {
	height: 12px;
}

.btn-primary {
	background-color: #ddd;
	color: #002022;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	padding: 10px 20px;
}

.product-section {
	flex-grow: 1;
}

.product-section h2 {
	margin-bottom: 0;
	color: #333;
	font-size: 18px;
}
</style>
