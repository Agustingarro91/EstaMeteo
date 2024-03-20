const CardTesti = ({ heroImageOpacity }) => {
  return (
    <aside className="hero-image-opacity hero-image-opacity-customer" style={heroImageOpacity}>
      <div className="hero-image-content">
        <div className="container">
          <h2 className="section-title">Opiniones</h2>
          <article className="carousel" style={heroImageOpacity}>
            <input type="radio" name="slides" id="slide-1" />
            <input type="radio" name="slides" id="slide-2" />
            <input type="radio" name="slides" id="slide-3" />
            <input type="radio" name="slides" id="slide-4" />
            <ul className="slides">
              <li className="slide">                
                <h3 className="text-first-color">NOMBRE DEL CLIENTE</h3>
                <blockquote>
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Asperiores quisquam totam voluptatem atque ad nisi voluptate
                  temporibus enim fuga, error beatae iusto eveniet? Labore
                  nesciunt atque vitae est impedit eaque."
                </blockquote>
              </li>
              <li className="slide">
                <img
                  className="avatar"
                  src="assets/customer-2.jpg"
                  alt="Cliente 2"
                />
                <blockquote>
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Asperiores quisquam totam voluptatem atque ad nisi voluptate
                  temporibus enim fuga, error beatae iusto eveniet? Labore
                  nesciunt atque vitae est impedit eaque."
                </blockquote>
                <h3 className="text-first-color">NOMBRE DEL CLIENTE</h3>
                <h6>Puesto del Cliente</h6>
              </li>
              <li className="slide">
                <img
                  className="avatar"
                  src="assets/customer-1.jpg"
                  alt="Cliente 1"
                />
                <blockquote>
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Asperiores quisquam totam voluptatem atque ad nisi voluptate
                  temporibus enim fuga, error beatae iusto eveniet? Labore
                  nesciunt atque vitae est impedit eaque."
                </blockquote>
                <h3 className="text-first-color">NOMBRE DEL CLIENTE</h3>
                <h6>Puesto del Cliente</h6>
              </li>
              <li className="slide">
                <img
                  className="avatar"
                  src="assets/customer-2.jpg"
                  alt="Cliente 2"
                />
                <blockquote>
                  "Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Asperiores quisquam totam voluptatem atque ad nisi voluptate
                  temporibus enim fuga, error beatae iusto eveniet? Labore
                  nesciunt atque vitae est impedit eaque."
                </blockquote>
                <h3 className="text-first-color">NOMBRE DEL CLIENTE</h3>
                <h6>Puesto del Cliente</h6>
              </li>
            </ul>
            <aside className="slides-nav">
              <label htmlFor="slide-1" id="dot-1"></label>
              <label htmlFor="slide-2" id="dot-2"></label>
              <label htmlFor="slide-3" id="dot-3"></label>
              <label htmlFor="slide-4" id="dot-4"></label>
            </aside>
          </article>
        </div>
      </div>
    </aside>
  );
};

export default CardTesti;
