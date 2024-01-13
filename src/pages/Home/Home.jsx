import PopularCard from "../../components/PopularCard/PopularCard"
import styles from "./Home.module.css";


const Home = () => {
  return (
    <div className={styles['home']}>
      <div className={styles['title-text']}>
        <h1>Your Daily Dish <br />A <b>Food</b> Journey</h1>
        <p>
        Embark on a flavorful adventure with Your Daily Dish: A Food Journey, where each day brings a delectable exploration of diverse culinary delights to tantalize your taste buds.
        </p>
      </div>
      <div className={styles['dish']}>
        <img src="/header.png" alt="Иконка блюда" />
        <div className={styles['dish-info']}>
            <h1>
              Salad with chicken
            </h1>
            <p>
            Indulge in the classic flavors of Caesar Salad, a timeless dish that combines crisp greens, savory croutons, tangy dressing, and Parmesan cheese
            </p>
        </div>
      </div>
      {/* <h1>Popular Picks</h1>
      <PopularCard /> */}
    </div>
  )
}

export default Home