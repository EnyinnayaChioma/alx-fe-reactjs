import { useState, useEffect } from "react";
import recipeData from "../data.json";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    // Add error handling
    try {
      setRecipes(recipeData);
    } catch (error) {
      console.error("Error loading recipes:", error);
    }
  }, []);

  return (
    <div className="container mx-auto px-4 py-8">
     
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Delicious Recipes</h1>
        <Link
          to="/add-recipe"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Add Recipe
        </Link>
      </div>
      {recipes?.length > 0 ? (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recipes.map((recipe) => (
            <article
              key={recipe.id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl"
            >
              <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold mb-3">{recipe.title}</h2>
                <p className="text-gray-600 mb-4">{recipe.summary}</p>
                <Link
                  to={`/recipe/${recipe.id}`}
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  View Recipe →
                </Link>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default HomePage;
