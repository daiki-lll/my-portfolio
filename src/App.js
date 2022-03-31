import "./reset.css";
import './App.css';
import { BrowserRouter as Router, Route , Routes } from "react-router-dom";
import Nav from "./compornenets/Nav";
import Home from "./compornenets/Home";
import About from "./compornenets/About";
import Work from "./compornenets/Work";

function App() {
  return (
    <div className="App">
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
            
        <Route path="/about" element={<About />} />
          
        <Route path="/work" element={<Work />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
