
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import {Container} from 'react-bootstrap';
import NavBar from "./components/NavBar";
import HomePageBanner from './components/HomePageBanner';

function App() {
  return (
    <Container>
      <NavBar/>
      <HomePageBanner/>
    </Container>
  );
}

export default App;
