import styles from './CategoryPage.module.css';
import { Link, useParams } from 'react-router-dom';
import { RiArrowRightSLine } from "react-icons/ri";

const CategoryPage = () => {
    const { page } = useParams();
  return (
    <div className={styles['category-page']}>
      <div className={styles['page-link']}>
        <Link to='/category'>Category</Link>
        <RiArrowRightSLine size={20} />
        <p>{page}</p>
      </div>
    </div>
  )
}

export default CategoryPage