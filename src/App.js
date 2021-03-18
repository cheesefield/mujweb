import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ReactDOM from "react-dom";
import "./App.css";
// Components
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import ScrollToTop from "./components/scrollToTop";
// Pages CZ
import Domů from "./pages/Domů";
import O_mne from "./pages/O_mne";
import Projekty from "./pages/Projekty";
import Kontakt from "./pages/Kontakt";
import ErrorPage from "./pages/ErrorPage";
// Pages EN
import Home from "./pages/en/Home";
import About from "./pages/en/About";
import Projects from "./pages/en/Projects";
import Contact from "./pages/en/Contact";

const loader = document.querySelector(".loader");
const hideLoader = () => loader.classList.add("loader--hide");

function App({ hideLoader }) {
  const [language, setLanguage] = useState(false);
  useEffect(hideLoader, [hideLoader]);

  return (
    <div className="App">
      <Router>
        <ScrollToTop />
        <Nav setLanguage={setLanguage} language={language} />
        <Switch>
          <Route exact path="/" component={Domů} />
          <Route exact path="/domu" component={Domů} />
          <Route exact path="/o_mne" component={O_mne} />
          <Route exact path="/projekty" component={Projekty} />
          <Route exact path="/kontakt" component={Kontakt} />
          <Route exact path="/en" component={Home} />
          <Route exact path="/en/home" component={Home} />
          <Route exact path="/en/about" component={About} />
          <Route exact path="/en/projects" component={Projects} />
          <Route exact path="/en/contact" component={Contact} />
          <Route
            path="*"
            component={ErrorPage}
            setLanguage={setLanguage}
            language={language}
          />
        </Switch>
        <Footer language={language} />
      </Router>
    </div>
  );
}

setTimeout(
  () =>
    // the show/hide functions are passed as props
    ReactDOM.render(
      <App hideLoader={hideLoader} />,
      document.getElementById("app")
    ),
  1000
);

export default App;
