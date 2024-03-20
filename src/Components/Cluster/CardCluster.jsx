import { NavLink } from "react-router-dom";

const CardCluster = ({ link, img, titulo }) => {
  return (
    <NavLink to={link} className="card-cluster">
      
        <img src={img} alt={titulo} />
        <h3>
          {titulo}
        </h3>
      
    </NavLink>
  );
};

export default CardCluster;
