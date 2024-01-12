import PopularCard from "../../components/PopularCard/PopularCard"
import styles from "./Menu.module.css";


const Menu = () => {
  return (
    <div className={styles['menu']}>
      <h1>Popular Picks</h1>
      <PopularCard />
    </div>
  )
}

export default Menu