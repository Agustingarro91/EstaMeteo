import CardHome from "./CardHome";
import CardTesti from "./CardTest";

const Hero = ({ image, attachment, opacity, title, id, classe }) => {
  const heroImage = {
    backgroundImage: image,
    backgroundAttachment: attachment,
  };

  const heroImageOpacity = {
    backgroundColor: opacity,
  };

  const heroImageTitle = {
    color: title,
  };

  return (
    <section id={id} className={classe}>
      <article className="hero-image" style={heroImage}>
        {classe === "home" ? (
          <CardHome
            heroImageOpacity={heroImageOpacity}
            heroImageTitle={heroImageTitle}
          />
        ) : (
          <CardTesti heroImageOpacity={heroImageOpacity} />
        )}
      </article>
    </section>
  );
};

export default Hero;
