import React from "react";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";
import About from "./Components/About";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div id="container">
      <NavBar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/about">
          <About />
        </Route>
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
