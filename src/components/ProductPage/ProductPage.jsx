import styles from './ProductPage.module.css';
import { useParams } from 'react-router-dom';

const ProductPage = () => {
    const { page } = useParams();
  return (
    <div className={styles['product-page']}>{page}</div>
  )
}

export default ProductPage