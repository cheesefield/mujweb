import React from "react";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <Helmet>
        <title>Error 404(Page Not Found)</title>
        <meta
          name="description"
          content="Vypadá to, že jsi se ztratil, ale pokud tohle čteš, tak veřím, že najdeš cestu ven."
        />
        <meta property="og:url" content="http://www.cheesefield.4fan.cz/" />
        <meta property="og:title" content="Error 404(Page Not Found)" />
        <meta
          property="og:description"
          content="Vypadá to, že jsi se ztratil, ale pokud tohle čteš, tak veřím, že najdeš cestu ven."
        />
        <meta property="og:image" content="images/share.png" />
        <meta name="og:locale" content="cs_CZ" />
        <meta name="og:type" content="website" />
        <meta name="twitter:title" content="Error 404(Page Not Found)" />
        <meta
          name="twitter:description"
          content="Vypadá to, že jsi se ztratil, ale pokud tohle čteš, tak veřím, že najdeš cestu ven."
        />
        <meta name="twitter:image" content="images/share.png" />
      </Helmet>
      <main>
        <section
          style={{
            position: "absolute",
            top: "42%",
            padding: "20px",
            paddingBottom: "0",
            left: "50%",
            transform: "translate(-50%,-50%)",
            fontSize: "1.8vw",
          }}
        >
          <p>Tady jsi špatně kámo, couvej zpět</p>
          <NavLink to="/">
            <h3
              style={{
                textAlign: "center",
                padding: "10px",
                margin: "0",
                color: "#333",
                backgroundColor: "#aaa",
                fontSize: "1.8vw",
              }}
            >
              DOMŮ
            </h3>
          </NavLink>
        </section>
      </main>
    </div>
  );
}

export default ErrorPage;
