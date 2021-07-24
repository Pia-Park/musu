import { useState, useEffect } from "react";

import "./App.css";
// import Instagram from "./components/Instagram";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import About from "./components/About";
import { getBaseProducts } from "./api/baseAPI";

function App() {
  const [items, setItems] = useState();

  useEffect(() => {
    const getItems = async () => {
      const resItems = await getBaseProducts();
      setItems(JSON.parse(resItems.data)["items"]);
    };

    getItems();
  }, []);

  console.log(items)

  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Footer />
      <header className="App-header"></header>
    </div>
  );
}

export default App;
