import PopularCard from "../../components/PopularCard/PopularCard"
import PopularCategories from "../../components/PopularCategories/PopularCategories";
import TouchContact from "../../components/TouchContact/TouchContact";
import styles from "./Home.module.css";


const Home = () => {
  return (
    <div className={styles['home']}>
      <div className={styles['home-header']}>
        <div className={styles['home-title']}>
          <h1>Your Daily Dish <br />A <b>Food</b> Journey</h1>
          <p>
          Embark on a flavorful adventure with Your Daily Dish: A Food Journey, where each day brings a delectable exploration of diverse culinary delights to tantalize your taste buds.
          </p>
        </div>
        <img src="/header.png" alt="Иконка блюда" />
      </div>
      <div className={styles['home-recipe']}>
          <img src="/delicious.png" alt="Изображение завтрака" />
          <div className={styles['home-recipe-title']}>
            <h1>See Delicious <b>Recipes</b></h1>
            <p>Explore a Culinary Wonderland: See Delicious Recipes Unveiled. Elevate your dining experience with our enticing collection of mouthwatering recipes.</p>
          </div>
      </div>
      <div className={styles['home-popular-recipe']}>
        <h1>Popular Recipes</h1>
        <PopularCard />
      </div>
      <TouchContact />
      <div className={styles['home-popular-category']}>
          <h1>Popular Categories</h1>
          <PopularCategories />
      </div>
    </div>
  )
}

export default Home