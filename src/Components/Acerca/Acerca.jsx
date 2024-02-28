import "../../index.css";
const Acerca = () => {
  return (
    <section id="acerca" className="about section container full-lg-screen">
      <article className="text-lg-right">
        <aside className="text-center text-lg-right">
          <h1>Jonathan MirCha</h1>
          <h5>
            profesor & programador <i>web</i>
          </h5>
        </aside>
        <p>
          Desde 2004 tengo experiencia en el área del desarrollo <i>web</i> y la
          educación. Imparto clases, conferencias y capacitaciones para
          personas, empresas, instituciones educativas y comunidades en
          Internet.
        </p>
        <p>
          También colaboro en proyectos como <i>Freelance FullStack</i>. Estoy
          más orientado al <i>Frontend</i>, pero también hago <i>Backend</i>.
        </p>
        <p>
          Disfruto llevar a cabo la maquetación e interactividad de interfaces{" "}
          <i>web</i>, así como la optimización, para el buen posicionamiento y
          el rendimiento de carga de sitios y aplicaciones <i>web</i>.
        </p>
        <p>
          También cuento con experiencia en el área de <i>Social Media</i>,{" "}
          <i>Marketing</i> de Contenidos y <i>SEO</i>.
        </p>
        <div className="text-center text-lg-left">
          <a
            className="btn"
            href="https://jonmircha.com/jonmircha-cv.pdf"
            target="_blank"
            rel="noopener"
          >
            DESCARGA MI CV
          </a>
        </div>
      </article>
      <article className="center-cont">
        <img
          className="gray-scale"
          src="src/assets/profile-img8.jpg"
          alt="jonmircha"
        />
      </article>
      <article>
        <h2 className="text-center text-lg-left">Mis Habilidades</h2>
        <div className="progress">
          <p>
            <b>
              Desarrollo <i>Web Frontend</i>
            </b>
            <b>90%</b>
          </p>
          <progress value="90" min="0" max="100"></progress>
        </div>
        <div className="progress">
          <p>
            <b>
              Diseño <i>Web</i>
            </b>
            <b>85%</b>
          </p>
          <progress value="85" min="0" max="100"></progress>
        </div>
        <div className="progress">
          <p>
            <b>
              <i>WPO</i> y <i>SEO</i>
            </b>
            <b>80%</b>
          </p>
          <progress value="80" min="0" max="100"></progress>
        </div>
        <div className="progress">
          <p>
            <b>
              Desarrollo <i>Web Backend</i>
            </b>
            <b>75%</b>
          </p>
          <progress value="75" min="0" max="100"></progress>
        </div>
        <div className="progress">
          <p>
            <b>
              <i>Social Media</i> y <i>Marketing</i> de Contenidos
            </b>
            <b>60%</b>
          </p>
          <progress value="60" min="0" max="100"></progress>
        </div>
      </article>
    </section>
  );
};

export default Acerca;
