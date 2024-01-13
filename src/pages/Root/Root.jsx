import styles from './Root.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { IoHomeOutline, IoHeartOutline, IoPersonCircleOutline, IoExitOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { database } from '../../utils/FirebaseConfig';
import { UserAuth } from '../../context/AuthContext';
import { PiCookingPotBold } from "react-icons/pi";

const Root = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();

  const logoutClick = () => {
    signOut(database).then(() => navigate('/auth/login'))
  }

  return (
    <div className={styles['layout']}>
      <div className={styles['sidebar']}>
        <div className={styles['site-header']}>
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

        {/* <button className={styles['exit-btn']} onClick={logoutClick}>
          <IoExitOutline size={30} />
          Log out
        </button> */}
      </div>
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  )
}

export default Root