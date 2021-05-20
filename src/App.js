import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./pages/about";
import PortfolioPage from "./pages/portfolio";
import ContactPage from "./pages/contact";


function App() {
  return (
    <div className="App">
      <Router basename='/react-portfolio'>
      <Switch>
        <Route exact path={["/", "/about"]}>
          <About />
        </Route>
        <Route exact path={["/contact"]}>
          <ContactPage/>
        </Route>
        <Route exact path={["/portfolio"]}>
          <PortfolioPage />
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
