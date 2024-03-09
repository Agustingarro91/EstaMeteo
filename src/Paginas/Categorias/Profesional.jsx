import { Fragment } from "react";
import { catalogo, cluster } from "../../informacion";
import { Helmet } from "react-helmet";
import Hero from "../../Components/Hero/Hero";
import Catalogo from "../../Components/Catalogo/Catalogo";
import Cluster from "../../Components/Cluster/Cluster";
import CardHome from "../../Components/Hero/CardHome";
import CardCatalogo from "../../Components/Catalogo/CardCatalogo";

const Profesional = () => {
  return (
    <Fragment>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />

        <title>Agustin Diaz Garro</title>

        <meta name="description" content="Estamos cerca de lgrarlo" />

        <link rel="canonical" href="./" />

        <link rel="favicon" href="/assets/favicon.svg" />
        <link
          rel="apple-touch-icon"
          href="https://jonmircha.github.io/youtube-taller-maquetacion/portafolio-cv/assets/favicon.png"
        />
        <meta name="theme-color" content="#d9006" />
        {/* Nos deja cambiar el color del navegador */}

        {/* Metas para Redes sociales */}
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          name="twitter:title"
          content="Agustin Diaz Garro"
        />
        <meta
          property="og:description"
          name="twitter:description"
          content="Hola bienvenid@ a mi Portafolio Profesional, soy Jonathan MirCha, Desarrollador Web"
        />
        <meta
          property="og:image"
          name="twitter:image"
          content="https://jonmircha.github.io/youtube-taller-maquetacion/portafolio-cv/assets/hero-image-home.jpg"
        />
        <meta
          property="og:url"
          name="twitter:url"
          content="https://jonmircha.github.io/youtube-taller-maquetacion/portafolio-cv"
        />
      </Helmet>

      <Hero
        image={"url('/hero-image-home.jpg')"}
        attachment={"fixed"}
        id={"inicio"}
      >
        <CardHome  >
        <h1 className="hero-image-title" >
        Estaciones <br /> Profesional
        </h1>
        </CardHome>
      </Hero>

      <Catalogo>
        <h2 className="section-title">
          Catalogo de Estaciones Meteorologicas al mejor precio
        </h2>
        <article className="catalogo ">
          {catalogo.map((catalogo) => (
            <CardCatalogo key={catalogo.id} catalogo={catalogo} />
          ))}
        </article>
      </Catalogo>

      <section className="cluster container">
        <h2 className="section-title">
          Las marcas mas baratas de estaciones meteorologicas
        </h2>
        <p>
          Te mostramos las características y las mejores ofertas de estaciones
          meteorologicas de las principales marcas del sector.
        </p>
        <Cluster cluster={cluster} />
      </section>
    </Fragment>
  );
};

export default Profesional;
