// src/components/AddRecipeForm.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!title.trim()) newErrors.title = 'Recipe title is required';
    if (!ingredients.trim()) newErrors.ingredients = 'Ingredients are required';
    if (!steps.trim()) newErrors.steps = 'Preparation steps are required';
    
    // Additional validation for minimum ingredients
    if (ingredients.trim().split('\n').filter(i => i.trim()).length < 2) {
      newErrors.ingredients = 'Please provide at least 2 ingredients';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Create new recipe object
    const newRecipe = {
      id: Date.now(), // Temporary ID
      title,
      ingredients: ingredients.split('\n').map(i => i.trim()),
      steps: steps.split('\n').map(s => s.trim()),
      image: 'https://via.placeholder.com/400x300' // Default image
    };

    // Here you would typically send to API
    console.log('New Recipe:', newRecipe);
    
    // Reset form
    setTitle('');
    setIngredients('');
    setSteps('');
    setErrors({});
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Add New Recipe</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title Input */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Recipe Title
              </label>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className={`w-full px-3 py-2 border ${
                  errors.title ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder="Enter recipe title..."
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">{errors.title}</p>
              )}
            </div>

            {/* Ingredients Input */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Ingredients (one per line)
              </label>
              <textarea
                value={ingredients}
                onChange={(e) => setIngredients(e.target.value)}
                className={`w-full px-3 py-2 border ${
                  errors.ingredients ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-32`}
                placeholder={`Example:\n2 cups flour\n1 tsp salt`}
              />
              {errors.ingredients && (
                <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
              )}
            </div>

            {/* Steps Input */}
            <div>
              <label className="block text-gray-700 text-sm font-semibold mb-2">
                Preparation Steps (one per line)
              </label>
              <textarea
                value={steps}
                onChange={(e) => setSteps(e.target.value)}
                className={`w-full px-3 py-2 border ${
                  errors.steps ? 'border-red-500' : 'border-gray-300'
                } rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 h-48`}
                placeholder={`Example:\nPreheat oven to 350°F\nMix dry ingredients`}
              />
              {errors.steps && (
                <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
              )}
            </div>

            {/* Form Actions */}
            <div className="flex flex-col md:flex-row gap-4 mt-8">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full md:w-auto"
              >
                Submit Recipe
              </button>
              <Link
                to="/"
                className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors text-center w-full md:w-auto"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddRecipeForm;