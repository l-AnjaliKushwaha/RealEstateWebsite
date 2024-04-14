import Header from "./componets/Header/Header";
import Hero from "./componets/Hero/Hero";
import './App.css';
import Companies from "./componets/Companies/Companies";
import Residencies from "./componets/Residencies/Residencies";
import Value from "./componets/Value/Value";
import Contact from "./componets/Contact/Contact";
import GetStarted from "./componets/GetStarted/GetStarted";
import Footer from "./componets/Footer/Footer";

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
      <GetStarted></GetStarted>
      <Footer></Footer>
    </div>
  );
}

export default App
