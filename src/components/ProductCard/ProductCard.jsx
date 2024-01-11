import { useState } from 'react';
import styles from './ProductCard.module.css';
import { useEffect } from 'react';
import { API } from '../../utils/API';

const ProductCard = () => {
	const [product, setProduct] = useState([]);

	const gerRandomRecipe = async () => {
		const check = localStorage.getItem('product');

		if(check){
			setProduct(JSON.parse(check));
		}else{
			const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API}&number=9`);
			const data = await api.json();

			localStorage.setItem('product', JSON.stringify(data.recipes));
			setProduct(data.recipes);
			console.log(data.recipes);
		}
	}

	useEffect(() => {
		gerRandomRecipe();
	}, [])

	return (
		<div className={styles['card']}>
			<div className={styles['product-list']}>
				{product.map((recipe, id) => (
					<li className={styles['product-card']} key={id}>
						<img className={styles['product-image']} src={recipe.image} alt={recipe.title} />
						<p>{recipe.title}</p>
					</li>
				))}
			</div>
		</div>
	)
}

export default ProductCard