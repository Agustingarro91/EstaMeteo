import { Fragment } from "react";
import { Helmet } from "react-helmet";
import { catalogo, cluster, opiniones } from "../../informacion";
import HeaderArticle from "../../Components/HeaderArticle/HeaderArticle";
import LinkAmazon from "../../Components/LinkAmazon/LinkAmazon";

const FroggitHP1000Wifi = () => {
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

        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

        <title>
          {" "}
          Froggit HP1000SE PRO Wi-Fi - Estación meteorológica inalámbrica
        </title>

        <meta
          name="description"
          content="Froggit HP1000SE PRO Wi-Fi | Te contamos todo sobre esta central meteorologia inalambrica. Ingresa y enterate de todo lo que tiene"
        />

        <link rel="canonical" href="./" />

        <link rel="favicon" href="/favicon.svg" />
        {/* <meta name="theme-color" content="#d9006" /> */}
        {/* Nos deja cambiar el color del navegador */}

        {/* Metas para Redes sociales */}
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          name="twitter:title"
          content="Froggit HP1000SE PRO Wi-Fi - Estación meteorológica inalámbrica"
        />
        <meta
          property="og:description"
          name="twitter:description"
          content="Froggit HP1000SE PRO Wi-Fi - Estación meteorológica inalámbrica"
        />
        <meta
          property="og:image"
          name="twitter:image"
          content="imagendelproducto.jpg"
        />
        <meta
          property="og:url"
          name="twitter:url"
          content="./froggit-hp-1000-se-pro-wifi"
        />
      </Helmet>

      <HeaderArticle>
        <h1 className="item-a" id="inicio">
          Froggit HP1000SE PRO Wi-Fi - Estación meteorológica inalámbrica
        </h1>
        <img
          className="item-b"
          src="https://m.media-amazon.com/images/I/51wVL4nP6bL._SX466_.jpg"
          alt="Froggit HP1000SE PRO Wi-Fi - Estación meteorológica inalámbrica"
        />
        <h2 className="item-c">
          Flamante y avanzada unidad de visualización con pantalla a color y
          nueva interfaz de usuario
        </h2>
        <p className="item-d">
          La central meteorologica Froggit HP1000SE PRO surgio como una novedosa
          herramienta para la medicion climatica alla por el año 2019, pero al
          pasar el tiempo se convirtio en a mas deseada por los fanaticos de
          las centrales climatologicas debido a las impresionantes
          caracteristicas que tiene. ¿Quieres saber qué es lo que encanta a los
          usuarios? ¡Te desvelamos todos sus secretos!
        </p>
        <LinkAmazon text={'Comprar Froggit HP1000SE PRO en Amazon'} link={"https://amzn.to/3PtJNTb" } clas={"item-e amazon"} />
      </HeaderArticle>

      <section  className="container caracteristicas">
        <h2 className="section-title">
          Caracteristicas de la estacion climatologica Froggit HP1000SE PRO
          Wi-Fi
        </h2>

        <ul>
          <li>
            Con el chip de red inalámbrica integrado, tienes la capacidad de
            enviar tus datos meteorológicos a diferentes servidores
            meteorológicos tales como: <br />
            <ul>
              <li>
                Ecowitt.net (transmisión de los valores medidos de todos los
                sensores conectados)
              </li>
              <li>Wunderground (solo valores medidos en exteriores)</li>
              <li>Weathercloud (solo valores medidos en exteriores)</li>
              <li>WOW (solo valores medidos en exteriores)</li>
              <li>
                Servidores personalizados (solo valores medidos en exteriores)
              </li>
            </ul>
          </li>
          <li>Ajustar los valores de las alarmas de manera individual.</li>
          <li>
            Con el HP1000SE PRO siempre tendrá a la vista su propio microclima
            gracias a la gran cantidad de sensores.
          </li>
          <li>
            Comprobacion del clima interior: conexión de hasta 8 sensores
            inalámbricos de temperatura y humedad del aire (froggit DP50),
            conexión de hasta 8 sensores inalámbricos para controlar la humedad
            del suelo (froggit DP100), conexión de hasta 4 sensores inalámbricos
            para medición de polvo fino PM 2,5 (froggit DP200).
          </li>
          <li>Visualización gráfica de los datos históricos.</li>
          <li>Tipo de pantalla: LCD</li>
          <li>
            Idiomas con los que puedes configurar la pantalla: alemán, inglés,
            francés, italiano, español, holandés.
          </li>
        </ul>
      </section>

      <section className="container caracteristicas">
        <h2 className="section-title">
          Ventajas de la central meteorologica Froggit HP1000SE PRO Wi-Fi
        </h2>
        <ul>
          <li>
            Pantalla de 7" a color con gran cantidad de informacion para evaluar
            de una sola vez
          </li>
          <li>
            Diferentes datos meteorologicos:
            <ol>
              <li>Dirección del viento </li>
              <li>Velocidad del viento</li>
              <li>Precipitaciones</li>
              <li>Temperatura ambiente</li>
              <li>Humedad ambiente</li>
              <li>Presión atmosférica</li>
              <li>Radiación solar</li>
              <li>índice UV</li>
            </ol>
          </li>
          <li>Poder instalar sensores extras y obtener sus variables</li>
          <li>
            Transferir los datos a la nube y consultarlos desde donde querramos
          </li>
          <li>
            La sensillez con la que podemos instalar nuestra central
            meteorologica
          </li>
        </ul>
      </section>

      <section className="container caracteristicas">
        <h2 className="section-title">
          Otros beneficios de la estacion meteorologica
        </h2>
        <p>
          Lo mejor de esta esta estacion es que contiene una pantalla dinamica a
          color en donde podemos ver las tablas y graficas de todas las
          variables que hayamos medido. <br />
          <br />Y no solo eso, ademas tenemos la posibilidad de tener el
          firmware siempre lo mas actualizado desde Ecowitt y asi poder reparar
          cualquier error del programa base.
        </p>
      </section>
      <section className="container caracteristicas">
        <h2 className="section-title">
          Conoce las Opiniones de Froggit HP1000SE PRO Wi-Fi
        </h2>
        {opiniones.map((opinion,i) => {

          return(
        <aside key={i} className="caracteristicas-aside">
          {opinion.opinion}
          <blockquote>
            <p>
              <em> {opinion.texto} </em>
            </p>
          </blockquote>
          <LinkAmazon text={'Ver en amazon'} link={opinion.link}  />
        </aside>
          )
        })}
        <LinkAmazon text={'Ver en amazon todas las opiniones'} link={"https://amzn.to/3VrUvxs"} clas={"caracteristicas amazon"} />
      </section>
    </Fragment>
  );
};

export default FroggitHP1000Wifi;
