import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route exact path="/cats" component={ Home } />
      </Switch>
    </div>
  );
}

export default App;
