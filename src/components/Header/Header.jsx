import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { IoHeartOutline, IoHomeOutline, IoPersonCircleOutline } from 'react-icons/io5';
import { PiCookingPotBold } from 'react-icons/pi';
import { UserAuth } from '../../context/AuthContext';

const Header = () => {
    const { user } = UserAuth();

  return (
    <div className={styles['navbar']}>
        <div className={styles['header']}>
          <img src="/logo.svg" alt="Иконка сайта" className={styles['logo']} />
          <p>Artem<b>Recipes</b></p>
        </div>
        <nav className={styles['menu']}>
          <NavLink to='/' className={styles['link']}>
            <IoHomeOutline size={30} /> Home
          </NavLink>
          <NavLink to='/category' className={styles['link']}>
            <PiCookingPotBold size={30} /> Category 
          </NavLink>
          <NavLink to='/heart' className={styles['link']}>
            <IoHeartOutline size={30} /> Heart
          </NavLink>
          <NavLink to='/profile' className={styles['link']}>
            <IoPersonCircleOutline size={30} /> Profile
          </NavLink>
        </nav>
        {user.photoURL == null ? <img src="/avatar.png" alt="Изображение логотипа" className={styles['user']} /> : <img src={user.photoURL} alt="" className={styles['user']} />}
      </div>
  )
}

export default Header