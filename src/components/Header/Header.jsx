import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import {
  IoHeartOutline,
  IoHomeOutline,
  IoPersonCircleOutline,
  IoClose,
  IoMenu,
} from "react-icons/io5";
import { PiCookingPotBold } from "react-icons/pi";
import { UserAuth } from "../../context/AuthContext";
import { useState } from "react";

const Header = () => {
  const { user } = UserAuth();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => setShowMenu(true);

  const closeMenu = () => setShowMenu(false);

  return (
    <div className={styles["navbar"]}>
      <div className={styles["header"]}>
        <img src="/logo.svg" alt="Иконка сайта" className={styles["logo"]} />
        <p>
          Artem<b>Recipes</b>
        </p>
      </div>
      <nav className={styles["menu"]}>
        <NavLink to="/" className={styles["link"]}>
          <IoHomeOutline size={30} /> Home
        </NavLink>
        <NavLink to="/category" className={styles["link"]}>
          <PiCookingPotBold size={30} /> Category
        </NavLink>
        <NavLink to="/heart" className={styles["link"]}>
          <IoHeartOutline size={30} /> Heart
        </NavLink>
        <NavLink to="/profile" className={styles["link"]}>
          <IoPersonCircleOutline size={30} /> Profile
        </NavLink>
      </nav>
      {user.photoURL == null ? (
        <img
          src="/avatar.png"
          alt="Изображение логотипа"
          className={styles["user"]}
        />
      ) : (
        <img src={user.photoURL} alt="" className={styles["user"]} />
      )}
      <div className={styles["menu_tab"]}>
        {showMenu ? (
          <IoClose onClick={closeMenu} size={50} />
        ) : (
          <IoMenu onClick={openMenu} size={50} />
        )}
      </div>
      <nav className={styles["menu_dropdown"]}>
        {showMenu && (
          <div className={styles["menu_dropdown_links"]}>
            <NavLink to="/" className={styles["link"]} onClick={closeMenu}>
              <IoHomeOutline size={45} /> Home
            </NavLink>
            <NavLink to="/category" className={styles["link"]} onClick={closeMenu}>
              <PiCookingPotBold size={45} /> Category
            </NavLink>
            <NavLink to="/heart" className={styles["link"]} onClick={closeMenu}>
              <IoHeartOutline size={45} /> Heart
            </NavLink>
            <NavLink to="/profile" className={styles["link"]} onClick={closeMenu}>
              <IoPersonCircleOutline size={45} /> Profile
            </NavLink>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Header;
