import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Events from "./components/events/Events"
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Events}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
