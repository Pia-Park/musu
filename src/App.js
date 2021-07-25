import { useState, useEffect } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import About from "./components/About";
import { getBaseProducts } from "./api/baseAPI";
import { getInstaImages } from "./api/instagramAPI"

function App() {
  const [items, setItems] = useState();
  const [insta, setInsta] = useState();

  useEffect(() => {
    const getItems = async () => {
      const resItems = await getBaseProducts();
      setItems(resItems['data']);
    };

    const getInsta = async () => {
       const res = await getInstaImages()
       setInsta(res)
    }
    getItems();
    getInsta();
  }, []);

  console.log("items", items)
  console.log("insta", insta)

  return (
    <div className="App">

      <Navbar/>
      <HeroSection/>
      <About/>
      <Shop/>
      <Footer/>
      <header className="App-header"></header>
    </div>
  );
}

export default App;
