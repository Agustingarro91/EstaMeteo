import Hero from "./Hero/Hero.jsx";
import "../../index.css";
import Acerca from "../Acerca/Acerca.jsx";
import Servicios from "../Servicios/Servicios.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import Modal from "../Modal/Modal.jsx";
import { ventajas, desventajas, catalogo } from "../../../public/assets/informacion.js";
import Contact from "../Contact/Contact.jsx";
import { Helmet } from "react-helmet";
import Catalogo from "../Catalogo/Catalogo.jsx";

const Home = () => {
  return (
    <main>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" type="image/svg+xml" href="/assets/vite.svg" />

        <title>Agustin Diaz Garro</title>

        <meta name="description" content="Estamos cerca de lgrarlo" />

        <link rel="canonical" href="./" />

        <link rel="favicon" href="/vite.svg" />
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
        image={"url('assets/hero-image-home.jpg')"}
        attachment={"fixed"}
        opacity={"var(--black-alpha-color)"}
        title={"var(--white-color)"}
        id={"inicio"}
        classe={"home"}
      />
      <Portfolio />
      <Acerca />
      <Servicios title="Ventajassdfgsdg" arr={ventajas} />
      <Servicios title="Desventajas" arr={desventajas} />
      <Modal />
      <Hero
        image={"url('assets/hero-image-home.jpg')"}
        attachment={"scroll"}
        opacity={"var(--white-alpha-color)"}
        title={"var(--white-color)"}
        id={"testimonios"}
        classe={"testimonials"}
      />
      <Contact />
      <Catalogo catalogo={catalogo}/>
    </main>
  );
};

export default Home;
