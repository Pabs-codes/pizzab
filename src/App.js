import "./App.css";
import Home from "./Components/Home";
// import About from "./Components/About";
// import Work from "./Components/Work";
// import Testimonial from "./Components/Testimonial";
// import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import TopBar from "./Components/TopBar";
import SixCards from "./Components/SixCards";
import Menuu from "./Components/Menuu";

import { BrowserRouter as Router } from "react-router-dom";
import GifDiv from "./Components/gifdiv";

function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <Home />
        <Menuu />
        <GifDiv/>
        <SixCards/>
        {/* <About />
        <Work />
        <Testimonial />
        <Contact /> */}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
