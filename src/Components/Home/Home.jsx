import Hero from "../Hero/Hero.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import { cluster, catalogo, portfolio, año } from "../../informacion";
import { Helmet } from "react-helmet";
import Catalogo from "../Catalogo/Catalogo.jsx";
import Cluster from "../Cluster/Cluster.jsx";
import CardHome from "../Hero/CardHome.jsx";
import CartPortfolio from "../Portfolio/CardPortfolio.jsx";
import CardCatalogo from "../Catalogo/CardCatalogo.jsx";
import { Fragment } from "react";

const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <title>Agustin Diaz Garro</title>

        <meta name="description" content="Estamos cerca de lgrarlo" />

        <link rel="canonical" href="./" />

        <link rel="favicon" href="/favicon.svg" />
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
        <CardHome>
          <h1 className="hero-image-title">
            Estaciones <br /> Meteorologicas
          </h1>
        </CardHome>
      </Hero>

      <section className="container principal">
        <h2 className="section-title">Todo sobre Estaciones Meteorologicas</h2>
        <p>
          Las estaciones meteorológicas no son solo un aparato de medición, sino
          que son elementos que nos ayudan ahorrar dinero, energia, tiempo,
          mejorar la organización y a tomar las mejores decisiones, ya sea para
          el uso agrícola como para la vida cotidiana.
          <br /> <br />
          Si eres un aficionado o profesional del mundo de las centrales
          meteorológicas y estas queriendo comprar o aprender sobre ellas, esta
          es tu web. Te mostraremos cada uno de sus tipos, las mejores marcas y
          los mejores modelos de cada una de ellas.
        </p>
      </section>

      <Portfolio>
        <h2 className="section-title">
          Analisis de las mejores Estaciones Meteorologicas del {año}
        </h2>
        {portfolio.map((folio) => {
          return (
            <CartPortfolio
              key={folio.title}
              title={folio.title}
              text={folio.text}
              link={folio.link}
              image={folio.image}
              alt={folio.alt}
            />
          );
        })}
      </Portfolio>

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

      <section className="cluster container">
        <h2 className="section-title">¿Cuál es tu barbacoa ideal?</h2>
        <p>
          Hay infinidad de modelos así que es normal que no sepas qué barbacoa
          comprar que responda mejor a tus necesidades. En Barbacoas.online las
          hemos clasificado para que encuentres lo que buscas.
        </p>
        <Cluster cluster={cluster} />
      </section>

      <section className="cluster container">
        <h2 className="section-title">
          ¡Trucos y Consejos para amantes de las Barbacoas!
        </h2>
        <Cluster cluster={cluster} />
      </section>

      {/*       <Acerca />
      <Servicios title="Ventajassdfgsdg" arr={ventajas} />
      <Servicios title="Desventajas" arr={desventajas} />
      <Modal /> */}
      {/*       <Hero
        image={"url('assets/hero-image-home.jpg')"}
        attachment={"scroll"}
        opacity={"var(--white-alpha-color)"}
        title={"var(--white-color)"}
        id={"testimonios"}
        classe={"testimonials"}
      /> */}
    </Fragment>
  );
};

export default Home;
