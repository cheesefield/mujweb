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
        <meta name="title" content="Contact • CheeseField" />
        <meta
          name="description"
          content="I'm Dominik, I create websites with HTML, CSS and Javascript, sometimes I make games in Javascript."
        />
        <meta
          property="og:url"
          content="https://cheesefield-kostich02.vercel.app/en/contact"
        />
        <meta property="og:title" content="Contact • CheeseField" />
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
          content="https://cheesefield-kostich02.vercel.app/en/contact"
        />
        <meta property="twitter:title" content="Contact • CheeseField" />
        <meta
          property="twitter:description"
          content="I'm Dominik, I create websites with HTML, CSS and Javascript, sometimes I make games in Javascript."
        />
        <meta
          property="twitter:image"
          content="https://cheesefield.vercel.app/images/share.png"
        />
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
