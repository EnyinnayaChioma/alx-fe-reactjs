import { useRecipeStore } from '../store/recipeStore';

const RecipeDetails = ({ recipeId }) => {
  // Find the specific recipe
  const recipe = useRecipeStore(state =>
    state.recipes.find(r => r.id === recipeId)
  );
  
  // Get delete action from store
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);

  if (!recipe) return <div>Recipe not found! 🥺</div>;

  return (
    <div className="recipe-details">
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      
      <div className="actions">
        {/* We'll create EditRecipeForm next */}
        <button onClick={() => deleteRecipe(recipe.id)}>
          Delete Recipe 🗑️
        </button>
      </div>
    </div>
  );
};


export default RecipeDetails;