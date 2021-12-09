import './App.css';

import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar"
import Quiz from './components/Quiz';
import Home from './components/Home';

function App() {
  return (
   
      <Router>
      <NavBar/>
      
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='Quiz' element={<Quiz />} />
        
        </Routes>
      </Router>
   
  );
}
export default App; 