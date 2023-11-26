const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());

const products = [
	{id: 1, name: 'Arroz', description: 'Arroz blanco de 1kg', price: '$2', image: 'path-to-image-arroz.png'},
	{id: 2, name: 'Frijoles', description: 'Frijoles negros de 1kg', price: '$1.5', image: 'path-to-image-frijoles.png'},
	{id: 3, name: 'Azucar', description: 'Azucar blanca de 1kg', price: '$1.2', image: 'path-to-image-azucar.png'},
	{id: 4, name: 'Aceite', description: 'Aceite de girasol de 1L', price: '$3', image: 'path-to-image-aceite.png'},
	{id: 5, name: 'Sal', description: 'Sal de mesa de 500g', price: '$0.5', image: 'path-to-image-sal.png'},
	{id: 6, name: 'Pimienta', description: 'Pimienta negra molida de 50g', price: '$1', image: 'path-to-image-pimienta.png'},
	{id: 7, name: 'Vinagre', description: 'Vinagre de manzana de 1L', price: '$2.5', image: 'path-to-image-vinagre.png'},
	{id: 8, name: 'Harina', description: 'Harina de trigo de 1kg', price: '$1.8', image: 'path-to-image-harina.png'},
	{id: 9, name: 'Leche', description: 'Leche entera de 1L', price: '$1', image: 'path-to-image-leche.png'},
	{id: 10, name: 'Huevos', description: 'Carton de huevos x12', price: '$2.5', image: 'path-to-image-huevos.png'},
];

app.get('/products', (req, res) => {
	res.json(products);
});

app.listen(port, () => {
	console.log(`Server running at http://localhost:${port}`);
});
