import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import MainPage from './MainPage';
import JavaScriptPage from './JavaScriptPage';
import Header from "./Header";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route path="/javascript" element={<JavaScriptPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
