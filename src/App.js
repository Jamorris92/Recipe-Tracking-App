import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {

  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list, edit and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  const createRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe])
  };

  function DeleteRecipe(recipeIndex) {
    setRecipes(recipes.filter((recipe, index) => index !== recipeIndex));
  };

  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={DeleteRecipe} />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;