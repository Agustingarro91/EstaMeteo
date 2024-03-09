import CartPortfolio from "./CardPortfolio";
import { portfolio, año } from "../../informacion";



const Portfolio = ({children}) => {

  return (
    <section id="portafolio" className="portfolio section">
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Portfolio;
