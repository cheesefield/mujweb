import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

function Home() {
  return (
    <div>
      <Helmet>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../favicon/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="../favicon/manifest.json" />
        <link rel="shortcut icon" href="../favicon/logo.ico" />
        <title>CheeseField</title>
        <meta
          name="description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta property="og:url" content="http://www.cheesefield.4fan.cz/" />
        <meta property="og:title" content="CheeseField" />
        <meta
          property="og:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta property="og:image" content="../images/share.png" />
        <meta name="og:locale" content="cs_CZ" />
        <meta name="og:type" content="website" />
        <meta name="twitter:title" content="CheeseField" />
        <meta
          name="twitter:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta name="twitter:image" content="../images/share.png" />
      </Helmet>
      <main>
        <section id="home-page">
          <h1>Hi, I'm Dominik</h1>
          <h2>Welcome to my Website</h2>
          <h3>I create websites with HTML, CSS and Javascript.</h3>
          <div id="images">
            <div class="container">
              <img src="/images/seznam_ukolu.png" alt="To do list" />
              <div class="details">
                <h3>To do list</h3>
                <p>
                  The To do list remembers all your responsibilities and you
                  will not forget any task.
                </p>
                <a href="/seznam_ukolu" target="_blank" rel="noreferrer">
                  <h3 class="button">Click here</h3>
                </a>
              </div>
            </div>
            <div class="container">
              <img src="/images/kurzovni_listek.png" alt="Currency Converter" />
              <div class="details">
                <h3>Currency Converter</h3>
                <p>
                  Do you need to know how much you will receive at the current
                  rate if u going to exchange money?
                </p>
                <a href="/kurzovni_listek" target="_blank" rel="noreferrer">
                  <h3 class="button">Click here</h3>
                </a>
              </div>
            </div>
            <div class="container">
              <img src="/images/cesta_dolu.png" alt="Fall Game" />
              <div class="details">
                <h3>Fall Game</h3>
                <p>
                  You control a grey ball which moves lands on each platform
                  until you fall through the hole.
                </p>
                <a href="/cesta_dolu" target="_blank" rel="noreferrer">
                  <h3 class="button">Click here</h3>
                </a>
              </div>
            </div>
          </div>
          <NavLink to="/en/about">
            <h3 class="home-button">Learn more about Dominik</h3>
          </NavLink>
          <NavLink to="/en/projects">
            <h3 class="home-button">Click here to play games</h3>
          </NavLink>
          <a
            href="https://t.me/joinchat/VFZHryJ-FXFSwTR-"
            target="_blank"
            rel="noreferrer"
          >
            <h3 class="home-button">Join our Telegram group</h3>
          </a>
        </section>
      </main>
    </div>
  );
}

export default Home;
