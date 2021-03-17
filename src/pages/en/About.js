import React from "react";
import { Helmet } from "react-helmet";

function About() {
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

        <title>About • CheeseField</title>
        <meta name="title" content="About • CheeseField" />
        <meta
          name="description"
          content="I'm Dominik, I create websites with HTML, CSS and Javascript, sometimes I make games in Javascript."
        />
        <meta
          property="og:url"
          content="https://cheesefield-kostich02.vercel.app/en/about"
        />
        <meta property="og:title" content="About • CheeseField" />
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
          content="https://cheesefield-kostich02.vercel.app/en/about"
        />
        <meta property="twitter:title" content="About • CheeseField" />
        <meta
          property="twitter:description"
          content="I'm Dominik, I create websites with HTML, CSS and Javascript, sometimes I make games in Javascript."
        />
        <meta
          property="twitter:image"
          content="https://cheesefield.vercel.app/images/share.png"
        />
      </Helmet>
      <section
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          fontSize: "30px",
          margin: "0",
        }}
      >
        <p>WIP</p>
      </section>
    </div>
  );
}

export default About;
