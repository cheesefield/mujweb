import React from "react";
import { Helmet } from "react-helmet";

function O_mne() {
  return (
    <div>
      <Helmet>
        <title>O mně • CheeseField</title>
        <meta name="title" content="O mně • CheeseField" />
        <meta
          name="description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta
          property="og:url"
          content="https://cheesefield-kostich02.vercel.app/o_mne"
        />
        <meta property="og:title" content="O mně • CheeseField" />
        <meta
          property="og:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta
          property="og:image"
          content="https://cheesefield.vercel.app/images/share.png"
        />

        <meta
          property="twitter:url"
          content="https://cheesefield-kostich02.vercel.app/o_mne"
        />
        <meta property="twitter:title" content="O mně • CheeseField" />
        <meta
          property="twitter:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
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
        <p>PŘIPRAVUJE SE...</p>
      </section>
    </div>
  );
}

export default O_mne;
