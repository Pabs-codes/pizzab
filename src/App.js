import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import TopBar from "./Components/TopBar";

import Menuu from "./Components/Menuu";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Home />
        <Menuu />

        <About />
        <Work />
        <Testimonial />
        <Contact />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
