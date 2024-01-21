import { useEffect, useState } from 'react';
import styles from './CategoryCard.module.css'
import { useParams } from 'react-router-dom';
import { API } from '../../utils/API';


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
      {recipeDetails ? (
        <>
          <h2>{recipeDetails.title}</h2>
          <img src={recipeDetails.image} alt={recipeDetails.title} />
        </>
      ) : (
        <p>Loading recipe details...</p>
      )}
    </div>
  )
}

export default CategoryCard