import CardCluster from "./CardCluster"






const Cluster = ({cluster}) => {


    return(

        <article className=" grid-cluster">
            {cluster.map((cluster) => {

                return(
                    <CardCluster key={cluster.titulo} img={ cluster.img} link={cluster.link} titulo={cluster.titulo} />
                )
            })}

        </article>
    )
}

export default Cluster