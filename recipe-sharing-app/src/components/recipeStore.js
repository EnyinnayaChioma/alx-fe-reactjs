import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  favorites: [],
  
  // Favorites actions
  toggleFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.includes(recipeId)
      ? state.favorites.filter(id => id !== recipeId)
      : [...state.favorites, recipeId]
  })),
  
  // Recommendations logic
  get recommendations() {
    const { recipes, favorites } = get();
    if (favorites.length === 0) return recipes.slice(0, 3); // Fallback to recent
    
    const favoriteIngredients = new Set(
      recipes.flatMap(recipe => 
        favorites.includes(recipe.id) ? recipe.ingredients : []
      )
    );
    
    return recipes
      .filter(recipe => !favorites.includes(recipe.id))
      .sort((a, b) => {
        const aMatches = a.ingredients.filter(ing => favoriteIngredients.has(ing)).length;
        const bMatches = b.ingredients.filter(ing => favoriteIngredients.has(ing)).length;
        return bMatches - aMatches;
      })
      .slice(0, 3);
  },

  // Existing actions with favorite cleanup
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id),
    favorites: state.favorites.filter(favId => favId !== id)
  })),
  
  // ... rest of existing actions
}));

export default useRecipeStore;