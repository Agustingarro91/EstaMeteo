import { Fragment } from "react";
import { Helmet } from "react-helmet";

const PoliticasDeCookies = () => {
  const dominio = "tudominio.com";
  const correoElectronico = "correo electronico";

  return (
    <Fragment>
      <Helmet>
      <meta name="robots" content="noindex, nofollow"></meta>
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
        <h1>POLITICA DE COOKIES</h1>
        <article>
          <h2>Consideraciones previas</h2>
          <p>
            Se entenderá por usuario toda persona que navegue en el sitio web
            {dominio} en lo adelante, simplemente el sitio web. <br />
            Se entenderá por editor el dueño del sitio web, quien es Alejandro
            Agustin Diaz Garro y está identificado en el aviso legal. <br />
            Las cookies utilizadas en el navegador del usuario se han instalado
            con su autorización. Si en algún momento desea revocar esta
            autorización, podrá hacerlo sin obstáculo alguno. Para ello puede
            visualizar la sección{" "}
            <strong>Desactivación o eliminación de cookies</strong>, que se
            encuentra descrita en estas políticas. <br />
            El Editor está en total libertad de realizar los cambios que
            considere pertinentes en el sitio web. Para ello podrá añadir
            apartados, funcionalidades o cualquier elemento que quizás pueda
            generar el uso de nuevas cookies, por lo que se aconseja al usuario
            que verifique la presente política de cookies cada vez que acceda al
            sitio web, para que pueda mantenerse actualizado por cualquier
            cambio que se pueda haber dado desde la última visita realizada.
          </p>
          <h2>Definición y función de las cookies</h2>
          <p>
            Las cookies son informaciones que se almacenan en el navegador del
            usuario de un sitio web para poder consultar la actividad previa que
            ha tenido, así como recordar ciertos datos para una próxima visita.
            También pueden ser llamadas web beacons, píxel, bugs, rastreadores,
            pero a efectos de estas políticas, se entenderán solamente como
            cookies. <br />
            Suelen almacenar datos de carácter técnico, estadísticas de uso,
            personalización de perfiles, enlaces a redes sociales,
            administración de preferencias personales, entre otras funciones,
            con el fin de poder adaptar el sitio web a las necesidades y
            configuraciones del usuario, mejorando así la experiencia de la
            navegación, el no aceptarlas podría entorpecer el servicio que el
            sitio web desea ofrecer. <br />
            No son archivos de virus, spam, troyanos, gusanos, spyware, ni
            programación publicitaria ya sea estática en la página o en formato
            de ventana emergente (pop-up). <br />
            La información almacenada se refiere al navegador (Internet
            Explorer, Safari, Chrome, Firefox, etc.), y no al usuario, para
            constatar esto puede entrar en el mismo dominio web y verificar en
            dos navegadores diferentes que puede configurar diferentes
            preferencias en cada uno.
          </p>

          <h2>Tipos de cookies según la entidad que las gestiona</h2>
          <p>Las cookies pueden ser:</p>
          <ol>
            <li>
              <strong>Propias:</strong> cuando son gestionadas por el propio
              editor del sitio web. Se envían al equipo terminal del usuario
              desde un equipo o dominio gestionado por el propio editor y desde
              el que se presta el servicio solicitado por el usuario.
            </li>
            <li>
              <strong>De terceros:</strong> cuando son gestionadas por una
              personas física o jurídica diferente al editor.
            </li>
          </ol>

          <p>Este sitio web utiliza cookies propias y de terceros.</p>
        </article>
        <article>
          <h2>Tipos de cookies según su finalidad</h2>
          <p>Dependiendo de la función que cumplan, las cookies pueden ser:</p>
          <ol>
            <li>
              <strong>Técnicas:</strong> Permiten la gestión operativa del sitio
              web, para que el usuario pueda navegar sin problema en el mismo.
              Pueden ayudar a controlar el tráfico y la comunicación de datos,
              identificar la sesión, acceder a partes de acceso restringido,
              recordar los elementos que integran un pedido, realizar el proceso
              de compra de un producto o servicio, gestionar el pago, controlar
              el fraude, realizar la solicitud de inscripción o participación en
              un evento, utilizar elementos de seguridad durante la navegación,
              almacenar contenidos para la difusión de vídeos o sonido,
              habilitar contenidos dinámicos (por ejemplo, animación de carga de
              un texto o imagen) o compartir contenidos a través de redes
              sociales, entre muchas otras funciones que puede tener.
            </li>
            <li>
              <strong>De preferencias o personalización:</strong> son aquellas
              que permiten recordar información para que el usuario navegue en
              el sitio web con determinadas características personalizadas,
              como, por ejemplo, el idioma, el número de resultados a mostrar
              cuando el usuario realiza una búsqueda, el aspecto o contenido del
              sitio web en función del tipo de navegador del usuario, colores de
              fondo empleados, imagen de perfil, entre otras.
            </li>
            <li>
              <strong>De análisis o medición:</strong> permiten el seguimiento y
              análisis del comportamiento de los usuarios en el sitio web y en
              otros que sean propiedad del gestor de las cookies, por ejemplo,
              el tiempo que demoran en una determinada página, las horas y días
              de mayor tráfico.
            </li>
            <li>
              <strong>De publicidad comportamental:</strong> son aquellas que
              almacenan información del comportamiento de los usuarios obtenida
              a través de la observación continuada de sus hábitos de
              navegación, lo que permite desarrollar un perfil específico para
              mostrar publicidad en función de este. La intención es mostrar
              anuncios relevantes y atractivos para el usuario.
            </li>
            <li>
              <strong>Publicitarias: </strong>Son aquéllas que permiten la
              gestión, de la forma más eficaz posible, de los espacios
              publicitarios que el sitio web posea, con base a criterios como el
              contenido editado o la frecuencia en la que se muestran los
              anuncios.
            </li>
          </ol>
          <p>
            Este sitio web utiliza cookies técnicas, de personalización, de
            análisis, de publicidad y de publicidad comportamental. <br />
            Algunas cookies pueden ser polivalentes, es decir, cumplir con 2 o
            más funciones.
          </p>
        </article>
        <article>
          <h2>Tipos de cookies según su duración:</h2>
          <p>
            Según el plazo de tiempo que permanecen activadas en el equipo
            terminal, las cookies pueden ser:
          </p>
          <ul>
            <li>
              <strong>De sesión:</strong> Son un tipo de cookies diseñadas para
              recabar y almacenar datos mientras el usuario accede a una página
              web. Se suelen emplear para almacenar información que solo
              interesa conservar para la prestación del servicio solicitado por
              el usuario en una sola ocasión y desaparecen al terminar la
              sesión, por ejemplo, una lista de productos elegidos, una
              selección determinada de fotografías, etc.
            </li>
            <li>
              <strong>Persistentes:</strong> Son un tipo de cookies en el que
              los datos siguen almacenados en el terminal y pueden ser accedidos
              y tratados durante un período definido por el responsable de la
              cookie, y que puede ir de unos minutos a varios años.
            </li>
          </ul>
        </article>
        <article>
          <h2>Consecuencias de desactivar las cookies</h2>
          <p>
            A manera de ejemplo, los posibles efectos por no autorizar el uso de
            cookies pueden ser los siguientes:
          </p>
          <ul>
            <li>
              No se cargarán los productos elegidos en la tienda, por lo que no
              se creará un carro de compras, impidiendo la posibilidad de
              finalizar con la adquisición de los productos deseados
            </li>
            <li>
              No podrá acceder al área de cliente, área personal, ni ninguna que
              requiera de la confirmación
            </li>
            <li>
              No se podrán recoger los datos necesarios para analizar el sitio
              web, impidiendo al editor saber cómo mejorar
            </li>
            <li>
              No podrá compartir el contenido del sitio web en redes sociales
              tales como Facebook, Twitter, Instagram, entre otros.
            </li>
            <li>No podrá realizar comentarios en el blog</li>
            <li>
              No podrá usar ninguna red social, ya que todas usan cookies para
              poder ofrecer su servicio.
            </li>
            <li>
              No se podrá mostrar publicidad de terceros, disminuyendo los
              ingresos para quien use esta modalidad
            </li>
            <li>
              En determinados sitios de dominios web podrá considerarse su
              navegación como spam por no poder ser identificada
            </li>
            <li>Varios. Esta lista es meramente enunciativa, no limitativa.</li>
          </ul>
          <p>
            Si el usuario ha eliminado las cookies, y desea navegar nuevamente
            en este sitio web, deberá aceptar una vez más las cookies.
          </p>

          <h2>Cookies utilizadas en este sitio web</h2>
          <p>
            Este sitio web hace uso de las siguientes cookies: técnicas, de
            personalización, de análisis, de publicidad comportamental. <br />
            Utilizamos el plugin GDPR Cookie Compliance, el cual activa por
            tiempo limitado la cookie moove_gdpr_popup, para poder almacenar la
            intención de consentimiento del usuario con relación a la
            instalación de cookies. Esta cookie es necesaria para el buen
            funcionamiento del sitio web. <br />A continuación, se detallan las
            cookies que utiliza este sitio web, sin embargo, debido a la
            imposibilidad técnica que esto puede generar, no se puede mostrar
            con exactitud las cookies utilizadas por terceros, pero se ha hecho
            el mayor esfuerzo para que el usuario tenga toda la información
            necesaria <br />
            <strong>ACA VA EL CUADRO de la pagina</strong>
          </p>
        </article>
        <article>
          <h2>Desactivación o eliminación de cookies</h2>
          <p>
            En cualquier momento el usuario podrá ejercer su derecho a negarse a
            las cookies y podrá en consecuencia desactivarlas o eliminarlas,
            salvo aquellas que sean necesarias para el funcionamiento del sitio
            web. <br />
            El usuario podrá eliminar y/o bloquear las cookies, para toda
            navegación que realice o para un dominio web determinado. Esta
            configuración debe realizarla en cada navegador, si lo hace en un
            navegador y no en los restantes del mismo dispositivo, se asumirá
            que en los otros si acepta el uso de cookies. El Editor no puede
            realizar esta acción por el usuario, deberá realizarla él de forma
            responsable y particular en cada navegador y/o dispositivo que así
            lo desee. <br />
            Como cada navegador posee configuraciones diferentes, el usuario
            deberá dirigirse a la parte de ayuda de cada uno para ver el caso en
            particular. En esta sección se hace mención a los más comunes, no
            obstante por actualizaciones de los navegadores o del sistema
            operativo que esté utilizando, esto puede variar. El usuario siempre
            deberá acudir a los manuales de uso de su navegador, esta guía es
            meramente orientativa.
          </p>
          <ul>
            <li>
              <strong>Chrome:</strong> Ir a Menú - Configuración (en Mac:
              Preferencias) - Ajustes Avanzados - Privacidad - Aquí elige si
              configurar las cookies o eliminar las cookies existentes. Para más
              información puede  <a href="https://support.google.com/chrome/answer/95647?hl=es">visitar la ayuda de Chrome.</a>
              
            </li>
            <li>
              <strong>Internet Explorer:</strong> Ir a Herramientas - Opciones
              de Internet - Privacidad - Privacidad - Configuración - Opciones
              avanzadas. Configure lo deseado. Para más información puede 
              <a href="https://support.microsoft.com/es-es/help/17442/windows-internet-ex
              plorer-delete-manage-cookies"> visitar la sección de ayuda propia del navegador</a>
            </li>
            <li>
              <strong>Firefox:</strong> Ir a Menú - Preferencias - Privacidad -
              Mostrar cookies - Configurar según lo que desee. Para más
              información puede visitar la sección de ayuda del navegador
              <a href="https://www.mozilla.org/es-ES/privacy/websites/#cookies"> visitar la sección de ayuda del navegador</a>
            </li>
            <li>
              <strong>Safari: </strong> Safari - Preferencias - Privacidad -
              Realice la configuración deseada. Para más información puede               
              <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"> visitar la ayuda de Apple</a>
            </li>
          </ul>

          <h2>Avisos relacionados con las cookies</h2>
          <p>
            El Editor no se hace responsable por los fallos técnicos que el
            usuario pueda encontrar en el sitio web o en su navegador por
            manipular de manera errónea la desactivación o eliminación de las
            cookies, en todo momento deberá el usuario verificar la información
            sobre su desactivación o eliminación en la sección de ayuda del
            navegador que le corresponda. El usuario asume la responsabilidad de
            eliminar o desactivar las cookies en su navegador y en por ende,
            asume las consecuencias que se deriven de esto. <br />
            En todo momento el usuario podrá comunicarse con El Editor a través
            del
            {correoElectronico}.
          </p>
        </article>
      </section>
    </Fragment>
  );
};

export default PoliticasDeCookies;
