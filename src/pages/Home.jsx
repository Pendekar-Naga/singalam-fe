import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'; // Make sure this path points to your firebase config
import '../App.css';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Features from '../components/Features';
import Banner from '../components/Banner';
import Youtube from '../components/Youtube';
import Services from '../components/Services';
import Footer from '../components/Footer';
import Popup from '../components/Popup';

function Home() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen to the auth state changes to get the current user
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      setUser(null); // Clear user data after signing out
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <>
      <Popup />
      <Hero />
      <Features />
      <Banner />
      <Services />
      <Youtube />
      <Footer />
    </>
  );
}

export default Home;
