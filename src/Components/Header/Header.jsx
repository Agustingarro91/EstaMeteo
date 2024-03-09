import { useEffect, useState } from "react";
import "../../index.css";
import { marcas, reseñas, tipos } from "../../informacion";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [button, setButton] = useState({
    btn: false,
    marcas: false,
    tipos: false,
    reseñas: false,
    subMenu: false,
  });





  return (
    <header className="header">
      <section className="container">
        <div className="logo">
          <NavLink onClick={() =>
            setButton({
              btn:false,
              reseñas: false,
              marcas: false,
              tipos: false,
            })
          }       to="/">Weather Station</NavLink>
        </div>
        <button
          className="menu-btn"
          onClick={() =>
            setButton({
              ...button,
              marcas: false,
              tipos: false,
              reseñas: false,
              btn: !button.btn,
            })
          }
        >
          <svg
            className={`${button.btn && "none"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M4 6H20V8H4zM4 11H20V13H4zM4 16H20V18H4z" />
          </svg>
          <svg
            className={`${!button.btn && "none"}`}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z" />
          </svg>
        </button>
        <nav className={`${button.btn ? "menu is-active" : "menu"}`}>
          <div
            onClick={() =>
              setButton({
                ...button,
                marcas: !button.marcas,
                tipos: false,
                reseñas: false,
              })
            }
          >
            Marcas
            <div
              className={`${
                button.btn && button.marcas ? "sub-menu is-active" : "sub-menu"
              }`}
            >
              {marcas.map((marcas) => {
                return (
                  <NavLink key={marcas.marca} to={marcas.link}>
                    {marcas.marca}
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div
            onClick={() =>
              setButton({
                ...button,
                tipos: !button.tipos,
                marcas: false,
                reseñas: false,
              })
            }
          >
            Tipos
            <div
              className={`${
                button.btn && button.tipos ? "sub-menu  is-active" : "sub-menu"
              }`}
            >
              {tipos.map((tipos) => {
                return (
                  <NavLink key={tipos.tipo} to={tipos.link}>
                    {tipos.tipo}
                  </NavLink>
                );
              })}
            </div>
          </div>
          <div
            onClick={() =>
              setButton({
                ...button,
                reseñas: !button.reseñas,
                marcas: false,
                tipos: false,
              })
            }
          >
            Reseñas
            <div                      
              className={`${
                button.btn && button.reseñas
                  ? "sub-menu  is-active"
                  : "sub-menu"
              }`}
            >
              {reseñas.map((reseñas, i) => {
                return (
                  <NavLink                           
                   key={i} to={reseñas.link}>
                    {reseñas.reseña}
                  </NavLink>
                );
              })}
            </div>
          </div>
          <NavLink   
          onClick={() =>
            setButton({
              btn:false,
              reseñas: false,
              marcas: false,
              tipos: false,
            })
          }        
            to="/contacto"
          >
            Contacto
          </NavLink>
        </nav>
      </section>
    </header>
  );
};

export default Header;
