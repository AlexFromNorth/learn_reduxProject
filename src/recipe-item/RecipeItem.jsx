import React from "react";
import styles from "./RecipeItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { actions } from "../store/favorites/favorites.slice";

const RecipeItem = ({ recipe }) => {
  const { favorites } = useSelector((state) => state);

  const dispatch = useDispatch();
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
          dispatch(actions.toggleFavorites(recipe));
        }}
      >
        {isExistsText}
      </button>
    </div>
  );
};

export default RecipeItem;
