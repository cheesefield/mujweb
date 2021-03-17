import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import FadeLoader from "react-spinners/FadeLoader";
import { css } from "@emotion/core";
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

const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-15%, -25%);
`;

function App() {
  const [loading, setLoading] = useState(false);
  const [language, setLanguage] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <FadeLoader
          color={"#333"}
          loading={loading}
          css={override}
          height={25}
          width={7}
          radius={5}
          margin={6}
        />
      ) : (
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
      )}
    </div>
  );
}

export default App;
