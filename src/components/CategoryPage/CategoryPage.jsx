import styles from "./CategoryPage.module.css";
import { Link, useParams } from "react-router-dom";
import { RiArrowRightSLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import { API } from "../../utils/API";
import { IoHeart } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";

const CategoryPage = () => {
  const [category, setCategory] = useState([]);
  const { page } = useParams();

  const getRecipes = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API}&cuisine=${name}&number=9`
    );
    const recipes = await data.json();
    setCategory(recipes.results);
    console.log(recipes.results);
  };

  useEffect(() => {
    getRecipes(page);
    console.log(page);
  }, [page]);

  return (
    <div className={styles["category-page"]}>
      <div className={styles["page-link"]}>
        <Link to="/category">Category</Link>
        <RiArrowRightSLine size={20} />
        <p>{page}</p>
      </div>
      <div className={styles["category-list"]}>
        {category.map((cat) => {
          return (
            <div className={styles["category-card"]} key={cat.id}>
              <div className={styles["heart"]}>
                <IoHeart color="red" size={30} />
              </div>
              <img
                className={styles["category-image"]}
                src={cat.image}
                alt={cat.title}
              />
              <p>{cat.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;
