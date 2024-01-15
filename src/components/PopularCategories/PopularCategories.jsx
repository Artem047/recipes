import styles from './PopularCategories.module.css';
import { LuCroissant } from "react-icons/lu";
import { FaBurger, FaPizzaSlice } from "react-icons/fa6";
import { BiSolidSushi } from "react-icons/bi";
import { NavLink } from 'react-router-dom';
import { popularCategory } from '../../utils/data/data';

const PopularCategories = () => {
  return (
    <ul className={styles['category']}>
        {popularCategory.map((category) => {
            return (
                <li key={category.id}>
                    <NavLink to='/category/asian' className={styles['category-link']}>
                        <img src={category.image} alt="" />
                        <h2>{category.title}</h2>
                    </NavLink>
                </li>
            )
        })}
        {/* <li className={styles['category-card']}>
            <NavLink to='/category/asian' className={styles['category-link']}>
                <BiSolidSushi size={100}/>
                <h2>Asian</h2>
            </NavLink>
        </li>
        <li className={styles['category-card']}>
            <NavLink to='/category/asian' className={styles['category-link']}>
                <BiSolidSushi size={100}/>
                <h2>Asian</h2>
            </NavLink>
        </li>
        <li className={styles['category-card']}>
            <NavLink to='/category/asian' className={styles['category-link']}>
                <BiSolidSushi size={100}/>
                <h2>Asian</h2>
            </NavLink>
        </li>
        <li className={styles['category-card']}>
            <NavLink to='/category/asian' className={styles['category-link']}>
                <BiSolidSushi size={100}/>
                <h2>Asian</h2>
            </NavLink>
        </li> */}
    </ul>
  )
}

export default PopularCategories