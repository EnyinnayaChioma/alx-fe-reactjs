// src/components/RecipeDetail.jsx
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    try {
      const selectedRecipe = recipeData.find(r => r.id === parseInt(id));
      setRecipe(selectedRecipe);
    } catch (error) {
      console.error("Error loading recipe:", error);
    }
  }, [id]);

  if (!recipe) return <div className="text-center py-8">Recipe not found</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      {/* Recipe Image */}
      <img 
        src={recipe.image} 
        alt={recipe.title} 
        className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
      />

      {/* Recipe Title */}
      <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-4 text-gray-800">
        {recipe.title}
      </h1>

      {/* Summary */}
      <p className="text-gray-600 text-lg mb-8">
        {recipe.summary}
      </p>

      {/* Ingredients & Instructions Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Ingredients Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Ingredients</h2>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
        </div>

        {/* Instructions Card */}
        <div className=" instructions bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Instructions</h2>
          <ol className="list-decimal pl-5 space-y-4 text-gray-600">
            {recipe.steps.map((step, index) => (
              <li key={index} className="pb-2 border-b border-gray-100">
                {step}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;