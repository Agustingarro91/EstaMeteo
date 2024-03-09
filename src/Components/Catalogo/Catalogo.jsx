import CardCatalogo from "./CardCatalogo";

const Catalogo = ({ children }) => {
  return (
    <section className="catalogo-section container">
        {children}
    </section>
  );
};

export default Catalogo;
