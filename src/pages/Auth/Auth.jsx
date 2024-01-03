import styles from './Auth.module.css';
import {Outlet} from 'react-router-dom';

const Auth = () => {
  return (
	<div className={styles['layout']}>
		<div>
			<img src="/logo.png" alt="" className={styles['logo']} />
		</div>
		<div className={styles['content']}>
			<Outlet />
		</div>
	</div>
  )
}

export default Auth