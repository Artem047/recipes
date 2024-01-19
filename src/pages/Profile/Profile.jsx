import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { database } from '../../utils/FirebaseConfig';
import { IoExitOutline } from 'react-icons/io5';
import styles from './Profile.module.css';
import { UserAuth } from '../../context/AuthContext';
import { RiArrowRightSLine } from "react-icons/ri";

const Profile = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();

  const logoutClick = () => {
    signOut(database).then(() => navigate('/auth/login'))
  }
  return (
	<div className={styles['profile']}>
    <div className={styles['profile-navigate']}>
        <Link to='/'>Home</Link>
        <RiArrowRightSLine size={20} />
        <Link to='/profile'>Profile</Link>
    </div>
    <div className={styles['profile-info']}>
      <div className={styles['profile-user']}>
          {user.photoURL == null ? <img src="/avatar.png" alt="Изображение логотипа" className={styles['guest']} /> : <img src={user.photoURL} alt="" className={styles['user']} />}
          <img src="/chef.svg" alt="Иконка шляпы" className={styles['profile-chef']} />
      </div>
      <hr color='#9FA5C0' />
      <div className={styles['profile-form']}>
        <div>
          <label>Full Name</label>
          <div className={styles['profile-input']}>
            <img src="/user.png" alt="" />
            <div className={styles['profile-title']}>{user.displayName === null ? <p>Guest</p> : user.displayName}</div>
          </div>
        </div>
        <div>
          <label>Email</label>
          <div className={styles['profile-input']}>
            <img src="/mail.png" alt="" />
            <div className={styles['profile-title']}>{user.email}</div>
          </div>
        </div>
      </div>
      <button className={styles['exit-btn']} onClick={logoutClick}>
            <IoExitOutline size={30} />
            Log out
      </button>
    </div>
    
  </div>
  )
}

export default Profile