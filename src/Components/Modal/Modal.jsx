import { Fragment } from "react";
import CardModal from "./CardModal";
import { modal } from "../../../public/assets/informacion";

const Modal = () => {

    
  return (
    <Fragment>
        {modal.map((modal) => {
          return (
            <CardModal
              key={modal.title}
              title={modal.title}
              text={modal.text}
              id={modal.id}
              image={modal.image}
              alt={modal.alt}
            />
          );
        })}
    </Fragment>
  );
};

export default Modal;
