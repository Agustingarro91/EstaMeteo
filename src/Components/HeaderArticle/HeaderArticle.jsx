import { Fragment } from "react";
import Hero from "../Hero/Hero";
import Catalogo from "../Catalogo/Catalogo";
import { catalogo, cluster } from "../../informacion";
import { Helmet } from "react-helmet";
import Cluster from "../Cluster/Cluster";
import "../../index.css";

const HeaderArticle = ({children}) => {
  return (
    <Fragment>

      <section className=" tsrHeader container">
        <article className=" section-article ">
        {children}
        </article>
      </section>
    </Fragment>
  );
};

export default HeaderArticle;
