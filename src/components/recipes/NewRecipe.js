import React, { useContext } from 'react';
import uniqid from 'uniqid';

import AppContext from '../context';
import SmallInput from './subcom/SmallInput';
import BigInput from './subcom/BigInput';

import { parse } from 'recipe-ingredient-parser-v3';

const NewRecipe = () => {
  const { dispatchRecipeEvent } = useContext(AppContext);

  const handleAddRecipe = async () => {
    let ingredients = JSON.stringify(parseIngredients(ing));
    let recipe = { title, description, source, ingredients, instructions, "_id": uniqid() };
    dispatchRecipeEvent('ADD', { newRecipe: recipe });
  };

  const parseIngredients = (ing) => {
    if (!ing || ing.trim().length === 0) return [{}];

    let ingArr = ing.split(/[\n,]+/).map(item => item.trim());
    let parsedIngredients = ingArr.map(item => parse(item, 'eng'));
    return parsedIngredients;
  };

  const [title, titleInput] = SmallInput({ placeholder: "title" });
  const [description, descriptionInput] = SmallInput({ placeholder: "description" });
  const [source, sourceInput] = SmallInput({ placeholder: "source" });
  const [ing, ingInput] = BigInput({ placeholder: "ingredients (comma or newline separated)" });
  const [instructions, instructionsInput] = BigInput({ placeholder: "instructions" });

  return (
    <div id="add-recipe">
      <h3 className="add-recipe-header">Add New Recipe</h3>
      <div className="add-recipe-top-container">
        <div className="small-inputs">
          {titleInput}
          {descriptionInput}
          {sourceInput}
        </div>
      </div>
      <div className="add-recipe-btm-container">
        {ingInput}
        {instructionsInput}
        <button onClick={handleAddRecipe}>Add Recipe</button>
      </div>
    </div>
  );
};

export default NewRecipe;