import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import NavbarComponent from "./Navbar";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <NavbarComponent />
          <Routes>
            <Route exact element={<Home />} path="/" />
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
