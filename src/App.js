import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortofolioList from "./components/PortofolioList";
import About from "./components/About";
function App() {
  return (
    <div id="page-top">
      <Navbar />
      <Hero />
      <PortofolioList />
      <About />
    </div>
  );
}

export default App;
