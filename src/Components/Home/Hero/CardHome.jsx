


const CardHome = ({heroImageOpacity, heroImageTitle}) => {


  
  return (
    <aside className="hero-image-opacity" style={heroImageOpacity}>
      <div className="hero-image-content">
        <h1 className="hero-image-title" style={heroImageTitle}>
          Estaciones <br /> Meteorologicas
        </h1><br />
        <a href="#contacto" className="btn">
          BUSCAR EN AMAZON
        </a>
      </div>
    </aside>
  );
};

export default CardHome;
