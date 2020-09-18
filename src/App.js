import React from 'react';
import './App.css';
import Index from './Home/Index';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Index}></Route>
      </Switch>
    </Router>
  );
}

export default App;