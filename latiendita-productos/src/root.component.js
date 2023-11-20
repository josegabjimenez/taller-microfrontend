import React from 'react';
import ProductList from './ProductList';

export default function Root(props) {
	const products = [
		{id: 1, name: 'Arroz', description: 'Arroz blanco de 1kg', price: '$2', image: 'path-to-image-arroz.png'},
		{id: 2, name: 'Frijoles', description: 'Frijoles negros de 1kg', price: '$1.5', image: 'path-to-image-frijoles.png'},
		{id: 3, name: 'Leche', description: 'Leche entera de 1L', price: '$1', image: 'path-to-image-leche.png'},
		{id: 4, name: 'Huevos', description: 'Cartón de huevos (12 unidades)', price: '$2.5', image: 'path-to-image-huevos.png'},
		{id: 5, name: 'Pan', description: 'Pan integral de 500g', price: '$1.2', image: 'path-to-image-pan.png'},
		{id: 6, name: 'Aceite', description: 'Aceite de girasol de 1L', price: '$2.3', image: 'path-to-image-aceite.png'},
		{id: 7, name: 'Pollo', description: 'Pechuga de pollo de 1kg', price: '$5', image: 'path-to-image-pollo.png'},
		{id: 8, name: 'Carne', description: 'Carne de res de 1kg', price: '$6', image: 'path-to-image-carne.png'},
		{id: 9, name: 'Pescado', description: 'Filete de pescado de 1kg', price: '$7', image: 'path-to-image-pescado.png'},
		{id: 10, name: 'Verduras', description: 'Mix de verduras de 1kg', price: '$3', image: 'path-to-image-verduras.png'},
	];

	return (
		<>
			{/* <section>{props.name} is mounted!</section> */}
			<ProductList products={products} />
		</>
	);
}
