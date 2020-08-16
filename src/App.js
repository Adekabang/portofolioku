import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortofolioList from "./components/PortofolioList";
import About from "./components/About";
import Contact from "./components/Contact";
function App() {
  return (
    <div id="page-top">
      <Navbar />
      <Hero />
      <PortofolioList />
      <About />
      <Contact />
    </div>
  );
}

export default App;
