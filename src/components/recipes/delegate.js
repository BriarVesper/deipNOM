const storage = localStorage;
const recipeDelegate = {

  /**
   * @returns {Object} List of ToDo items
   */
  getAllRecipes: async () => {
    return new Promise((resolve, reject) => {
      resolve(JSON.parse(localStorage.getItem('recipes')));
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
      let recipes = getAllRecipes();
      recipes = [...recipes, recipe];
      resolve(storage.setItem(JSON.stringify(recipes)));
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
      let recipes = getAllRecipes();
      let recipeToRemove = recipes.findIndex(recipe => recipe._id === id);
      if (recipeToRemove === -1)
        reject(new Error('ID not found'));

      recipes.splice(recipeToRemove, 1);
      resolve(storage.setItem('recipes', JSON.stringify(recipes)));
    })
    .then(res => { callback && callback(res); })
    .catch(error => { errback && errback(error); });
  },
  /**
   * Updating of a Recipe item
   * @param {String} recipe The id of the item to delete
   * @param {function} callback Response handler
   * @param {function} errback Error handler
   */
   edit: async (recipe, callback, errback) => {
    return new Promise((resolve, reject) => {
      let recipes = getAllRecipes();
      let recipeToEdit = recipes.findIndex(recipe => recipe._id === id);
      if (recipeToEdit === -1)
        reject(new Error('ID not found'));

      recipes[recipeToEdit] = recipe;
      resolve(storage.setItem('recipes', JSON.stringify(recipes)));
    })
    .then(res => { callback && callback(res); })
    .catch(error => { errback && errback(error); });
  },
};

export default recipeDelegate;