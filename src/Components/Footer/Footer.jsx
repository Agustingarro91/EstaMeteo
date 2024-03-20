import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <address>
      <NavLink to={"aviso-legal"}> Aviso Legal</NavLink> 
      <NavLink to={"politicas-de-privacidad"}> Politica de Privacidad</NavLink>
      <NavLink to={"politicas-de-cookies"}> Politica de Cookies</NavLink>
      </address>
      <a href="https://agustindiazgarro.top" target="_blank" rel="noopener">
        <small>Sitio diseñado por @AgusDG</small>
      </a>
    </footer>
  );
};

export default Footer;
