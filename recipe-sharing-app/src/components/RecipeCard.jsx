import { Link } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';

const RecipeCard = ({ recipe }) => {
  const { toggleFavorite, favorites } = useRecipeStore();
  const isFavorite = favorites.includes(recipe.id);

  return (
    <div className="recipe-card">
      <button
        onClick={() => toggleFavorite(recipe.id)}
        className={`heart-button ${isFavorite ? 'active' : ''}`}
        aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
      >
        {isFavorite ? '♥' : '♡'}
      </button>
      
      <Link to={`/recipes/${recipe.id}`}>
        <h3>{recipe.title}</h3>
        <div className="recipe-meta">
          <span>🕒 {recipe.preparationTime} mins</span>
          <span>🥕 {recipe.ingredients.length} ingredients</span>
        </div>
        <p className="recipe-description">
          {recipe.description.substring(0, 100)}...
        </p>
      </Link>
    </div>
  );
};

export default RecipeCard;  