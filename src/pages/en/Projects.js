import React from "react";
import { Helmet } from "react-helmet";

function Projects() {
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
        <title>Projects • CheeseField</title>
        <meta
          name="description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta property="og:url" content="http://www.cheesefield.4fan.cz/" />
        <meta property="og:title" content="Projects • CheeseField" />
        <meta
          property="og:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta property="og:image" content="../images/share.png" />
        <meta name="og:locale" content="cs_CZ" />
        <meta name="og:type" content="website" />
        <meta name="twitter:title" content="Projects • CheeseField" />
        <meta
          name="twitter:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta name="twitter:image" content="../images/share.png" />
      </Helmet>
      <main>
        <div id="row200">
          <section className="projects">
            <ul
              style={{
                listStyle: "none",
              }}
            >
              <h2>HTML</h2>
              <li>
                <a href="/zoo" title="Zoo" target="_blank">
                  Zoo
                </a>
              </li>
              <li>
                <a href="/opakovani" title="Repetition" target="_blank">
                  Repetition
                </a>
              </li>
              <li>
                <a href="/obrazova_mapa" title="Image map" target="_blank">
                  Image map
                </a>
              </li>
              <li>
                <a href="/obrazova_mapa_2" title="Image map 2" target="_blank">
                  Image map 2
                </a>
              </li>
              <li>
                <a href="/tabulka" title="Table" target="_blank">
                  Table
                </a>
              </li>
              <li>
                <a href="/tabulka_2" title="Table 2" target="_blank">
                  Table 2
                </a>
              </li>
              <li>
                <a href="/zvirata" title="Animals" target="_blank">
                  Animals
                </a>
              </li>
              <li>
                <a href="/hardware" title="Hardware" target="_blank">
                  Hardware
                </a>
              </li>
            </ul>
          </section>
          <section className="projects">
            <ul
              style={{
                listStyle: "none",
              }}
            >
              <h2>HTML 2</h2>
              <li>
                <a
                  href="/dvousloupcovy_layout"
                  title="Two-column layout"
                  target="_blank"
                >
                  Two-column layout
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div id="row200">
          <section className="projects">
            <ul
              style={{
                listStyle: "none",
              }}
            >
              <h2>Javascript</h2>
              <li>
                <a href="/seznam_ukolu" title="To do list" target="_blank">
                  To do list
                </a>
              </li>
              <li>
                <a
                  href="/kurzovni_listek"
                  title="Currency Converter"
                  target="_blank"
                >
                  Currency Converter
                </a>
              </li>
              <li>
                <a
                  href="/soucet_cisel"
                  title="Sum of the digits"
                  target="_blank"
                >
                  Sum of the digits
                </a>
              </li>
              <li>
                <a href="/ciferny_soucet" title="Digit sum" target="_blank">
                  Digit sum
                </a>
              </li>
            </ul>
          </section>
          <section className="projects">
            <h2>Games</h2>
            <ul
              style={{
                listStyle: "none",
              }}
            >
              <li>
                <a
                  href="/kamen_nuzky_papir_tapir_spock"
                  title="Rock, paper, scissors, lizard, spock"
                  target="_blank"
                >
                  Rock, paper, scissors, lizard, spock
                </a>
              </li>
              <li>
                <a href="/had" title="Snake" target="_blank">
                  Snake
                </a>
              </li>
              <li>
                <a href="/cesta_dolu" title="Fall Game" target="_blank">
                  Fall Game
                </a>
              </li>
              <li>
                <a href="/slide_in" title="Slide in" target="_blank">
                  Slide in
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Projects;
