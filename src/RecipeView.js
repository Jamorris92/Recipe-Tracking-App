import React from "react";


function RecipeView({ recipe, deleteRecipe }) {


    return(
        <tr>
            <td>
                {(recipe.name)}
            </td>
            <td>
                {(recipe.cuisine)}
            </td>
            <td>
                <img src={(recipe.photo)} alt="Recipe"/>
            </td>
            <td>
                <p>{(recipe.ingredients)}</p>
            </td>
            <td key={(recipe.preparation)}>
                <p>{(recipe.preparation)}</p>
            </td>
            <td>
                <button name="delete" onClick={deleteRecipe}>Delete</button>
            </td>
        </tr>
    );
};

export default RecipeView;