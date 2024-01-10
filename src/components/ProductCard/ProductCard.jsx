import { useState } from 'react';
import styles from './ProductCard.module.css';
import { useEffect } from 'react';
import axios from 'axios';
import { API } from '../../utils/API';

const ProductCard = () => {
	const [product, setProduct] = useState([]);

	const gerRandomRecipe = async () => {
		try {
			let res = await axios.get(`https://api.spoonacular.com/food/images/classify?apiKey=${API}`);
			setProduct(res.data.recipes);
			console.log(res.data.recipes)
		} catch (e) {
			console.log(e)
		}
	}

	useEffect(() => {
		gerRandomRecipe();
	}, [])

	return (
		<div className={styles['card']}>
			{/*<div className={styles['product-list']}>
				{product.map((recipe, id) => (
					<li className={styles['product-card']} key={id}>
						<p>{recipe.title}</p>
						<img className={styles['product-image']} src={recipe.image} alt={recipe.title} />
					</li>
				))}
			</div>*/}
		</div>
	)
}

export default ProductCard