import { useState } from 'react';
import styles from './PopularCard.module.css';
import { useEffect } from 'react';
import { API } from '../../utils/API';
import { IoHeart } from "react-icons/io5";

const PopularCard = () => {
	const [popular, setPopular] = useState([]);

	const gerRandomRecipe = async () => {
		const check = localStorage.getItem('product');

		if(check){
			setPopular(JSON.parse(check));
		}else{
			const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API}&number=8`);
			const data = await api.json();

			localStorage.setItem('product', JSON.stringify(data.recipes));
			setPopular(data.recipes);
			console.log(data.recipes);
		}
	}

	useEffect(() => {
		gerRandomRecipe();
	}, [])

	return (
		<div className={styles['card']}>
			<div className={styles['product-list']}>
				{popular.map((recipe, id) => (
					<li className={styles['product-card']} key={id}>
						<div className={styles['heart']}>
							<IoHeart size={30} /> 
						</div>
						<img className={styles['product-image']} src={recipe.image} alt={recipe.title} />
						<p>{recipe.title}</p>
					</li>
				))}
			</div>
		</div>
	)
}

export default PopularCard