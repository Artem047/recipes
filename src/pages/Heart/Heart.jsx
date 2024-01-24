import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Heart.module.css";
import { FaClock } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";

const Heart = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const deleteFavorite = (id) => {
    const updatedFavorites = favorites.filter((favorite) => favorite.id !== id);

    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  return (
    <div className={styles["heart"]}>
      <h1>Favorites</h1>
      {favorites.length > 0 ? (
        <ul className={styles["heart-list"]}>
          {favorites.map((favorite) => (
            <li key={favorite.id} className={styles["heart-card"]}>
              <button onClick={() => deleteFavorite(favorite.id)} className={styles["heart-basket"]}>
                <img
                  src="/basket.png"
                  alt="Basket"
                />
              </button>
              <Link to={`/category/heart/${favorite.id}`}>
                <img
                  src={favorite.image}
                  alt={favorite.title}
                  className={styles["heart-image"]}
                />
                <p>{favorite.title}</p>
                <div className={styles["favorite-info"]}>
                  <div className={styles["favorite-info-time"]}>
                    <FaClock size={20} />
                    <h4>{favorite.readyInMinutes} min</h4>
                  </div>
                  <div className={styles["favorite-info-price"]}>
                    <IoMdPricetag size={20} />
                    <h4>{favorite.pricePerServing} ₽</h4>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  );
};

export default Heart;
