//este componnete va a funcionar omo un boton reutilizable para tods los componente.
import { Link } from "react-router-dom"

//este componente va a recibir un path osea una url , y un texto indicando como se llama.
const Button = ({className,path, text}) => {
    return(

        <Link to={path} className={className}>
        
            {text}
       
        </Link>

    )
}

export default Button;