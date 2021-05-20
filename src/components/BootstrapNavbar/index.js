import React from 'react'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import { Navbar,Nav } from 'react-bootstrap'
  import About from '../../pages/about';
  import ContactPage from '../../pages/contact';
  import PortfolioPage from '../../pages/portfolio';

class BootstrapNavbar extends React.Component{

    render(){
        return(
            <div>
                <div className="row">
                    <div className="col-md-12 nav justify-content-center">
                            <Navbar bg="white" variant="light" expand="lg" >
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    {/* <Nav.Link href="../../about">About</Nav.Link>
                                    <Nav.Link href="../../contact">Contact</Nav.Link>
                                    <Nav.Link href="../../portfolio">Portfolio</Nav.Link> */}
                                    <Nav.Link as={Link} to="about">About</Nav.Link>
                                    <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                                    <Nav.Link as={Link} to="portfolio">Portfolio</Nav.Link>
                                    
                                    </Nav>
                                </Navbar.Collapse>
                            <br />
                        {/* <Router basename='/'>
                            <Switch>
                                 <Route exact path="/about">
                                    <About/>
                                </Route>
                                <Route path="/contact">
                                    <ContactPage/>
                                </Route>
                                <Route path="/portfolio">
                                    <PortfolioPage/>
                                </Route>
                            </Switch>
                        </Router> */}
                            </Navbar>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;