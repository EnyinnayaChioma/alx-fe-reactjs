import useRecipeStore from '../stores/recipeStore';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  
  return (
    <div className="recommendations-section">
      <h2>🌟 Recommended For You</h2>
      {recommendations && recommendations.length > 0 ? (
        <div className="recipe-grid">
          {recommendations.map(recipe => (
            <div key={recipe.id} className="recipe-card">
              <h3>{recipe.title}</h3>
              <p>{recipe.description.substring(0, 100)}...</p>
              <div className="recipe-meta">
                <span>🕒 {recipe.preparationTime} mins</span>
                <span>🥕 {recipe.ingredients.length} ingredients</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-state">
          Add some favorites to get personalized recommendations!
        </p>
      )}
    </div>
  );
};

export default RecommendationsList;