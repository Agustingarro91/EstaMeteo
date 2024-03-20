import { Fragment, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { formu } from "../../../informacion";
import Gracias from "./Gracias/Gracias";

function Form() {
  const form = useRef();

  const [btn, setBtn] = useState(true);
  const [email, setEmail] = useState(false);

  const sendEmail = (event) => {
    event.preventDefault();
    setBtn(false);
    setEmail(false)

    emailjs
      .sendForm("service_5q5xi1w", "template_zhg34ah", form.current, {
        publicKey: "pfbSPvLl8_a5qpuLZ",
      })
      .then(
        () => {
          setBtn(true);
          location.hash = "#gracias";
          form.current.reset();
          setTimeout(() => {
            location.hash = "#close";
          }, 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setBtn(true);
          const mensaje = error.text || 'Hubo un error intentelo de nuevo'
          setEmail(mensaje)
          location.hash = "#gracias";
          setTimeout(() => {
            location.hash = "#close";
          }, 10000);
        }
      );
  };

  return (
    <Fragment>
      <form
        className="contact-form box-shadow-1"
        ref={form}
        onSubmit={sendEmail}
      >
        {/* Todo lo que use label e input */}
        {formu.map((formu) => {
          return (
            <formu.input
              type={formu.type}
              name={formu.name}
              required={formu.required}
              cols={formu.cols}
              rows={formu.rows}
              placeholder={`${formu.placeholder}`}
              value={formu.value}
              pattern={`${formu.pattern}`}
              title={`${formu.title}`}
              className={`${formu.class}`}
              key={formu.key}
            />
          );
        })}

        <div className={`contact-form-loader text-center ${btn && "none"}`}>
          <img src="loader.svg" alt="Enviando..." />
        </div>
      </form>
      <Gracias error={email}/>
    </Fragment>
  );
}

export default Form;
