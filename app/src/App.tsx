import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { NavBar } from './components/navBar/NavBar'
import { Footer } from './components/footer/Footer'
import { UseOnboard } from './components/ethereum/onboard/UseOnboard'
import { About } from './components/public/about/About'
import CreateProject from './components/project/createProject/CreateProject'
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/project">
            <div> Single PRoject</div>
          </Route>

          <Route path="/projects">
            <div> Multple Projects </div>
          </Route>

          <Route path="/create">
            <CreateProject />
          </Route>




          <Route path="/">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
        </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
        </a>
            </header>
          </Route>

        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
