import React from "react";
import styles from "./RecipeItem.module.css";
import { useSelector } from "react-redux";
import { actions } from "../../store/favorites/favorites.slice";
import { useActions } from "../../hook/useActions";
import { useFavorites } from "../../hook/useFavorites";

const RecipeItem = ({ recipe }) => {
  const { favorites } = useFavorites();
  console.log(favorites)

  const { toggleFavorites } = useActions();
  const isExists = favorites.some((r) => r.id === recipe.id);

  console.log(favorites);

  let isExistsText = "";

  if (isExists) isExistsText = "Remove from favorites";
  else isExistsText = "Add to favorites";

  return (
    <div className={styles.item}>
      {/* <img src="" alt="" /> */}
      <h2>{recipe.name}</h2>
      <button
        onClick={() => {
          toggleFavorites(recipe);
        }}
      >
        {isExistsText}
      </button>
    </div>
  );
};

export default RecipeItem;
