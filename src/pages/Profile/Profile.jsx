import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { database } from '../../utils/FirebaseConfig';
import { IoExitOutline } from 'react-icons/io5';
import styles from './Profile.module.css';

const Profile = () => {
  const navigate = useNavigate();

  const logoutClick = () => {
    signOut(database).then(() => navigate('/auth/login'))
  }
  return (
	<div>
    Profile
    <button className={styles['exit-btn']} onClick={logoutClick}>
          <IoExitOutline size={30} />
          Log out
        </button>
  </div>
  )
}

export default Profile