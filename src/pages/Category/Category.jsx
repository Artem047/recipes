import { NavLink } from 'react-router-dom';
import styles from './Category.module.css';
import { LuCroissant } from "react-icons/lu";
import { FaBurger, FaPizzaSlice } from "react-icons/fa6";
import { BiSolidSushi } from "react-icons/bi";
import FranceFood from '../../components/FranceFood/FranceFood';



const Category = () => {
  return (
    <div className={styles['category']}>
      <h1>Category</h1>
      <hr />
      <div className={styles['category-product']}>
        <NavLink to='/category/asian' className={styles['category-link']}>
            <BiSolidSushi size={35}/>
            <b>Asian</b>
        </NavLink>
        <NavLink to='/category/american' className={styles['category-link']}>
            <FaBurger size={35}/>
            <b>American</b>
        </NavLink>
        <NavLink to='/category/italian' className={styles['category-link']}>
            <FaPizzaSlice size={35}/>
            <b>Italian</b>
        </NavLink>
        <NavLink to='/category/france' className={styles['category-link']}>
            <LuCroissant size={35}/>
            <b>France</b>
        </NavLink>
      </div>
      <hr />
      <FranceFood />
    </div>
  )
}

export default Category