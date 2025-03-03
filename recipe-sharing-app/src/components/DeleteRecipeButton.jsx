import { useRecipeStore } from '../store/recipeStore';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  
  return (
    <button 
      onClick={() => {
        if (window.confirm('Delete this recipe forever? 😱')) {
          deleteRecipe(recipeId);
        }
      }}
      className="delete-button"
    >
      🗑️ Delete
    </button>
  );
};


export default DeleteRecipeButton;