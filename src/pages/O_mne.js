import React from "react";
import { Helmet } from "react-helmet";

function O_mne() {
  return (
    <div>
      <Helmet>
        <title>O mně • CheeseField</title>
        <meta
          name="description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta property="og:url" content="http://www.cheesefield.4fan.cz/" />
        <meta property="og:title" content="O mně • CheeseField" />
        <meta
          property="og:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta property="og:image" content="images/share.png" />
        <meta name="og:locale" content="cs_CZ" />
        <meta name="og:type" content="website" />
        <meta name="twitter:title" content="O mně • CheeseField" />
        <meta
          name="twitter:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta name="twitter:image" content="images/share.png" />
      </Helmet>
      <main>
        <section
          style={{
            position: "absolute",
            top: "42%",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: "4vw",
          }}
        >
          <p>PŘIPRAVUJE SE...</p>
        </section>
      </main>
    </div>
  );
}

export default O_mne;
