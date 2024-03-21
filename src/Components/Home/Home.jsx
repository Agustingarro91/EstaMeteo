import Hero from "../Hero/Hero.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import {
  cluster,
  catalogo,
  portfolio,
  año,
  clusterMarcas,
  clusterTipos,
} from "../../informacion";
import { Helmet } from "react-helmet";
import Catalogo from "../Catalogo/Catalogo.jsx";
import Cluster from "../Cluster/Cluster.jsx";
import CardHome from "../Hero/CardHome.jsx";
import CartPortfolio from "../Portfolio/CardPortfolio.jsx";
import CardCatalogo from "../Catalogo/CardCatalogo.jsx";
import { Fragment, useEffect } from "react";
import LinkAmazon from "../LinkAmazon/LinkAmazon.jsx";

const Home = () => {




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

        <title>Estación Meteorológica</title>

        <meta
          name="description"
          content="Ofertas, modelos, reseñas... TODO lo que quieras saber sobre tu Estacion Meteorologíca lo tienes en estacionmeteorologica.top ➤ ➤ ¡No compres tu Estacion hasta conocer nuestra opinión ;) !"
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
          content="Ofertas, modelos, reseñas... TODO lo que quieras saber sobre tu Estacion Meteorologíca lo tienes en estacionmeteorologica.top ➤ ➤ ¡No compres tu Estacion hasta conocer nuestra opinión ;) !"
        />
        <meta
          property="og:image"
          name="twitter:image"
          content="hero-image-home.jpg"
        />
        <meta
          property="og:url"
          name="twitter:url"
          content="hero-image-home.jpg"
        />
      </Helmet>

      <Hero
        image={"url('hero-image-home.jpg')"}
        attachment={"fixed"}
        id={"inicio"}
      >
        <CardHome text={'Comparar en amazon'}>
          <h1 className="hero-image-title">
            Estaciones <br /> Meteorológicas
          </h1>
          {/* <LinkAmazon link={"link"} text={""}/> */}
        </CardHome>
      </Hero>

      <section className="container principal">
        <h2 className="section-title">Todo sobre Estaciones Meteorológica</h2>
        <p>
          Las estaciones meteorológicas no son solo instalaciones dedicadas a
          recopilar información precisa y actualizada sobre las condiciones
          climáticas en un área específica, sino que tambien es una herramientas que
          nos ayudan ahorrar dinero, energia, tiempo, mejorar la organización y
          a tomar las mejores decisiones, ya sea para el uso agrícola como para
          la vida cotidiana.
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

 {/*      <Catalogo>
        <h2 className="section-title">
          Catalogo de Estaciones Meteorologicas al mejor precio
        </h2>
        <article className="catalogo ">
          {catalogo.map((catalogo) => (
            <CardCatalogo key={catalogo.id} catalogo={catalogo} />
          ))}
        </article>
      </Catalogo> */}

      <section className="cluster container">
        <h2 className="section-title">
          Las marcas mas baratas de estaciones meteorológica
        </h2>
        <p>
          Te mostramos las características y las mejores ofertas de centrales
          meteorológica de las principales marcas del sector.
        </p>
        <Cluster cluster={clusterMarcas} />
      </section>

      <section className="cluster container">
        <h2 className="section-title">
          ¿Cuál es tu estación meteorológica ideal?
        </h2>
        <p>
          Hay infinidad de modelos así que es normal que no sepas qué central
          meteorológica comprar que responda mejor a tus necesidades. En
          estaciónmeteorológica.com las hemos clasificado para que encuentres lo
          que buscas.
        </p>
        <Cluster cluster={clusterTipos} />
      </section>

      <section className="container principal">
        <h2 className="section-title">¿Que es y para que sirve una estación meteorológica?</h2>
        <p>
          Podemos decir que una central meteorológica es un conjunto de instrumentos y dispositivos especializados para medir y registrar datos relacionados
          con las condiciones climaticas en un lugar determinado. <br /> Estos datos
          incluyen variables como <strong>la temperatura, la presión atmosférica, la
          humedad relativa, el viento, la lluvia,</strong>  entre otros. Estas estaciones
          están diseñadas para obtener mediciones precisas y confiables que son
          utilizadas para el análisis y pronóstico del clima, pueden ubicarse en distintos entornos geográficos, como áreas urbanas, rurales, terrestres o marítimas.
          <br /> <br />
          Los datos recopilados por estas estaciones son utilizados
          por meteorólogos, científicos, instituciones y muchos afiscionados para aprender, comprender y predecir el clima. Esto permite tomar decisiones en áreas
          como la agricultura, la planificación urbana, la gestión de recursos
          hídricos, la generación de energía y la respuesta ante eventos
          climáticos extremos. <br /> Estas también son
          esenciales para la navegación marítima y aérea, ya que ofrecen datos
          sobre las condiciones atmosféricas que afectan la seguridad de las
          operaciones. <br /><br /> Por ello decimos que las estaciones meteorológicas son
          herramientas indispensables para comprender y enfrentar los desafíos
          que impone el clima en nuestra sociedad.
        </p>
      </section>

      <section className="container caracteristicas">
        <h2 className="section-title">¿Con que instrumentos y que variables se miden en las bases climatologicas?</h2>
        <p>
          Vamos a listar alguno de los componentes que componen una estacion meteorologica los cuales no siempre estan en todas, siempre dependiendo de que dato estemos necesitemos obtener.           
        </p>
        <ul>
          <li>
            <h3>Veleta:</h3> Con ella logramos saber en que direccion va el viento.
          </li>
          <li>
            <h3>Anemómetro:</h3> Con este instrumento obtenemos la velocidad del viento.
          </li>
          <li>
            <h3>Termómetro:</h3> Con este componente medimos la teperatura.
          </li>
          <li>
            <h3>Higrómetro:</h3> Con el podemos saber la Humedad del aire.
          </li>
          <li>
            <h3>Pluviómetro: </h3> Con este artefacto podemos evaluar el nivel de precipitaciones.
          </li>
          <li>
            <h3>Barómetro:</h3> Con esta herramienta podemos controlar cual es el nivel de presión atmosferica.
          </li>
          <li>
            <h3>Piranómetro:</h3> Con este implemento podemos percibir cual es el nivel de la radiacion solar.
          </li>
          <li>
            <h3>Nefobasímetro:</h3> Con este medio podemos conocer la altura de las nubes
          </li>
          <li>
            <h3>Nivómetro:</h3> Con este dispositivo podemos calcular el nivel de l anueve
          </li>
        </ul>
      </section>


      

      <section className="cluster container">
        <h2 className="section-title">
          ¡Trucos y Consejos para amantes de las Estaciones Meteorológicas!
        </h2>
        <Cluster cluster={cluster} />
      </section>
    </Fragment>
  );
};

export default Home;
