import LinkAmazon from "../LinkAmazon/LinkAmazon";



const CardHome = ({children}) => {


  
  return (
    <aside className={`hero-image-opacity hero-image-opacity-home`}>
      <div className="hero-image-content">
        {children}        
      </div>
    </aside>
  );
};

export default CardHome;
