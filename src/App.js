import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* Add your routes here */}
      </div>
    </Router>
  );
}

export default App;
