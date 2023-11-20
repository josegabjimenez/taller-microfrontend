import React, {useState, useEffect} from 'react';
import './ProductList.css';

const ProductList = ({products}) => {
	const [filteredProducts, setFilteredProducts] = useState(products);

	useEffect(() => {
		const handleSearch = (e) => {
			const searchTerm = e.detail;
			setFilteredProducts(products.filter((product) => product.name.toLowerCase().includes(searchTerm.toLowerCase())));
		};

		window.addEventListener('search', handleSearch);
		return () => {
			window.removeEventListener('search', handleSearch);
		};
	}, [products]);

	return (
		<div className="product-list">
			{filteredProducts.map((product) => (
				<div className="product-card" key={product.id}>
					{/* <img src={product.image} alt={product.name} className="product-image" /> */}
					<h2 className="product-name">{product.name}</h2>
					<p className="product-description">{product.description}</p>
					<p className="product-price">{product.price}</p>
				</div>
			))}
		</div>
	);
};

export default ProductList;
