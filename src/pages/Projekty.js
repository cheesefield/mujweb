import React from "react";
import { Helmet } from "react-helmet";

function Projekty() {
  return (
    <div>
      <Helmet>
        <title>Projekty • CheeseField</title>
        <meta
          name="description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta property="og:url" content="http://www.cheesefield.4fan.cz/" />
        <meta property="og:title" content="Projekty • CheeseField" />
        <meta
          property="og:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta property="og:image" content="images/share.png" />
        <meta name="og:locale" content="cs_CZ" />
        <meta name="og:type" content="website" />
        <meta name="twitter:title" content="Projekty • CheeseField" />
        <meta
          name="twitter:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta name="twitter:image" content="images/share.png" />
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
                <a href="zoo" title="Zoo" target="_blank">
                  Zoo
                </a>
              </li>
              <li>
                <a href="opakovani" title="Opakování" target="_blank">
                  Opakování
                </a>
              </li>
              <li>
                <a href="obrazova_mapa" title="Obrazová mapa" target="_blank">
                  Obrazová mapa
                </a>
              </li>
              <li>
                <a
                  href="obrazova_mapa_2"
                  title="Obrazová mapa 2"
                  target="_blank"
                >
                  Obrazová mapa 2
                </a>
              </li>
              <li>
                <a href="tabulka" title="Tabulka" target="_blank">
                  Tabulka
                </a>
              </li>
              <li>
                <a href="tabulka_2" title="Tabulka 2" target="_blank">
                  Tabulka 2
                </a>
              </li>
              <li>
                <a href="zvirata" title="Zvířata" target="_blank">
                  Zvířata
                </a>
              </li>
              <li>
                <a href="hardware" title="Hardware" target="_blank">
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
                  href="dvousloupcovy_layout"
                  title="Dvousloupcový layout"
                  target="_blank"
                >
                  Dvousloupcový layout
                </a>
              </li>
            </ul>
          </section>
        </div>
        <div id="row200">
          <section className="projects" id="games">
            <ul
              style={{
                listStyle: "none",
              }}
            >
              <h2>Javascript</h2>
              <li>
                <a href="seznam_ukolu" title="Seznam úkolů" target="_blank">
                  Seznam úkolů
                </a>
              </li>
              <li>
                <a
                  href="kurzovni_listek"
                  title="Kurzovní lístek"
                  target="_blank"
                >
                  Kurzovní lístek
                </a>
              </li>
              <li>
                <a href="soucet_cisel" title="Součet čísel" target="_blank">
                  Součet čísel
                </a>
              </li>
              <li>
                <a href="ciferny_soucet" title="Ciferný součet" target="_blank">
                  Ciferný součet
                </a>
              </li>
            </ul>
          </section>
          <section className="projects">
            <h2>Hry</h2>
            <ul
              style={{
                listStyle: "none",
              }}
            >
              <li>
                <a
                  href="kamen_nuzky_papir_tapir_spock"
                  title="Kámen, nůžky, papír, tapír, spock"
                  target="_blank"
                >
                  Kámen, nůžky, papír, tapír, spock
                </a>
              </li>
              <li>
                <a href="had" title="Had" target="_blank">
                  Had
                </a>
              </li>
              <li>
                <a href="cesta_dolu" title="Cesta dolů" target="_blank">
                  Cesta dolů
                </a>
              </li>
              <li>
                <a href="slide_in" title="Slide in" target="_blank">
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

export default Projekty;
