import CardServ from "./CardServ";

const Servicios = ({title, arr}) => {


  return (
    <section id="servicios" className="services section bg-gray-light">
      <div className="container full-lg-screen">
        <h2 className="section-title">{title}</h2>
        {arr.map((serv) => {
          return(
            <CardServ key={serv.title} title={serv.title} text={serv.text}/>
          )
        })}
      </div>
    </section>
  );
};

export default Servicios;
