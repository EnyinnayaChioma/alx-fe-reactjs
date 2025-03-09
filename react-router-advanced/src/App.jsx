import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import Login from './components/Login';
import Profile from './components/Profile';
import ProfileDetails from './components/ProfileDetails';
import ProfileSettings from './components/ProfileSettings';
import Posts from './components/Posts';
import Post from './components/Post';
import ProtectedRoute from './components/ProtectedRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'login', element: <Login /> },
      {
        path: 'profile',
        element: <ProtectedRoute><Profile /></ProtectedRoute>,
        children: [
          { index: true, element: <ProfileDetails /> },
          { path: 'details', element: <ProfileDetails /> },
          { path: 'settings', element: <ProfileSettings /> },
        ],
      },
      { path: 'posts', element: <Posts /> },
      { path: 'posts/:postId', element: <Post /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;