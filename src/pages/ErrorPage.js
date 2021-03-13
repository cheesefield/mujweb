import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

function ErrorPage(props) {
  const changeLanguage = () => props.setLanguage(!props.language);
  return (
    <div>
      <Helmet>
        <title>Error 404(Page Not Found)</title>
        <meta name="title" content="CheeseField" />
        <meta
          name="description"
          content="Vypadá to, že jsi se ztratil, ale pokud tohle čteš, tak veřím, že najdeš cestu ven."
        />
        <meta
          property="og:url"
          content="https://cheesefield-kostich02.vercel.app/*"
        />
        <meta property="og:title" content="Error 404(Page Not Found)" />
        <meta
          property="og:description"
          content="Vypadá to, že jsi se ztratil, ale pokud tohle čteš, tak veřím, že najdeš cestu ven."
        />
        <meta
          property="og:image"
          content="https://cheesefield.vercel.app/images/share.png"
        />

        <meta
          property="twitter:url"
          content="https://cheesefield-kostich02.vercel.app/*"
        />
        <meta property="twitter:title" content="Error 404(Page Not Found)" />
        <meta
          property="twitter:description"
          content="Vypadá to, že jsi se ztratil, ale pokud tohle čteš, tak veřím, že najdeš cestu ven."
        />
        <meta
          property="twitter:image"
          content="https://cheesefield.vercel.app/images/share.png"
        />
      </Helmet>
      <main className="error_page">
        <section
          style={{
            position: "absolute",
            top: "40%",
            padding: "20px",
            paddingBottom: "0",
            left: "50%",
            transform: "translate(-50%,-50%)",
            display: "flex",
            flexDirection: "column",
            width: "fit-content",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            margin: "0",
          }}
        >
          <p
            style={{
              fontSize: "20px",
              marginBottom: "10px",
            }}
          >
            This page doesn´t exist, go back
          </p>
          <NavLink to="/">
            <h3
              style={{
                textAlign: "center",
                padding: "10px",
                color: "#333",
                backgroundColor: "#aaa",
                fontSize: "20px",
                marginBottom: "20px",
              }}
              onClick={changeLanguage}
            >
              HOME
            </h3>
          </NavLink>
        </section>
      </main>
    </div>
  );
}

export default ErrorPage;
