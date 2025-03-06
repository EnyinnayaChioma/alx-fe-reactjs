import { useParams, Link } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore(state => 
    state.recipes.find(r => r.id === Number(recipeId))
  );

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>
      <div className="action-buttons">
        <Link to={`/edit/${recipe.id}`} className="edit-button">
          Edit Recipe
        </Link>
        <DeleteRecipeButton recipeId={recipe.id} />
      </div>
    </div>
  );
};

export default RecipeDetails;