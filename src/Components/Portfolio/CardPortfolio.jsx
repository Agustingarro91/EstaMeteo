import { Fragment } from "react";

const CartPortfolio = ({title, text, trabajo, image, alt}) => {



  return (
    <Fragment>
      <a href={`#${trabajo}`} className="portfolio-card">
        <img src={`${image}`} alt={`${alt}`} />
        <aside className="portfolio-card-info">
          <div>
            <h3>{`${title}`}</h3>
            <p>
              {`${text}`}
            </p>
          </div>
        </aside>
      </a>
    </Fragment>
  );
};

export default CartPortfolio;
