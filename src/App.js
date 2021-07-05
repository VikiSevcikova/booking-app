
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Detail from "./components/Detail";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Container} from 'react-bootstrap';
import NavBar from "./components/NavBar";
import {PlacesProvider} from './context/PlacesContext';
import {UserProvider} from './context/UserContext';
import HomePage from './components/HomePage';
import Alert from "./components/Alert";

function App() {
  return (
    <UserProvider>
    <PlacesProvider>
      <Router>
        <Container>
          <NavBar/>
          <Alert />
          <Switch>
            <Route exact path="/detail/:id">
            <Detail/>
            </Route>
            <Route exact path="/">
              <HomePage/>
            </Route>
          </Switch>
        </Container>
      </Router>
    </PlacesProvider>
    </UserProvider>
  );
}

export default App;
