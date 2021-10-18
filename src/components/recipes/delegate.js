const storage = localStorage;
const getRecipeList = () => { return JSON.parse(localStorage.getItem('recipes')) || []; };
const recipeDelegate = {
  /**
   * @returns {Object} List of ToDo items
   */
  getAllRecipes: async () => {
    return new Promise((resolve, reject) => {
      resolve(getRecipeList());
    });
  },
  /**
   * Creation of new recipe item
   * @param {Object} recipe Object consisting of all recipe information to save
   * @param {function} callback Response handler
   * @param {function} errback Error handler
   */
  submit: async (recipe, callback, errback) => {
    return new Promise((resolve, reject) => {
      let recipes = getRecipeList();
      recipes = [...recipes, recipe.recipe];
      storage.setItem('recipes', JSON.stringify(recipes));
      resolve(recipe.recipe);
    })
    .then(res => { callback && callback(res); })
    .catch(error => { errback && errback(error); });
  },
  /**
   * Deletion of Recipe item
   * @param {String} id The id of the item to delete
   * @param {function} callback Response handler
   * @param {function} errback Error handler
   */
  remove: async (id, callback, errback) => {
    return new Promise((resolve, reject) => {
      let recipes = getRecipeList();
      let recipeToRemove = recipes.findIndex(recipe => recipe._id === id);
      if (recipeToRemove === -1)
        reject(new Error('ID not found'));

      let removed = recipes.splice(recipeToRemove, 1);
      storage.setItem('recipes', JSON.stringify(recipes));
      resolve(removed[0]);
    })
    .then(res => { callback && callback(res); })
    .catch(error => { errback && errback(error); });
  },
  /**
   * Updating of a Recipe item
   * @param {Object} recipe The id of the item to delete
   * @param {function} callback Response handler
   * @param {function} errback Error handler
   */
   edit: async (recipe, callback, errback) => {
    return new Promise((resolve, reject) => {
      let recipes = getRecipeList();
      let recipeToEdit = recipes.findIndex(editRecipe => editRecipe._id === recipe.recipe._id);
      if (recipeToEdit === -1)
        reject(new Error('ID not found'));

      recipes[recipeToEdit] = recipe.recipe;
      storage.setItem('recipes', JSON.stringify(recipes));
      resolve(recipe.recipe);
    })
    .then(res => { callback && callback(res); })
    .catch(error => { errback && errback(error); });
  },
};

export default recipeDelegate;