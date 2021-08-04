import "./App.css";
import Navbar from "./containers/Navbar";
import HeroSection from "./containers/HeroSection";
import Shop from "./containers/Shop";
import Footer from "./containers/Footer";
import About from "./containers/About";
import Contact from "./containers/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <About />
      <Shop />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
