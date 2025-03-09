import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "login", element: <Login /> },
      {
        path: "profile",
        element: <ProtectedRoute><Profile /></ProtectedRoute>,
        children: [
          // Nested routes here
        ]
      }
    ]
  }
]);

// App component
function App() {
  return <RouterProvider router={router} />;
}

export default App;