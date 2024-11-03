import { Link } from "react-router-dom";//link espara crear link directos.
import styles from "./card.module.css";
const Card = ({id,name,image}) => {
const {card} = styles
    return (
      <div className={card}>
            <Link to={`/detail/${id}`}>
            <h2>{name}</h2>
            <img src={image} alt={name} />
            </Link>
            </div>

        



        

    )
}



export default Card;