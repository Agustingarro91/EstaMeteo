const CardCluster = ({ link, img, titulo }) => {
  return (
    <a href={link}className="card-cluster">
      
        <img src={img} alt="" />
        <h3>
          {titulo}
        </h3>
      
    </a>
  );
};

export default CardCluster;
