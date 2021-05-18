import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
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
                        <Router>
                            <Navbar bg="white" variant="light" expand="lg" >
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="mr-auto">
                                    <Nav.Link href="../../about">About</Nav.Link>
                                    <Nav.Link href="../../contact">Contact</Nav.Link>
                                    <Nav.Link href="../../portfolio">Portfolio</Nav.Link>
                                    
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                            <br />
                            <Switch>
                                <Route exact path="../../pages/about">
                                    <About/>
                                </Route>
                                <Route path="../../pages/contact">
                                    <ContactPage/>
                                </Route>
                                <Route path="../../pages/portfolio">
                                    <PortfolioPage/>
                                </Route>
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        )  
    }
}

export default BootstrapNavbar;