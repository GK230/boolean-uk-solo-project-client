import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";
import Home from "./pages/Home"
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div>

      <Header/>

        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>


      </div>

    </Router>
    
  );
}

export default App;
