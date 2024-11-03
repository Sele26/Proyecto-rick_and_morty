//estos hooks ayudan a conectar el estado global a los componentes funcionales.
//useSelector este lo que hace permite seleccionar parte del estado almacenado en el store.Osea extraemos datos que podemos necesitar.
//useDispatch lo que hace es proporcionar acceso a la funcion dispatch, que se utiliza para enviar acciones y cambiar el estado global
import { useSelector, useDispatch } from "react-redux";
import React, {useRef} from "react";
import { getAllCharacters } from "../../redux/actions/actions"; //esta es la action que nos trae todas las cards
import Card from "../card/Card";
import styles from "./cards.module.css"

const Cards = () => {  
const {backgroundImage,arrowButton,leftArrow,rightArrow,cardsContainer} = styles

    //el dispatch me da acceso a la funcion dispach que se usa para enviar acciones al redux
    const dispatch = useDispatch();
    //allCharacters es una propiedad de la action getAllCHAracters , entonces lo que hago es seleccionar del estado y retornarlo.
    //seleccionamos a la propiedad allCharacters desde el estado global 
    const { allCharacters } = useSelector((state) => state);
  //usamos el useref para controlar el scroll del contenedor
  const containerRef = useRef(null);

const scrollLeft = () => {
    if (containerRef.current) {
        containerRef.current.scrollBy({
    
        left:-300,
        behavior:"smooth",   
    });
};

};

const scrollRight = () => {
  if(containerRef.current){
    containerRef.current.scrollBy({
        left:300,
        behavior:"smooth",
    });
};
};
//este hooks se ejecuta cuando el componenet se monta por primera vez 
    React.useEffect(() => {
        //se envia la accion get para obtener todos los personajes
        dispatch(getAllCharacters());
      },[]) //este es el array de dependencias, si no lo ponemos se hace un bucle infinito
    
//funcion para desplazar el contenedor de tajetas



return (
<div className={backgroundImage}>
    {/*flechas para desplazar*/}
    <button className={`${arrowButton} ${leftArrow}`} onClick={scrollLeft}>
        &#8592; {/*flecha izquierda*/}
    </button>

<div className={cardsContainer} ref={containerRef}>
    
    {
       
        allCharacters?.map((characters) =>(
             <div>
                <Card 
                key={characters.id}
                id={characters.id}
                name={characters.name}
                image={characters.image}
               />
               </div>
            
        ))
        
    };

    </div>

<button className={`${arrowButton} ${rightArrow}`} onClick={scrollRight}>
        &#8594; {/* Flecha derecha */}
      </button>
    
</div>

   
  );
};


export default Cards;