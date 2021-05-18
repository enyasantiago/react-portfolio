import React from "react";
import Header from "../components/Header";
import BootstrapNavbar from "../components/BootstrapNavbar";
import Portfolio from "../components/Portfolio";
import Footer from "../components/Footer";



function PortfolioPage() {
  return (
    <>
    <Header/>
    <BootstrapNavbar/>
    <div class="container-fluid" id="portfolio">
    <Portfolio/>
    </div>
    <Footer/>
   
    </>   
  );
}
export default PortfolioPage;