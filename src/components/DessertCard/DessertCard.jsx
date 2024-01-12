import { useState, useEffect } from "react";
import styles from "./DessertCard.module.css";
import { API } from "../../utils/API";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

const DessertCard = () => {
  const [dessert, setDessert] = useState([]);

  const gerRandomRecipe = async () => {
    const check = localStorage.getItem("dessert");

    if (check) {
      setDessert(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${API}&number=8&include-tags=dessert`
      );
      const data = await api.json();

      localStorage.setItem("dessert", JSON.stringify(data.recipes));
      setDessert(data.recipes);
      console.log(data.recipes);
    }
  };

  useEffect(() => {
    gerRandomRecipe();
  }, []);
  return( 
    <Splide className={styles["card"]} options={{
        perPage: 4,
        arrows: false,
        pagination: false,
        drag: 'free',
        gap: '5rem',
    }}>
        {dessert.map((dess) => {
            return (
                <SplideSlide key={dess.id} className={styles['card-slide']}>
                    <p className={styles['card-title']}>{dess.title}</p>
                    <img src={dess.image} alt={dess.title} className={styles['card-image']} />
                </SplideSlide>
            )
        })}
    </Splide>
  );
};

export default DessertCard;
