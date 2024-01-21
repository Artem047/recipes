import styles from "./CategoryPage.module.css";
import { Link, useParams } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { API } from "../../utils/API";
import { IoHeart } from "react-icons/io5";
import Loading from "../Loading";

const CategoryPage = () => {
  const [category, setCategory] = useState([]);
  const { page } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const getRecipes = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&cuisine=${name}&number=9`
    );
    const recipes = await data.json();
    setCategory(recipes.results);
    console.log(recipes.results);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(true);
    }, 2000);
    getRecipes(page);
    console.log(page);
  }, [page]);

  return isLoading ? (
    <div className={styles["category-page"]}>
      <div className={styles["page-link"]}>
        <Link to="/category">Category</Link>
        <RiArrowRightSLine size={20} />
        <p>{page}</p>
      </div>
      <div className={styles["category-list"]}>
        {category.map((cat) => {
          return (
            <Link to={`/category/${page}/${cat.id}`} className={styles["category-card"]} key={cat.id}>
              <div className={styles["heart"]}>
                <IoHeart color="red" size={30} />
              </div>
              <img
                className={styles["category-image"]}
                src={cat.image}
                alt={cat.title}
              />
              <p>{cat.title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default CategoryPage;
