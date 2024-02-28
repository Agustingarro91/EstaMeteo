import Hero from "./Hero/Hero.jsx";
import "../../index.css";
import Acerca from "../Acerca/Acerca.jsx";
import Servicios from "../Servicios/Servicios.jsx";
import Portfolio from "../Portfolio/Portfolio.jsx";
import Modal from "../Modal/Modal.jsx";
import { ventajas, desventajas } from "../../assets/informacion.js"
import Contact from "../Contact/Contact.jsx";

const Home = () => {




  return (
    <main>
      <Hero
        image={"url('src/assets/hero-image-home.jpg')"}
        attachment={"fixed"}
        opacity={"var(--black-alpha-color)"}
        title={"var(--white-color)"}
        id={"inicio"}
        classe={"home"}
      />
      <Acerca/>
      <Servicios title="Ventajassdfgsdg" arr={ventajas}/>
      <Servicios title="Desventajas" arr={desventajas}/>
      <Portfolio/>
      <Modal/>
      <Hero
        image={"url('src/assets/hero-image-home.jpg')"}
        attachment={"scroll"}
        opacity={"var(--white-alpha-color)"}
        title={"var(--white-color)"}
        id={"testimonios"}
        classe={"testimonials"}
      />
      <Contact/>
      
      
    </main>
  );
};

export default Home;
