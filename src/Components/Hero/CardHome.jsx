


const CardHome = ({children}) => {


  
  return (
    <aside className={`hero-image-opacity hero-image-opacity-home`}>
      <div className="hero-image-content">
        {children}
        {/* <a href="#contacto" className="btn">
          BUSCAR EN AMAZON
        </a> */}
      </div>
    </aside>
  );
};

export default CardHome;
