import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { database } from '../../utils/FirebaseConfig';
import { IoExitOutline } from 'react-icons/io5';
import styles from './Profile.module.css';
import { UserAuth } from '../../context/AuthContext';

const Profile = () => {
  const navigate = useNavigate();
  const { user } = UserAuth();

  const logoutClick = () => {
    signOut(database).then(() => navigate('/auth/login'))
  }
  return (
	<div className={styles['profile']}>
    <div className={styles['profile-user']}>
        {user.photoURL == null ? <img src="/avatar.png" alt="Изображение логотипа" className={styles['guest']} /> : <img src={user.photoURL} alt="" className={styles['user']} />}
        <img src="/chef.svg" alt="Иконка шляпы" className={styles['profile-chef']} />
    </div>
    <button className={styles['exit-btn']} onClick={logoutClick}>
          <IoExitOutline size={30} />
          Log out
    </button>
  </div>
  )
}

export default Profile