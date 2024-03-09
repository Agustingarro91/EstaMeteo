import CardHome from "./CardHome";
import CardTesti from "./CardTest";

const Hero = ({ image, attachment, id, children }) => {
  const heroImage = {
    backgroundImage: image,
    backgroundAttachment: attachment,
  };



  return (
    <section id={id}>
      <article className="hero-image" style={heroImage}>
        {children}
      </article>
    </section>
  );
};

export default Hero;
