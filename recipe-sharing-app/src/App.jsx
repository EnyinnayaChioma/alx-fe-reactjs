import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import './App.css';
// Install first: npm install react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home 🏠</Link>
      </nav>
      
      <Routes>
        <Route path="/" element={<>
          <AddRecipeForm />
          <RecipeList />
        </>} />
        
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/edit/:id" element={<EditRecipeForm />} />
      </Routes>
    </Router>
  );
}

export default App;