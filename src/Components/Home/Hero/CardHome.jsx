


const CardHome = ({heroImageOpacity, heroImageTitle}) => {


  
  return (
    <aside className="hero-image-opacity" style={heroImageOpacity}>
      <div className="hero-image-content">
        <h2 className="hero-image-title" style={heroImageTitle}>
          Bienvenid@s
          <br />a mi sitio
        </h2>
        <a href="#contacto" className="btn">
          CONTÁCTAME
        </a>
      </div>
    </aside>
  );
};

export default CardHome;
