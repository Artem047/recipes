import { NavLink } from 'react-router-dom';
import styles from './Category.module.css';
import { LuCroissant } from "react-icons/lu";
import { FaBurger, FaPizzaSlice } from "react-icons/fa6";
import { BiSolidSushi } from "react-icons/bi";

const Category = () => {
  return (
    <div className={styles['category']}>
            <NavLink to='/asian' className={styles['category-link']}>
                <BiSolidSushi size={35}/>
                <b>Asian</b>
            </NavLink>
            <NavLink to='/asian' className={styles['category-link']}>
                <FaBurger size={35}/>
                <b>American</b>
            </NavLink>
            <NavLink to='/asian' className={styles['category-link']}>
                <FaPizzaSlice size={35}/>
                <b>Italian</b>
            </NavLink>
            <NavLink to='/asian' className={styles['category-link']}>
                <LuCroissant size={35}/>
                <b>France</b>
            </NavLink>
    </div>
  )
}

export default Category