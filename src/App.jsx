import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { auth } from './firebase';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Users from './pages/Users';
import Report from './pages/Report';
import Chatbot from './pages/Chatbot';
import History from './pages/History';
import SignUp from './components/SignUp';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUserToken = localStorage.getItem('userToken');
    
    // If token is found in localStorage, set it to user state directly
    if (storedUserToken && !user) {
      setUser({ uid: storedUserToken });
    }

    // Listen for auth state changes
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        localStorage.setItem('userToken', currentUser.uid); // Save user ID to localStorage
      } else {
        setUser(null);
        localStorage.removeItem('userToken'); // Remove token if logged out
      }
    });

    return unsubscribe;
  }, [user]);

  // Component to protect routes that require authentication
  const ProtectedRoute = ({ children }) => {
    // Check if user is logged in (either in state or via token in localStorage)
    const isAuthenticated = user || localStorage.getItem('userToken');
    return isAuthenticated ? children : <Navigate to="/login" />;
  };

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/daftar" element={<SignUp />} />
        <Route
          path="/users"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
        <Route
          path="/lapor"
          element={
            <ProtectedRoute>
              <Report />
            </ProtectedRoute>
          }
        />
        <Route path="/chatbot" element={<Chatbot />} /> 
        <Route
          path="/riwayat"
          element={
            <ProtectedRoute>
              <History />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
