import styles from './Root.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { IoHomeOutline, IoHeartOutline, IoPersonCircleOutline, IoSettingsSharp, IoExitOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { database } from '../../utils/FirebaseConfig';
import { UserAuth } from '../../context/AuthContext';

const Root = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();

  const logoutClick = () => {
    signOut(database).then(() => navigate('/auth/login'))
  }

  return (
    <div className={styles['layout']}>
      <div className={styles['sidebar']}>
      <div className={styles['user']}>
          <b>{user.displayName === null ? user.email : user.displayName}</b>
          {user.photoURL == null ? <img src="/avatar.png" alt="Изображение логотипа" className={styles['logo']} /> : <img src={user.photoURL} alt="" className={styles['logo']} />}
        </div>
        <nav className={styles['menu']}>
          <NavLink to='/' className={styles['link']}>
            <IoHomeOutline size={30} /> Home
          </NavLink>
          <NavLink to='/heart' className={styles['link']}>
            <IoHeartOutline size={30} /> Heart
          </NavLink>
          <NavLink to='/profile' className={styles['link']}>
            <IoPersonCircleOutline size={30} /> Profile
          </NavLink>
          <NavLink to='/settings' className={styles['link']}>
            <IoSettingsSharp size={30} /> Settings
          </NavLink>
        </nav>
        <button className={styles['exit-btn']} onClick={logoutClick}>
          <IoExitOutline size={30} />
          Log out
        </button>
      </div>
      <div className={styles['content']}>
        <Outlet />
      </div>
    </div>
  )
}

export default Root