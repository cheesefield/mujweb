import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

function Domů() {
  return (
    <div>
      <Helmet>
        <title>CheeseField</title>
        <meta
          name="description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta property="og:url" content="http://www.cheesefield.4fan.cz/" />
        <meta property="og:title" content="Domů • CheeseField" />
        <meta
          property="og:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta property="og:image" content="images/share.png" />
        <meta name="og:locale" content="cs_CZ" />
        <meta name="og:type" content="website" />
        <meta name="twitter:title" content="Domů • CheeseField" />
        <meta
          name="twitter:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta name="twitter:image" content="images/share.png" />
      </Helmet>
      <main>
        <section id="home-page">
          <h1>Ahoj, jsem Dominik</h1>
          <h2>Vítej na mé stránce</h2>
          <h3>Vytvářím webové stránky pomocí HTML, CSS a Javascriptu.</h3>
          <div id="images">
            <div className="container">
              <img src="images/seznam_ukolu.png" alt="Seznam Úkolů" />
              <div className="details">
                <h3>Seznam úkolů</h3>
                <p>
                  Seznam úkolů si zapamatuje všechny vaše povinnosti a vy už tak
                  nezapomenete na žádný úkol.
                </p>
                <a href="projekty/seznam_ukolu" target="_blank">
                  <h3 className="button">Klikni zde</h3>
                </a>
              </div>
            </div>
            <div className="container">
              <img src="images/kurzovni_listek.png" alt="Kurzovní lístek" />
              <div className="details">
                <h3>Kurzovní lístek</h3>
                <p>
                  Potřebujete vyměnit peníze a chcete předem přesně vědět, kolik
                  při aktuálním kurzu dostanete?
                </p>
                <a href="projekty/kurzovni_listek" target="_blank">
                  <h3 className="button">Klikni zde</h3>
                </a>
              </div>
            </div>
            <div className="container">
              <img src="images/cesta_dolu.png" alt="Cesta dolů" />
              <div className="details">
                <h3>Cesta dolů</h3>
                <p>
                  Ovládáte šedou kouli, která se pohybuje na každé platformě,
                  dokud nespadnete skrz díru.
                </p>
                <a href="projekty/cesta_dolu" target="_blank">
                  <h3 className="button">Klikni zde</h3>
                </a>
              </div>
            </div>
          </div>
          <NavLink to="/o_mne">
            <h3 className="home-button">Zjisti víc o Dominikovi</h3>
          </NavLink>
          <NavLink to="/projekty">
            <h3 className="home-button">Klikni zde pro hraní her</h3>
          </NavLink>
          <a
            href="https://t.me/joinchat/VFZHryJ-FXFSwTR-"
            target="_blank"
            rel="noreferrer"
          >
            <h3 className="home-button">Připojte se k naší Telegram skupině</h3>
          </a>
        </section>
      </main>
    </div>
  );
}

export default Domů;
