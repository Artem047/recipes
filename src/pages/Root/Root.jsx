import styles from './Root.module.css';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../../components/Header/Header';


const Root = () => {

  return (
    <div className={styles['layout']}>
      <Header />
      <div className={styles['content']}>
          <Outlet />
      </div>
      <div className={styles['footer']}>
        <Footer />
      </div>
    </div>
  )
}

export default Root