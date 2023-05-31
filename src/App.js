import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import VideoCard from './components/VideoCard/VideoCard';
import Index from './layouts/Index';
import User from './layouts/User';
import UserVideo from './layouts/UserVideo/UserVideo';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={ <Index /> } />        
          <Route path="/user/:username" exact element={ <User /> } />   
          <Route path="/user/videos/:username" exact element={ <UserVideo /> } />   
        </Routes>
      </Router>
    </div>
  );
}

export default App;
