import { Fragment } from "react";
import { useModal } from "./useModal";
import Modal from "./Modal";

const Modals = () => {
  const [isOpenModal1, openModal1, closeModal1] = useModal(false);
  const [isOpenModal2, openModal2, closeModal2] = useModal(true);
  const [isOpenModal3, openModal3, closeModal3] = useModal(false);

  return (
    <section>
      {/* <div className="modal-float btn" onClick={openModal3}>Modal 1</div> */}
      <Modal isOpen={isOpenModal1} closeModal={closeModal1}>
        <h3>Modal 1</h3>
        <p>Hola ese es el contenido de mi modal 1</p>
      </Modal>
      <Modal isOpen={isOpenModal2} closeModal={closeModal2}>
        <h3> Cookies </h3>
        <p>
          Utilizamos cookies propias y de terceros para analizar nuestros
          servicios y mostrarte publicidad relacionada con tus preferencias en
          base a un perfil elaborado a partir de tus hábitos de navegación (por
          ejemplo, páginas visitadas). Puedes obtener más información y
          configurar tus preferencias
        </p>
        <div>
          <div onClick={() => {openModal3(), closeModal2()}}  className="btn">Rechazar</div>
          <div onClick={closeModal2} className="btn">Aceptar</div>
        </div>
      </Modal>
      <Modal isOpen={isOpenModal3 } closeModal={closeModal3}>
        <h3>Resumen de privacidad</h3>
        <p>
          Utilizamos cookies propias y de terceros para analizar nuestros
          servicios y mostrarte publicidad relacionada con tus preferencias en
          base a un perfil elaborado a partir de tus hábitos de navegación (por
          ejemplo, páginas visitadas). La información de las cookies se almacena
          en tu navegador y realiza funciones tales como reconocerte cuando
          vuelves a nuestra web o ayudar a nuestro equipo a comprender qué
          secciones de la web encuentras más interesantes y útiles.{" "}
        </p>
        <h3>Cookies estrictamente necesarias</h3>
        <p>
          Utilizadas para finalidades muy diversas, como, por ejemplo,
          reconocerte como usuario, elegir el idioma, o personalizar la forma en
          que se muestra el contenido. Sin esta las funciones básicas de
          navegación se verán perjudicadas, por eso deben estar siempre activas.
        </p>
        <h3>Cookies de Terceros</h3>
        <p>Esta web utiliza Google Analitycs tal como el numero de visitantes del sitio, o las paginas mas populares. <br />
        Dejar esta cookie activa nos permite mejorar nuestra web</p>
      </Modal>
    </section>
  );
};

export default Modals;
