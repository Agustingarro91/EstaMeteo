import { Fragment } from "react";
import { NavLink } from "react-router-dom";

const CartPortfolio = ({title, text, link, image, alt}) => {



  return (
    <Fragment>
      <NavLink to={`${link}`} className="portfolio-card">
        <img  src={`${image}`} alt={`${alt}`} />
        <aside className="portfolio-card-info">
          <div>
            <h3>{`${title}`}</h3>
            <p>
              {`${text}`}
            </p>
          </div>
        </aside>
      </NavLink>
    </Fragment>
  );
};

export default CartPortfolio;
