
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import {Container} from 'react-bootstrap';
import NavBar from "./components/NavBar";
import HomePageBanner from './components/HomePageBanner';
// {/* {I need to delete Detail↓} */}
import Detail from "./components/Detail";

function App() {
  return (
    <Container>
      <NavBar/>
      <HomePageBanner/>
      {/* {I need to delete Detail↓} */}
      <Detail/>
    </Container>
  );
}

export default App;
