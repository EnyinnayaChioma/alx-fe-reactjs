import { useState } from 'react';
import useRecipeStore from '../stores/recipeStore';

const AddRecipeForm = () => {
  const addRecipe = useRecipeStore(state => state.addRecipe);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    ingredients: '',
    preparationTime: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addRecipe({
      ...formData,
      ingredients: formData.ingredients.split(',').map(i => i.trim()),
      preparationTime: parseInt(formData.preparationTime, 10)
    });
    setFormData({
      title: '',
      description: '',
      ingredients: '',
      preparationTime: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="recipe-form">
      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
        placeholder="Recipe Title"
        required
      />
      <textarea
        value={formData.description}
        onChange={(e) => setFormData({...formData, description: e.target.value})}
        placeholder="Description"
        required
      />
      <textarea
        value={formData.ingredients}
        onChange={(e) => setFormData({...formData, ingredients: e.target.value})}
        placeholder="Ingredients (comma-separated)"
        required
      />
      <input
        type="number"
        value={formData.preparationTime}
        onChange={(e) => setFormData({...formData, preparationTime: e.target.value})}
        placeholder="Preparation Time (minutes)"
        required
      />
      <button type="submit" className="primary-button">
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;