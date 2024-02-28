import CartPortfolio from "./CardPortfolio";

const Portfolio = () => {
  const portfolio = [
    {
      title: "Proyecto Primero",
      text: "primer proyecto",
      trabajo: "trabajo-1",
      image: "src/assets/portfolio.jpg",
      alt: "Trabajo 1",
    },
    
    {
      title: "Proyecto Segundo",
      text: "primer proyecto",
      trabajo: "trabajo-2",
      image: "src/assets/portfolio.jpg",
      alt: "Trabajo 2",
    },
    
    {
      title: "Proyecto Tercero",
      text: "primer proyecto",
      trabajo: "trabajo-3",
      image: "src/assets/portfolio.jpg",
      alt: "Trabajo 3",
    },
    
  ];

  return (
    <section id="portafolio" className="portfolio section">
      <div className="container">
        <h2 className="section-title">Mis Trabajos</h2>
        {portfolio.map((folio) => {
          return (
            <CartPortfolio
              key={folio.title}
              title={folio.title}
              text={folio.text}
              trabajo={folio.trabajo}
              image={folio.image}
              alt={folio.alt}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
