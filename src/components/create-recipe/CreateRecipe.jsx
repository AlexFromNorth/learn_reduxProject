import React, { useState } from "react";
import { useCreateRecipeMutation } from "../../store/api/recipe.api";

const defaultValue = {
    name: "",
    image: "",
  }

const CreateRecipe = () => {
  const [recipe, setRecipe] = useState(defaultValue);

  const [createRecipe] = useCreateRecipeMutation();

  const handlerSubmit = (e) => {
    e.preventDefault();
    createRecipe(recipe).then(() => {
      setRecipe(defaultValue);
    });
  };

  return (
    <div>
      <form onSubmit={handlerSubmit}>
        <p>Create new recipe:</p>
        <label>
          <input
            type="text"
            placeholder="Name"
            value={recipe.name}
            onChange={(e) => setRecipe({ ...recipe, name: e.target.value })}
          />
        </label>
        <label>
          <input
            type="text"
            placeholder="Image"
            value={recipe.image}
            onChange={(e) => setRecipe({ ...recipe, image: e.target.value })}
          />
        </label>
        <button type="submit" onClick={handlerSubmit}>
          Create
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
