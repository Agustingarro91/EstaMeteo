



const CardModal = ({id, text, image,alt, title}) => {



    return(


        <article className="modal" id={id}>
        <div className="modal-content">
          <a href="#cerrar" className="modal-close">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M12,2C6.486,2,2,6.486,2,12s4.486,10,10,10s10-4.486,10-10S17.514,2,12,2z M16.207,14.793l-1.414,1.414L12,13.414 l-2.793,2.793l-1.414-1.414L10.586,12L7.793,9.207l1.414-1.414L12,10.586l2.793-2.793l1.414,1.414L13.414,12L16.207,14.793z" />
            </svg>
          </a>
          <article className="portfolio-modal">
            <img src={image} alt={alt} />
            <div className="portfolio-info">
              <h3>{title}</h3>
              <p>
                {text}
              </p>
              <aside className="portfolio-details">
                <small>
                  <b>CLIENTE:</b>
                </small>
                <small>Nombre del Cliente</small>
                <small>
                  <b>FECHA:</b>
                </small>
                <small>24/12/2020</small>
                <small>
                  <b>TIPO:</b>
                </small>
                <small>Tipo de Proyecto</small>
                <small>
                  <b>ENLACE:</b>
                </small>
                <small>
                  <a href="https://proyecto.com" target="_blank" rel="noopener">
                    https://proyecto.com
                  </a>
                </small>
              </aside>
            </div>
          </article>
        </div>
      </article>
    )
}

export default CardModal;