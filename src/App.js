
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Container} from 'react-bootstrap';
import NavBar from "./components/NavBar";
import {PlacesProvider} from './context/PlacesContext';
import HomePage from './components/HomePage';

function App() {
  return (
    <PlacesProvider>
      <Router>
        <Container>
          <NavBar/>
          <Switch>
            <Route path="/">
              <HomePage/>
            </Route>
          </Switch>
        </Container>
      </Router>
    </PlacesProvider>
  );
}

export default App;
