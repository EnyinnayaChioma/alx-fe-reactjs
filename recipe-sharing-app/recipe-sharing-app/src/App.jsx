import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <h1>🍳 Recipe Sharing App</h1>
      <div>
      <AddRecipeForm />
      </div>
      <RecipeList />
    </div>
  );
}

export default App;