import React from "react";
import { Helmet } from "react-helmet";

function Contact() {
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
        <title>Contact • CheeseField</title>
        <meta
          name="description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta property="og:url" content="http://www.cheesefield.4fan.cz/" />
        <meta property="og:title" content="Contact • CheeseField" />
        <meta
          property="og:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta property="og:image" content="../images/share.png" />
        <meta name="og:locale" content="cs_CZ" />
        <meta name="og:type" content="website" />
        <meta name="twitter:title" content="Contact • CheeseField" />
        <meta
          name="twitter:description"
          content="Jmenuji se Dominik, vytvářím webové stránky v HTML a CSS, občas udělám i hru v Javascriptu."
        />
        <meta name="twitter:image" content="../images/share.png" />
      </Helmet>
      <main style={{ width: "80vw" }}>
        <form
          id="contact-form"
          method="POST"
          action="https://formspree.io/f/meqplbdo"
        >
          <h2 className="contact-h2">Contact me</h2>
          <div className="contact">
            <div className="row100">
              <div className="col">
                <div className="inputBox">
                  <input type="text" name="firstName" required="required" />
                  <span className="text">First name</span>
                  <span className="line"></span>
                </div>
              </div>
              <div className="col">
                <div className="inputBox">
                  <input type="text" name="lastName" required="required" />
                  <span className="text">Last name</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="row100">
              <div className="col">
                <div className="inputBox">
                  <input type="text" name="email" required="required" />
                  <span className="text">Email</span>
                  <span className="line"></span>
                </div>
              </div>
              <div className="col">
                <div className="inputBox">
                  <input type="text" name="phoneNumber" required="required" />
                  <span className="text">Phone number</span>
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
                  ></textarea>
                  <span className="text">Write your message here...</span>
                  <span className="line"></span>
                </div>
              </div>
            </div>
            <div className="row100 submit">
              <div className="col">
                <input type="submit" value="Send" />
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

export default Contact;
