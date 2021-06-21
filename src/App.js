import { useState, useEffect, createContext } from "react";

import "./App.css";
import { setAccessToken } from "./api/commonAPI";
import Instagram from "./components/Instagram";

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
      <header className="App-header"></header>
      <TokenContext.Provider value={tokens}>
        <Instagram />
      </TokenContext.Provider>
    </div>
  );
}

export default App;
