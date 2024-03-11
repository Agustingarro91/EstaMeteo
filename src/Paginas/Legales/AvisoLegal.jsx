import { Fragment } from "react";
import { Helmet } from "react-helmet";

const AvisoLegal = () => {
  const dominio = "tudominio.com";
  const correoElectronico = "correo electronico";
  return (
    <Fragment>
      <Helmet>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" type="image/svg+xml" href="/assets/favicon.svg" />

        <title>Agustin Diaz Garro</title>

        <meta name="description" content="Estamos cerca de lgrarlo" />

        <link rel="canonical" href="./" />

        <link rel="favicon" href="/assets/favicon.svg" />
        <link
          rel="apple-touch-icon"
          href="https://jonmircha.github.io/youtube-taller-maquetacion/portafolio-cv/assets/favicon.png"
        />
        <meta name="theme-color" content="#d9006" />
        {/* Nos deja cambiar el color del navegador */}

        {/* Metas para Redes sociales */}
        <meta name="twitter:card" content="summary" />
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          name="twitter:title"
          content="Agustin Diaz Garro"
        />
        <meta
          property="og:description"
          name="twitter:description"
          content="Hola bienvenid@ a mi Portafolio Profesional, soy Jonathan MirCha, Desarrollador Web"
        />
        <meta
          property="og:image"
          name="twitter:image"
          content="https://jonmircha.github.io/youtube-taller-maquetacion/portafolio-cv/assets/hero-image-home.jpg"
        />
        <meta
          property="og:url"
          name="twitter:url"
          content="https://jonmircha.github.io/youtube-taller-maquetacion/portafolio-cv"
        />
      </Helmet>
      <section className="container legales">
        <h1>AVISO LEGAL</h1>
        <article>
          <h2>DATOS IDENTIFICATIVOS</h2>
          <p>
            De acuerdo con la exigencia legal establecida, se cumple con la
            obligación de informar a todos los usuarios e interesados que la
            responsabilidad y titularidad del dominio web {dominio}, así como
            las redes sociales y el sitio web asociadas, en lo adelante el
            “sitio web” le pertenecen a Alejandro Agustin Diaz Garro, DNI
            35838136, con domicilio en Mendoza, Ciudad, Argentina, en lo
            adelante EL GESTOR DEL SITIO WEB, y cuyo correo electrónico de
            contacto es {correoElectronico}.
          </p>
        </article>
        <article>
          <h2>TÉRMINOS Y CONDICIONES</h2>
          <h3>USO Y APLICACIÓN</h3>
          <p>
            Los presentes términos y condiciones aplican tanto para la página
            principal de
            {dominio} como para aquellas otras que hayan sido creadas por EL
            GESTOR DEL SITIO WEB e indiquen de manera expresa e inequívoca que
            forman parte integrante de este sitio web.
          </p>
          <h3>USUARIOS</h3>
          <p>
            Se entenderá por usuario a toda aquella persona que navegue por el
            sitio web, accediendo a cualquiera de sus páginas o secciones,
            bastando con el simple acceso y/o uso de este sitio web, aceptando
            desde dicho acceso y/o uso, los términos y condiciones aquí
            reflejados. <br />
            En caso de que el usuario desee contratar alguno de los servicios
            ofrecidos en el sitio web, se aplicarán también las políticas de
            contratación, las cuales serán de obligatorio cumplimiento.
          </p>

          <h3>FORMAS DE CONTACTO</h3>
          <p>
            Si un usuario deseara contactar al GESTOR DEL SITIO WEB podrá enviar
            un correo electrónico a la dirección {correoElectronico}.
          </p>
          <h3>USO DEL SITIO WEB</h3>
          <p>
            Toda la información gráfica, textual, de multimedia, fotografías,
            imágenes, videos, o cualquier otro formato de archivo digital que se
            encuentran en el sitio web, entendidos de aquí en adelante como “los
            contenidos”, le pertenecen al EL GESTOR DEL SITIO WEB y está
            protegido por las leyes de derecho de autor a nivel nacional e
            internacional. <br />
            El usuario asume la responsabilidad del uso del sitio web, no
            pudiendo emplearlos para:
          </p>
          <ol>
            <li>
              Realizar actividades ilícitas, ilegales o contrarias a la moral,
              buenas costumbres, buena fe y al orden público;
            </li>
            <li>
              Realizar comentarios o difundir contenidos o propaganda de
              carácter racista, xenófobo, pornográfico, de apología del
              terrorismo, que atente contra los derechos humanos o civiles en
              general;{" "}
            </li>
            <li>
              Provocar daños en la persona física, intelectual o moral del
              GESTOR DEL SITIO WEB, de sus proveedores o de terceras personas;{" "}
            </li>
            <li>
              Introducir o difundir en la red virus informáticos o cualesquiera
              otros sistemas físicos o lógicos que sean susceptibles de provocar
              los daños anteriormente mencionados;
            </li>
            <li>
              Intentar acceder y/o utilizar las cuentas de correo electrónico de
              otros usuarios y modificarlos o manipular sus mensajes.
            </li>
          </ol>
          <p>
            EL GESTOR DEL SITIO WEB se reserva el derecho de retirar todos
            aquellos comentarios que vulneren el respeto a la dignidad de la
            persona, que sean discriminatorios, xenófobos, racistas,
            pornográficos, que atenten contra la juventud o la infancia, el
            orden o la seguridad pública o que, a su juicio, no resultaran
            adecuados para su publicación. En cualquier caso, EL GESTOR DEL
            SITIO WEB no será responsable de las opiniones dadas por los
            usuarios en cualquier herramienta de opinión que contenga el sitio
            web.
          </p>
          <h3>PROPIEDAD INTELECTUAL</h3>
          <p>
            EL GESTOR DEL SITIO WEB es el titular de todos los derechos de
            propiedad intelectual e industrial del sitio web, así como de los
            elementos contenidos en la misma, los cuales, a título enunciativo,
            pero no limitativo, son: imágenes, sonido, fotografías, audio,
            vídeo, software, textos, marcas, logotipos, combinaciones de
            colores, estructura, diseño, selección de materiales usados,
            programas necesarios para su funcionamiento, acceso y uso, quedando
            expresamente prohibida la reproducción, distribución y comunicación
            pública, incluida su modalidad de puesta a disposición, de la
            totalidad o parte de los contenidos del sitio web, en cualquier
            soporte y por cualquier medio técnico, con o sin fines comerciales
            sin la autorización del GESTOR DEL SITIO WEB. <br />
            El usuario se compromete a respetar los derechos de autor
            titularidad del GESTOR DEL SITIO WEB, podrá en consecuencia
            visualizar, imprimir, almacenar en un dispositivo electrónico o
            virtual, pero única y exclusivamente para su uso personal y privado,
            no pudiendo en ningún momento distribuirlos, reproducirlos, onerosa
            o gratuitamente, a terceros ni realizar transformación alguna de los
            mismos. En todo caso, deberá siempre hacer mención a la autoría del
            GESTOR DEL SITIO WEB y al sitio web cuando decida compartir en
            cualquier red social alguno de los contenidos, no pudiendo en ningún
            momento modificar, total o parcialmente, cualquiera de los
            contenidos. <br />
            No se podrá compartir ningún extracto de un curso, libro, entrada
            del blog o de cualquier parte del sitio web, ya sea incluso una
            mención a terceros.
          </p>
          <h3>EXCLUSIÓN DE GARANTÍAS Y RESPONSABILIDAD</h3>
          <p>
            EL GESTOR DEL SITIO WEB ha adoptado todas las medidas tecnológicas,
            necesarias en el sitio web, para evitar daños y perjuicios de
            cualquier naturaleza que pudieran ocasionar, a título enunciativo:
            errores u omisiones en los contenidos, falta de disponibilidad del
            sitio web o la transmisión de virus o programas maliciosos o lesivos
            en los contenidos o en los datos de los usuarios, y no se hace
            responsable si en algún momento una de estas medidas falla como
            consecuencia de un uso indebido y/o abusivo por parte de un tercero.{" "}
            <br />
            El usuario deberá en todo momento abstenerse de suprimir, alterar,
            eludir o manipular cualquier dispositivo de protección o sistema de
            seguridad que estuviera instalado en el sitio web.
          </p>
          <h3>MODIFICACIONES</h3>
          <p>
            EL GESTOR DEL SITIO WEB se reserva el derecho de efectuar, sin
            previo aviso, las modificaciones que considere oportunas en el sitio
            web, pudiendo cambiar, suprimir o añadir tanto los contenidos y
            servicios que se presten a través de la misma, como la forma en la
            que éstos aparezcan presentados o localizados, así como el diseño y
            estructura del mismo.
          </p>

          <h3>ENLACES</h3>
          <p>
            EL GESTOR DEL SITIO WEB no tiene control alguno sobre los enlaces
            y/o contenidos externos que puedan existir en el sitio web, por lo
            que no se hace responsable por los mismos, ni garantizará la
            disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud,
            veracidad o validez de cualquier material o información allí
            contenida, y no serán entendidos estos enlaces externos como una
            posible asociación, fusión, colaboración o participación con el
            titular y/o responsable del dominio web al cual estén asociados.
          </p>
          <h3>ENLACES DE AFILIADOS</h3>
          <p>
            Este sitio web posee enlaces de afiliación hacia Amazon. Al momento
            de hacer clic en ellos se dirigirá a su plataforma y de realizar
            alguna compra, será Amazon la encargada de procesar la compra, y EL
            GESTOR DEL SITIO WEB en su calidad de afiliado, obtendrá ingresos
            por las compras que sean derivadas por el uso de los enlaces que
            cumplan con los requisitos aplicables.
          </p>
          <h3>DERECHO DE EXCLUSIÓN</h3>
          <p>
            EL GESTOR DEL SITIO WEB se reserva el derecho a denegar o retirar el
            acceso al sitio web y/o los servicios ofrecidos sin necesidad de
            preaviso, a instancia propia o de un tercero, a aquellos usuarios
            que incumplan los presentes términos y condiciones.
          </p>
          <h3>GARANTIA DE RESULTADOS</h3>
          <p>
            EL GESTOR DEL SITIO WEB no se hará responsable por el éxito o
            fracaso de los usuarios en la aplicación de la información que
            reciban del sitio web o de los servicios que ofrece EL GESTOR DEL
            SITIO WEB. El usuario será el único responsable por la aplicación de
            lo aprendido con el material suministrado por EL GESTOR DEL SITIO
            WEB. <br />
            Los contenidos que se suministran, se imparten de manera
            informativa, no queriendo en ningún momento EL GESTOR DEL SITIO WEB
            sustituir alguna asesoría profesional personalizada que el usuario,
            cliente o participante requiera en un tema determinado, y no se hará
            responsable por los problemas que pueda tener éste por un uso,
            correcto o no, de la información suministrada o por no tomar en
            cuenta problemas de salud, ideológicos, económicos o de cualquier
            otra índole que pudieran ser afectados por el contenido que se
            encuentre en de forma gratuita o no expuesto dentro del sitio web.
          </p>
          <h3>RESOLUCIÓN DE LITIGIOS EN LÍNEA</h3>
          <p>
            El usuario o el cliente podrá escribir a {correoElectronico} para
            resolver cualquier problema que tenga con el sitio web o con el
            servicio prestado. También podrá utilizar la plataforma europea de
            Resolución de Litigios en Línea
            <a href="https://ec.europa.eu/consumers/odr/main/index.cfm?event=main.home.chooseLanguage" target="_blank">
             <strong> aquí</strong> 
            </a>
          </p>
        </article>

        <h2>MODIFICACIÓN DEL PRESENTE AVISO LEGAL Y DURACIÓN</h2>
        <p>
          EL GESTOR DEL SITIO WEB podrá modificar, en cualquier momento, los
          términos y condiciones aquí expuestos, sin previo aviso y estarán
          vigentes mientras se encuentren debidamente publicadas.
        </p>
        <h2>ACCIONES LEGALES</h2>
        <p>
          EL GESTOR DEL SITIO WEB puede, en cualquier momento, ejercer acciones
          legales de carácter civil o penal, contra cualquier persona que
          realice un uso indebido del contenido expuesto en el sitio web, o por
          incumplir con estos términos y condiciones. Se aplicará en todo
          momento la legislación del territorio de Argentina y en caso de algún
          conflicto, las partes se someterán a la jurisdicción de Mendoza,
          Argentina, por ser el domicilio del titular del sitio web.
        </p>
      </section>
    </Fragment>
  );
};

export default AvisoLegal;
