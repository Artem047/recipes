import { useEffect, useState } from 'react';
import styles from './FranceFood.module.css';
import { API } from '../../utils/API';
import { IoHeart } from 'react-icons/io5';
import { FaClock } from 'react-icons/fa6';
import { IoMdPricetag } from 'react-icons/io';
import { Link } from 'react-router-dom';

const FranceFood = () => {
    const [food, setFood] = useState([]);

	const getRandomRecipe = async () => {
		const check = localStorage.getItem('food');

		if(check){
			setFood(JSON.parse(check));
		}else{
			const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${API}&exclude-tags=france&number=9`);
			const data = await api.json();

			localStorage.setItem('food', JSON.stringify(data.recipes));
			setFood(data.recipes);
			console.log(data.recipes);
		}
	}

	useEffect(() => {
		getRandomRecipe();
	}, [])

  return (
    <div className={styles['food']}>
        {food.map((food) => {
            return (
                <Link to={`/category/france/${food.id}`} className={styles['product-card']} key={food.id}>
                    <div className={styles['heart']}>
							<IoHeart color='red' size={30} /> 
						</div>
						<img className={styles['product-image']} src={food.image} alt={food.title} />
						<p>{food.title}</p>
						<div className={styles['product-info']}>
							<div className={styles['product-info-time']}>
								<FaClock size={20} />
								<h4>{food.readyInMinutes} min</h4>
							</div>
							<div className={styles['product-info-price']}>
								<IoMdPricetag size={20} />
								<h4>{food.pricePerServing} $</h4>
							</div>
						</div>
                </Link>
            )
        })}
    </div>
  )
}

export default FranceFood