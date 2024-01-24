import { useEffect, useState } from "react";
import styles from "./CategoryCard.module.css";
import { Link, useParams } from "react-router-dom";
import { API } from "../../utils/API";
import Loading from "../Loading";
import { RiArrowRightSLine } from "react-icons/ri";
import { IoHeart, IoShareSocial } from "react-icons/io5";
import ButtonIcon from "../ButtonIcon/ButtonIcon";

const CategoryCard = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  

  const fetchRecipeDetails = async (recipeId) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=${API}`
    );
    const recipe = await data.json();
    setRecipe(recipe);
    console.log(recipe);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
    fetchRecipeDetails(id);
    // console.log(window.location.href)
  }, [id]);

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
  }

  return isLoading ? (
    <div className={styles["category-card"]}>
      <div className={styles["category-card-navigate"]}>
        <Link to="/">Home</Link>
        <RiArrowRightSLine size={20} />
        <Link to="/category">Category</Link>
        <RiArrowRightSLine size={20} />
        <p>{id}</p>
      </div>
      {recipe && (
        <div key={recipe.id} className={styles["category-card-info"]}>
        <div className={styles["category-card-info-header"]}>
          <h2>{recipe.title}</h2>
          <div className={styles["category-card-info-header-social"]}>
            <ButtonIcon>
              <IoHeart size={30} color="red" />
            </ButtonIcon>
            <ButtonIcon click={handleCopy}>
              <IoShareSocial size={30} color="#1cb96d" />
            </ButtonIcon>
          </div>
        </div>
        <hr color="#D0DBEA" />
        <div className={styles["category-card-product"]}>
          <img src={recipe.image} alt="" />
          <ul className={styles["category-card-ingredients"]}>
            <h2>Ingredients:</h2> <br />
            {recipe.extendedIngredients.map((ingredient) => (
              <li key={ingredient.key}>{ingredient.original}</li>
            ))}
          </ul>
        </div>
        <div className={styles["category-card-time"]}>
          <ul className={styles['category-card-time-list']}>
              <li>
                <h4>Time:</h4>
                <p>{recipe.readyInMinutes} min</p>
              </li> <hr />
              <li>
                <h4>Servings:</h4>
                <p>{recipe.servings}</p>
              </li> <hr />
              <li>
                <h4>Price:</h4>
                <p>{recipe.pricePerServing} ₽</p>
              </li>
          </ul>
        </div>
        <div className={styles['category-card-instructions']}>
              <h2>Instructions:</h2>
              <ol>
                <li dangerouslySetInnerHTML={{ __html: recipe.instructions}}></li>
              </ol>
        </div>
      </div>
      )}
    </div>
  ) : <Loading />
};

export default CategoryCard;
