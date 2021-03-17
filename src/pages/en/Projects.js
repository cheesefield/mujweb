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
        <meta name="title" content="Projects • CheeseField" />
        <meta
          name="description"
          content="I'm Dominik, I create websites with HTML, CSS and Javascript, sometimes I make games in Javascript."
        />
        <meta
          property="og:url"
          content="https://cheesefield-kostich02.vercel.app/en/projects"
        />
        <meta property="og:title" content="Projects • CheeseField" />
        <meta
          property="og:description"
          content="I'm Dominik, I create websites with HTML, CSS and Javascript, sometimes I make games in Javascript."
        />
        <meta
          property="og:image"
          content="https://cheesefield.vercel.app/images/share.png"
        />

        <meta
          property="twitter:url"
          content="https://cheesefield-kostich02.vercel.app/en/projects"
        />
        <meta property="twitter:title" content="Projects • CheeseField" />
        <meta
          property="twitter:description"
          content="I'm Dominik, I create websites with HTML, CSS and Javascript, sometimes I make games in Javascript."
        />
        <meta
          property="twitter:image"
          content="https://cheesefield.vercel.app/images/share.png"
        />
      </Helmet>
      <main>
        <div id="row200">
          <section className="projects">
            <ul
              style={{
                listStyle: "none",
              }}
            >
              <h2>1st semester</h2>
              <li>
                <a href="../projects/zoo" title="Zoo" target="_blank">
                  Zoo
                </a>
              </li>
              <li>
                <a
                  href="../projects/opakovani"
                  title="Repetition"
                  target="_blank"
                >
                  Repetition
                </a>
              </li>
              <li>
                <a
                  href="../projects/obrazova_mapa"
                  title="Image map"
                  target="_blank"
                >
                  Image map
                </a>
              </li>
              <li>
                <a
                  href="../projects/obrazova_mapa_2"
                  title="Image map 2"
                  target="_blank"
                >
                  Image map 2
                </a>
              </li>
              <li>
                <a href="../projects/tabulka" title="Table" target="_blank">
                  Table
                </a>
              </li>
              <li>
                <a href="../projects/tabulka_2" title="Table 2" target="_blank">
                  Table 2
                </a>
              </li>
              <li>
                <a href="../projects/zvirata" title="Animals" target="_blank">
                  Animals
                </a>
              </li>
              <li>
                <a href="../projects/hardware" title="Hardware" target="_blank">
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
              <h2>2nd semester</h2>
              <li>
                <a
                  href="../projects/dvousloupcovy_layout"
                  title="Two-column layout"
                  target="_blank"
                >
                  Two-column layout
                </a>
              </li>
              <li>
                <a href="../projects/recepty" title="Recipes" target="_blank">
                  Recipes
                </a>
              </li>
              <li>
                <a
                  href="../projects/u_ruskeho_barona"
                  title="U ruského barona(school project)"
                  target="_blank"
                >
                  U ruského barona(school project)
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
                <a
                  href="../projects/seznam_ukolu"
                  title="To do list"
                  target="_blank"
                >
                  To do list
                </a>
              </li>
              <li>
                <a
                  href="../projects/kurzovni_listek"
                  title="Currency Converter"
                  target="_blank"
                >
                  Currency Converter
                </a>
              </li>
              <li>
                <a
                  href="../projects/soucet_cisel"
                  title="Sum of the digits"
                  target="_blank"
                >
                  Sum of the digits
                </a>
              </li>
              <li>
                <a
                  href="../projects/ciferny_soucet"
                  title="Digit sum"
                  target="_blank"
                >
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
                  href="../projects/kamen_nuzky_papir_tapir_spock"
                  title="Rock, paper, scissors, lizard, spock"
                  target="_blank"
                >
                  Rock, paper, scissors, lizard, spock
                </a>
              </li>
              <li>
                <a href="../projects/had" title="Snake" target="_blank">
                  Snake
                </a>
              </li>
              <li>
                <a
                  href="../projects/cesta_dolu"
                  title="Fall Game"
                  target="_blank"
                >
                  Fall Game
                </a>
              </li>
              <li>
                <a href="../projects/slide_in" title="Slide in" target="_blank">
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
