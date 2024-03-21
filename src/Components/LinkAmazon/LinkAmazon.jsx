


const LinkAmazon = ({link, text, clas}) => {


  
    return (
      
          <a href={link} className={`btn ${clas}`} target="_blank" rel="nofollow noopener sponsored" title="Ir a amazon">
            {text}
          </a>
       
    );
  };
  
  export default LinkAmazon;