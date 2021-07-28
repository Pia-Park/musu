import { useState, useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Shop />
      <Contact/>
      <Footer />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
