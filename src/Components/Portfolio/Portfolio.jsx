import CartPortfolio from "./CardPortfolio";
import { portfolio } from "../../../public/assets/informacion";

const Portfolio = () => {


  return (
    <section id="portafolio" className="portfolio section">
      <div className="container">
        <h2 className="section-title">Analisis de las mejores Estaciones Meteorologicas del 2024</h2>
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
