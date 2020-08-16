import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import PortofolioList from "./components/PortofolioList";
function App() {
  return (
    <div id="page-top">
      <Navbar />
      <Hero />
      <PortofolioList />
    </div>
  );
}

export default App;
