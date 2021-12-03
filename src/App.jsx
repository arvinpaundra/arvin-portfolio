import React from 'react';
import Profile from './components/Profile/Profile';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Profile />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
