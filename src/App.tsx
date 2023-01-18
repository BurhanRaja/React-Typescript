import "./App.css";
import HeroSlider from "./components/herosection/Slider";
import Header from "./components/navbar/Header";

// Ecommerce

// 1-Fashion
// 2-Electronics
// 3-Groceries

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSlider />
      {/* <Hero/> */}
    </div>
  );
}

export default App;
