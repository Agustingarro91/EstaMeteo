import { Route, Routes } from "react-router-dom";
import Wifi from "../../Paginas/Categorias/Wifi";
import FroggitHP1000Wifi from "../../Paginas/TSR/FroggitHP1000Wifi";
import Contact from "../Contact/Contact";
import Home from "../Home/Home";
import MisolHp2550Wifi from "../../Paginas/TSR/MisolHp2550Wifi";
import Profesional from "../../Paginas/Categorias/Profesional";
import Inalambrica from "../../Paginas/Categorias/Inalambrica";
import Portatil from "../../Paginas/Categorias/Portatil";
import AvisoLegal from "../../Paginas/Legales/AvisoLegal";
import PoliticasDePrivacidad from "../../Paginas/Legales/PoliticasDePrivacidad";
import PoliticasDeCookies from "../../Paginas/Legales/PoliticasDeCookies";
import Error from "../Error/Error";
import Modals from "../Modal/Modals";

const Main = () => {
  return (
    <main>
      <Modals/>
      <Routes>
        
        {/* Generales */}
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />

        {/* TSR */}
        <Route
          path="/froggit-hp-1000-se-pro-wifi"
          element={<FroggitHP1000Wifi />}
        />
        <Route path="/misol-hp-2550-wifi" element={<MisolHp2550Wifi />} />

        {/* Categorias */}
        <Route exact path="/wifi" element={<Wifi />} />
        <Route exact path="/profesional" element={<Profesional />} />
        <Route path="/inalambrica" element={<Inalambrica />} />
        <Route path="/portatil" element={<Portatil />} />


        {/* Legales */}
        <Route path="/aviso-legal" element={<AvisoLegal />} />
        <Route path="/politicas-de-privacidad" element={<PoliticasDePrivacidad />} />
        <Route path="/politicas-de-cookies" element={<PoliticasDeCookies />} />
        

        {/* Error */}
        <Route path="*" element={<Error/>} />

      </Routes>
    </main>
  );
};

export default Main;
