import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import { Home, About, Login, Profile, ProfileDetails, ProfileSettings, BlogPost } from './pages'
import ProtectedRoute from './components/ProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'login', element: <Login /> },
      {
        path: 'profile',
        element: <ProtectedRoute />,
        children: [
          { index: true, element: <Profile /> },
          { path: 'details', element: <ProfileDetails /> },
          { path: 'settings', element: <ProfileSettings /> },
        ]
      },
      { path: 'blog/:postId', element: <BlogPost /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)