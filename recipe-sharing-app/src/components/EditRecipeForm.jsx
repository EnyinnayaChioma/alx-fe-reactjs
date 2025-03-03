import { useState } from 'react';
import { useRecipeStore } from '../store/recipeStore';

const EditRecipeForm = ({ recipeId }) => {
  const recipe = useRecipeStore(state => 
    state.recipes.find(r => r.id === recipeId)
  );
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  
  // Initialize form with current recipe values
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({
      ...recipe, // Keep existing properties
      title,
      description
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Save Changes 💾</button>
    </form>
  );
};

export default EditRecipeForm;