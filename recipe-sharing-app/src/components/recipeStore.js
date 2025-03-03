import { create } from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  // Existing addRecipe
  setRecipes: (newRecipe) => set(state => ({ 
    recipes: [...state.recipes, newRecipe] 
  })),
  
  // New actions 🆕
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),
  
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  }))
}));

export default useRecipeStore;