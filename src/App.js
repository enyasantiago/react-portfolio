import React from "react";
import './App.css';
import Header from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Portfolio from "./components/Portfolio";


function App() {
  return (
    <>
    <Header/>,
    <Contact/>
    <div class="container-fluid" id="portfolio">
    <Portfolio/>
    </div>
    <Footer/>
    </>
    
  );

}

export default App;
