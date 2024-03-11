import { Fragment } from "react"


const PoliticasDeCookies = () =>{
    const dominio = "tudominio.com";
    const correoElectronico = "correo electronico";

    return(
        <Fragment>
            <section>
                <h1>POLITICA DE COOKIES</h1>
                <article>
                    <h2>Consideraciones previas</h2>
                    <p>Se entenderá por usuario toda persona que navegue en el sitio web
{dominio} en lo adelante, simplemente el sitio web.
Se entenderá por editor el dueño del sitio web, quien es TU NOMBRE y está
identificado en el aviso legal.
</p>
                </article>
            </section>
        </Fragment>
    )
}

export default PoliticasDeCookies;