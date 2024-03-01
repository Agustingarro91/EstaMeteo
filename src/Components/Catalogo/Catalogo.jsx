import CardCatalogo from "./CardCatalogo";

const Catalogo = ({ catalogo }) => {
  return (
    <section className="catalogo-section container">
        <h2 className="section-title">Catalogo de Estaciones Meteorologicas al mejor precio</h2>
      <article className="catalogo ">
        {catalogo.map((catalogo) => (
          <CardCatalogo key={catalogo.id} catalogo={catalogo} />
        ))}
      </article>
    </section>
  );
};

export default Catalogo;
