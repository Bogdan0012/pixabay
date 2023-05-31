import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Index from './layouts/Index';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={ <Index /> } />        
        </Routes>
      </Router>
    </div>
  );
}

export default App;
