import React from 'react'

const RecipeItem = (recipe) => {
  return (
    <div>
        {/* <img src="" alt="" /> */}
        <h2>{recipe.name}</h2>
        <button>Add to favorites</button>
    </div>
  )
}

export default RecipeItem