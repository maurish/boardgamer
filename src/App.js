import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './views/Home';
import Games from './views/Games';
import './App.css';

const App = () => (
  <Router>
    <div>
      <Header/>
      <Route path="/" exact component={Home}/>
      <Route path="/games" component={Games}/>
    </div>
  </Router>
);

export default App;
