import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';

const EditRecipeForm = (event) => {
  event.preventDefault();
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const recipe = useRecipeStore(state => 
    state.recipes.find(r => r.id === Number(recipeId))
  );
  const updateRecipe = useRecipeStore(state => state.updateRecipe);
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title);
      setDescription(recipe.description);
    }
  }, [recipe]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRecipe({
      id: Number(recipeId),
      title,
      description
    });
    navigate(`/recipes/${recipeId}`);
  };

  if (!recipe) return <div>Recipe not found</div>;

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        required
      />
      <button type="submit">Update Recipe</button>
    </form>
  );
};

export default EditRecipeForm;