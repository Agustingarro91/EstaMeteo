import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { catalogo, cluster } from "../../informacion";
import Cluster from "../../Components/Cluster/Cluster";
import Catalogo from "../../Components/Catalogo/Catalogo";
import CardCatalogo from "../../Components/Catalogo/CardCatalogo";
import HeaderArticle from "../../Components/HeaderArticle/HeaderArticle";

const MisolHp2550Wifi = () => {
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

      <HeaderArticle >
      <h1 className="item-a">Froggit HP1000SE PRO Wi-Fi - Estación meteorológica inalámbrica por Internet, LCD</h1>
        <img
            className="item-b"
          src="https://barbacoas.online/wp-content/uploads/2021/09/weber-pulse.jpg"
          alt=""
        />
        <h2 className="item-c">
          La reinvención de la auténtica parrilla, ahora en formato eléctrico.
          Primera en su categoría, ha llegado para revolucionar las técnicas
          culinarias.
        </h2>
        <p className="item-d">
          Con el buen tiempo y la época estival, llega el momento para disfrutar
          de las barbacoas. Por esto, te traemos la primera barbacoa eléctrica
          del mercado: Weber pulse 1000 (ver en Amazon) Ha llegado con fuerzas
          para quedarse. ¿Quieres saber qué es lo que encanta a los usuarios?
          ¡Te desvelamos todos sus secretos!
        </p>
        <a href="" className="item-e btn-amzon">Ver ofertas de el ARTICULO en Amazon </a>
      </HeaderArticle>
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

export default MisolHp2550Wifi;
