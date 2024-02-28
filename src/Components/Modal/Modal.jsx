import { Fragment } from "react";
import CardModal from "./CardModal";

const Modal = () => {

    const modal = [
        {
            id: "trabajo-1",
            image:"src/assets/portfolio.jpg",
            alt:"Trabajo 1",
            title: "Proyecto numero 1",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores quisquam totam voluptatem atque ad nisi voluptate temporibus enim fuga, error beatae iusto eveniet? Labore nesciunt atque vitae est impedit eaque"

        },
        {
            id: "trabajo-2",
            image:"src/assets/portfolio.jpg",
            alt:"Trabajo 2",
            title: "Proyecto numero 2",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores quisquam totam voluptatem atque ad nisi voluptate temporibus enim fuga, error beatae iusto eveniet? Labore nesciunt atque vitae est impedit eaque"

        },
        {
            id: "trabajo-3",
            image:"src/assets/portfolio.jpg",
            alt:"Trabajo 3",
            title: "Proyecto numero 3",
            text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores quisquam totam voluptatem atque ad nisi voluptate temporibus enim fuga, error beatae iusto eveniet? Labore nesciunt atque vitae est impedit eaque"

        },
    ]

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
