import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./Home";
import NavbarComponent from "./Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App-container">
          <NavbarComponent />
          <Routes>
            <Route exact element={<Home />} path="/" />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
