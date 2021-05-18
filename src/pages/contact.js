import React from "react";
import "../App.css";
import Header from "../components/Header";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import BootstrapNavbar from "../components/BootstrapNavbar";




function ContactPage() {
  return (
    <>
    <Header/>
    <BootstrapNavbar/>,
    <Contact/>
    <Footer/>
  
    </>   
  );
}
export default ContactPage;