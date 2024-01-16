import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';  

const Footer = () => {
  return (
    <div className={styles['footer']}>
        <div className={styles['site-footer']}>
            <img src="/logo.svg" alt="Иконка сайта"  />
            <p>Artem<b>Recipes</b></p>
        </div>
        <div className={styles['footer-link']}>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/category'>Category</NavLink>
            <NavLink to='/heart'>Heart</NavLink>
            <NavLink to='/profile'>Profile</NavLink>
            <NavLink to='/privacy'>Privacy & cookies</NavLink>
        </div>
        <div className={styles['footer-contact']}>
            <h2>Newsletter</h2>
            <p>Subscribe to our newsletter to get more free recipes</p>
            <form className={styles['footer-form']}>
                <input required type="email" placeholder='Enter Your Email' />
                <button type='submit'>Subscribe</button>
            </form>
        </div>
    </div>
  )
}

export default Footer