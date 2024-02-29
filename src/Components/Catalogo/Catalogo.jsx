import CardCatalogo from "./CarCatalogo";


const Catalogo = ({ catalogo }) => {
  return (
    <section>
      <h2>Catalogo de Estaciones Meteorologicas al mejor precio</h2>
      {catalogo.map((cata) => <CardCatalogo catalgo={cata}/>
      )}
    </section>
  );
};

export default Catalogo;
