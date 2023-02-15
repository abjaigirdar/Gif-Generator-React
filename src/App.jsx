import React from 'react';
import Navbar from './components/Navbar';
import Tag from './components/Tag_V1';
import Footer from './components/Footer';
import './App.css';

function App() {

  return (
    <div className="App">
      <Navbar/>
      <div className="main-container">
      <Tag />
      <Footer/>
      </div>
    </div>
  );
}

export default App;
