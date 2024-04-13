import Header from "./componets/Header/Header";
import Hero from "./componets/Hero/Hero";
import './App.css';
import Companies from "./componets/Companies/Companies";
import Residencies from "./componets/Residencies/Residencies";
import Value from "./componets/Value/Value";
import Contact from "./componets/Contact/Contact";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"></div>
        <Header></Header>
        <Hero></Hero>
      </div>
      <Companies></Companies>
      <Residencies></Residencies>
      <Value></Value>
      <Contact></Contact>
    </div>
  );
}

export default App
