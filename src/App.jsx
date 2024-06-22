import "./App.css";
import About from "./components/About/About";
import Hero from "./components/Hero/Hero";
import Product from "./components/Product/Product";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <div>
        <Hero />
        <About />
        <Product />
        <Footer />
      </div>
    </>
  );
};

export default App;
