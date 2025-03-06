import useRecipeStore from '../stores/recipeStore';
import RecipeList from './RecipeList';

const RecommendationsList = () => {
  const recommendations = useRecipeStore(state => state.recommendations);
  
  return (
    <div className="recommendations-section">
      <h2>🌟 Recommended For You</h2>
      {recommendations.length > 0 ? (
        <RecipeList recipes={recommendations} />
      ) : (
        <p className="empty-state">
          Add some favorites to get personalized recommendations!
        </p>
      )}
    </div>
  );
};