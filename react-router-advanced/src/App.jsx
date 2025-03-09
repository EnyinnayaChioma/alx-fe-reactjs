import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom'
import { Home, About, Login, Profile, ProfileDetails, ProfileSettings, BlogPost } from './pages'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link> | 
        <Link to="/about">About</Link> | 
        <Link to="/profile">Profile</Link> |
        <Link to="/blog/1">Blog Post 1</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        
        <Route path="/profile" element={<ProtectedRoute><Outlet /></ProtectedRoute>}>
          <Route index element={<Profile />} />
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>

        <Route path="/blog/:postId" element={<BlogPost />} />
      </Routes>
    </Router>
  )
}

export default App