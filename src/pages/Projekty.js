import React from "react";
import { Helmet } from "react-helmet";

function Projekty() {
  return (
    <div>
      <Helmet>
        <title>Projekty • CheeseField</title>
        <meta name="title" content="Projekty • CheeseField" />
        <meta
          name="description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta
          property="og:url"
          content="https://cheesefield-kostich02.vercel.app/projekty"
        />
        <meta property="og:title" content="Projekty • CheeseField" />
        <meta
          property="og:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta property="og:image" content="images/share.png" />

        <meta
          property="twitter:url"
          content="https://cheesefield-kostich02.vercel.app/projekty"
        />
        <meta property="twitter:title" content="Projekty • CheeseField" />
        <meta
          property="twitter:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta property="twitter:image" content="images/share.png" />
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
                <a href="projekty/zoo" title="Zoo" target="_blank">
                  Zoo
                </a>
              </li>
              <li>
                <a href="projekty/opakovani" title="Opakování" target="_blank">
                  Opakování
                </a>
              </li>
              <li>
                <a
                  href="projekty/obrazova_mapa"
                  title="Obrazová mapa"
                  target="_blank"
                >
                  Obrazová mapa
                </a>
              </li>
              <li>
                <a
                  href="projekty/obrazova_mapa_2"
                  title="Obrazová mapa 2"
                  target="_blank"
                >
                  Obrazová mapa 2
                </a>
              </li>
              <li>
                <a href="projekty/tabulka" title="Tabulka" target="_blank">
                  Tabulka
                </a>
              </li>
              <li>
                <a href="projekty/tabulka_2" title="Tabulka 2" target="_blank">
                  Tabulka 2
                </a>
              </li>
              <li>
                <a href="projekty/zvirata" title="Zvířata" target="_blank">
                  Zvířata
                </a>
              </li>
              <li>
                <a href="projekty/hardware" title="Hardware" target="_blank">
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
                  href="projekty/dvousloupcovy_layout"
                  title="Dvousloupcový layout"
                  target="_blank"
                >
                  Dvousloupcový layout
                </a>
              </li>
              <li>
                <a href="projekty/recepty" title="Recepty" target="_blank">
                  Recepty
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
                <a
                  href="projekty/seznam_ukolu"
                  title="Seznam úkolů"
                  target="_blank"
                >
                  Seznam úkolů
                </a>
              </li>
              <li>
                <a
                  href="projekty/kurzovni_listek"
                  title="Kurzovní lístek"
                  target="_blank"
                >
                  Kurzovní lístek
                </a>
              </li>
              <li>
                <a
                  href="projekty/soucet_cisel"
                  title="Součet čísel"
                  target="_blank"
                >
                  Součet čísel
                </a>
              </li>
              <li>
                <a
                  href="projekty/ciferny_soucet"
                  title="Ciferný součet"
                  target="_blank"
                >
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
                  href="projekty/kamen_nuzky_papir_tapir_spock"
                  title="Kámen, nůžky, papír, tapír, spock"
                  target="_blank"
                >
                  Kámen, nůžky, papír, tapír, spock
                </a>
              </li>
              <li>
                <a href="projekty/had" title="Had" target="_blank">
                  Had
                </a>
              </li>
              <li>
                <a
                  href="projekty/cesta_dolu"
                  title="Cesta dolů"
                  target="_blank"
                >
                  Cesta dolů
                </a>
              </li>
              <li>
                <a href="projekty/slide_in" title="Slide in" target="_blank">
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
