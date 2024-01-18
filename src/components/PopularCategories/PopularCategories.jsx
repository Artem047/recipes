import styles from './PopularCategories.module.css';
import { Link } from 'react-router-dom';
import { popularCategory } from '../../utils/data/data';

const PopularCategories = () => {
  return (
    <ul className={styles['category']}>
        {popularCategory.map((category) => {
            return (
                <li key={category.id}>
                    <Link to={`/category/${category.title.toLowerCase()}`} className={styles['category-link']}>
                        <img src={category.image} alt="" />
                        <h2>{category.title}</h2>
                    </Link>
                </li>
            )
        })}
    </ul>
  )
}

export default PopularCategories