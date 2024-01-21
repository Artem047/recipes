import { useEffect, useState } from 'react';
import styles from './CategoryCard.module.css'
import { Link, useParams } from 'react-router-dom';
import { API } from '../../utils/API';
import Loading from '../Loading';
import { RiArrowRightSLine } from "react-icons/ri";
import { IoHeart, IoShareSocial  } from "react-icons/io5";


const CategoryCard = () => {
  const { id } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);

  const fetchRecipeDetails = async (recipeId) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API}`
    );
    const recipe = await data.json();
    setRecipeDetails(recipe);
    console.log(recipe);
  };

  useEffect(() => {
    fetchRecipeDetails(id);
  }, [id]);

  return (
    <div className={styles['category-card']}>
      <div className={styles['category-card-navigate']}>
        <Link to='/'>Home</Link>
        <RiArrowRightSLine size={20} />
        <Link to='/category'>Category</Link>
        <RiArrowRightSLine size={20} />
        <p>{recipeDetails.title}:</p>
      </div>
      {recipeDetails ? (
        <div className={styles['category-card-info']}>
          <div className={styles['category-card-info-header']}>
            <h2>{recipeDetails.title}</h2>
            <div className={styles['category-card-info-header-social']}>
                <div className={styles['heart']}>
                  <IoHeart color='red' size={30} />
                </div>
            </div>
          </div>
          <hr color='#D0DBEA' />
          <img src={recipeDetails.image} alt={recipeDetails.title} />
        </div>
      ) : (
        <Loading />
      )}
    </div>
  )
}

export default CategoryCard