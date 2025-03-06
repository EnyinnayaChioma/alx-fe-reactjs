import { Link } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);

  return (
    <div className="recipe-grid">
      {filteredRecipes.map(recipe => (
        <div key={recipe.id} className="recipe-card">
          <Link to={`/recipes/${recipe.id}`}>
            <h3>{recipe.title}</h3>
          </Link>
          <div className="recipe-meta">
            <span>🕒 {recipe.preparationTime} mins</span>
            <span>🥕 {recipe.ingredients.length} ingredients</span>
          </div>
          <p className="recipe-description">
            {recipe.description.substring(0, 100)}...
          </p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;