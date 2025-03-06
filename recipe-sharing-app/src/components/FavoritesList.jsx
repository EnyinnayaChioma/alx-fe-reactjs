import useRecipeStore from '../stores/recipeStore';

const FavoritesList = () => {
  const { favorites, recipes, toggleFavorite } = useRecipeStore();
  const favoriteRecipes = recipes.filter(recipe => favorites.includes(recipe.id));

  return (
    <div className="favorites-section">
      <h2>❤️ My Favorite Recipes</h2>
      {favoriteRecipes.length > 0 ? (
        <div className="recipe-grid">
          {favoriteRecipes.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <button 
                onClick={() => toggleFavorite(recipe.id)}
                className="heart-button active"
              >
                ♥
              </button>
              {/* Rest of recipe card */}
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-state">No favorites yet! Start adding some delicious recipes.</p>
      )}
    </div>
  );
};

export default FavoritesList;