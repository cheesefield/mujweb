import React from "react";
import { Helmet } from "react-helmet";

function Kontakt() {
  return (
    <div>
      <Helmet>
        <title>Kontakt • CheeseField</title>
        <meta name="title" content="Kontakt • CheeseField" />
        <meta
          name="description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta
          property="og:url"
          content="https://cheesefield-kostich02.vercel.app/kontakt"
        />
        <meta property="og:title" content="Kontakt • CheeseField" />
        <meta
          property="og:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta property="og:image" content="images/share.png" />

        <meta
          property="twitter:url"
          content="https://cheesefield-kostich02.vercel.app/kontakt"
        />
        <meta property="twitter:title" content="Kontakt • CheeseField" />
        <meta
          property="twitter:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta property="twitter:image" content="images/share.png" />
      </Helmet>
      <main style={{ width: "80vw" }}>
        <form
          id="contact-form"
          method="POST"
          action="https://formspree.io/f/meqplbdo"
        >
          <h2 className="contact-h2">Napiš mi</h2>
          <div className="contact">
            <div className="row100">
              <div className="col">
                <div className="inputBox">
                  <input
                    type="text"
                    name="firstName"
                    id="firstName"
                    required="required"
                    maxlength="15"
                  />
                  <span className="text">Jméno</span>
                  <span className="line"></span>
                </div>
              </div>
              <div className="col">
                <div className="inputBox">
                  <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    required="required"
                    maxlength="15"
                  />
                  <span className="text">Příjmení</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="row100">
              <div className="col">
                <div className="inputBox">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    required="required"
                  />
                  <span className="text">Email</span>
                  <span className="line"></span>
                </div>
              </div>
              <div className="col">
                <div className="inputBox">
                  <input
                    type="number"
                    name="phoneNumber"
                    id="phoneNumber"
                    required="required"
                  />
                  <span className="text">Telefonní číslo</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="row100">
              <div className="col">
                <div className="inputBox textarea">
                  <textarea
                    required="required"
                    cols="30"
                    rows="10"
                    name="message"
                    id="message"
                    maxlength="150"
                  ></textarea>
                  <span className="text">Zde napiš svou zprávu...</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="row100 submit">
              <div className="col">
                <input type="submit" value="Odeslat" />
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Kontakt;
