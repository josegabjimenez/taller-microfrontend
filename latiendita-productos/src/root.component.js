import React, {useEffect, useState} from 'react';
import ProductList from './ProductList';

export default function Root(props) {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		console.log('Root component mounted!');

		// Get products from backend
		fetch('http://localhost:3000/products')
			.then((response) => response.json())
			.then((products) => {
				console.log(products);
				setProducts(products);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	return (
		<>
			{/* <section>{props.name} is mounted!</section> */}

			{products.length > 0 ? <ProductList products={products} /> : <p>Loading...</p>}
		</>
	);
}
