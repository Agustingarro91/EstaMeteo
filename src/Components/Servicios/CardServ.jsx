

const CardServ = ({title, text}) => {

    

    return(

        <article className="service-card">            
        <h3> {title} </h3>
        <p>
          {text}
        </p>
      </article>
    )
}


export default CardServ;