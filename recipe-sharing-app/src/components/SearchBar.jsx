import { create } from 'zustand';

const useRecipeStore = create((set, get) => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set({ searchTerm: term }),
  
  // Computed filtered recipes
  get filteredRecipes() {
    const { recipes, searchTerm } = get();
    if (!searchTerm.trim()) return recipes;
    
    const lowerSearch = searchTerm.toLowerCase();
    return recipes.filter(recipe => {
      const titleMatch = recipe.title.toLowerCase().includes(lowerSearch);
      const ingredientMatch = recipe.ingredients.some(ingredient =>
        ingredient.toLowerCase().includes(lowerSearch)
      );
      const timeMatch = recipe.preparationTime.toString().includes(searchTerm);
      
      return titleMatch || ingredientMatch || timeMatch;
    });
  },

  // Existing actions
  addRecipe: (newRecipe) => set(state => ({ 
    recipes: [...state.recipes, { ...newRecipe, id: Date.now() }] 
  })),
  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== id)
  })),
  updateRecipe: (updated) => set(state => ({
    recipes: state.recipes.map(recipe => 
      recipe.id === updated.id ? updated : recipe
    )
  }))
}));

export default useRecipeStore;