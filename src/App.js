import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import VideoCard from './components/VideoCard/VideoCard';
import Index from './layouts/Index';
import User from './layouts/User';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={ <Index /> } />        
          <Route path="/user/:username" exact element={ <User /> } />   
        </Routes>
      </Router>
    </div>
  );
}

export default App;
