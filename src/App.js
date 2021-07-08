import { useState, useEffect, createContext } from "react";

import "./App.css";
import { setAccessToken } from "./api/commonAPI";
import Instagram from "./components/Instagram";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";

export const TokenContext = createContext();

function App() {
  const [tokens, setTokens] = useState();

  useEffect(() => {
    // Get Instagram access token and BASE access token
    const getTokens = async () => {
      const [instaToken, baseToken] = await setAccessToken();
      setTokens([instaToken, baseToken]);
    };
    getTokens();
  }, []);

  return (
    <div className="App">
      <Navbar/>
      <HeroSection/>
      <Footer/>
      <header className="App-header"></header>
      <TokenContext.Provider value={tokens}>
      </TokenContext.Provider>
    </div>
  );
}

export default App;
