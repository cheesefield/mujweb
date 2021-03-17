import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
// components
import Nav from "./components/Nav";
import Footer from "./components/Footer";
// pages
import Domu from "./pages/Domu";
import DenniMenu from "./pages/DenniMenu";
import StalaNabidka from "./pages/StalaNabidka";
import Kontakt from "./pages/Kontakt";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/denni_menu">
            <DenniMenu />
          </Route>
          <Route exact path="/stala_nabidka">
            <StalaNabidka />
          </Route>
          <Route exact path="/">
            <Domu />
          </Route>
          <Route exact path="/kontakt">
            <Kontakt />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
