import Header from "./componets/Header/Header";
import Hero from "./componets/Hero/Hero";
import './App.css';
import Companies from "./componets/Companies/Companies";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header></Header>
        <Hero></Hero>
      </div>
      <Companies></Companies>
    </div>
  );
}

export default App
