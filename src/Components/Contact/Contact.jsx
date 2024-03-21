import { Route } from "react-router-dom";
import "../../index.css";
import Form from "./Form/Form";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <Fragment>
      <Helmet>
        <meta
          name="robots"
          content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
        ></meta>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" type="image/svg+xml" href="favicon.svg" />

        <title>Contacto</title>

        <meta
          name="description"
          content="Escribinos por cualquier consulta o sugerencia que tengas."
        />

        <link rel="canonical" href="./" />

        <link rel="favicon" href="favicon.svg" />

        {/* Nos dejaba cambiar el color del navegador */}
        {/*  <meta name="theme-color" content="#d9006" /> */}

        {/* Metas para Redes sociales */}
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          name="twitter:title"
          content="Estaciones Meteorológica"
        />
        <meta
          property="og:description"
          name="twitter:description"
          content="Escribinos por cualquier consulta o sugerencia que tengas."
        />
        <meta
          property="og:image"
          name="twitter:image"
          content="hero-image-home.jpg"
        />
        <meta
          property="og:url"
          name="twitter:url"
          content="https://estacionmeteorologica.top/#/contacto"
        />
      </Helmet>
      <section id="contacto" className="contact section">
        <div className="container">
          <h2 className="section-title">¿En que podemos servirte?</h2>
          <p className="text-center">
            Aquí nos puedes mandar cualquier comentario, sugerencia, corrección
            o lo que desees preguntarnos. Te estaremos respondiendo lo más
            rápido posible.
          </p>
          <Form />
        </div>
      </section>
    </Fragment>
  );
};

export default Contact;
