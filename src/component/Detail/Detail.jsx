import React from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacterDetail,cleanDetail } from "../../redux/actions/actions";
import style from "./detail.module.css"

const Detail = () => {
 const {backgroundImage,detailContainer, detailText,detailImage} = style;

const params = useParams(); //params me trae un objeto que dentro voy a tener el id , en este caso el id de cada tarjeta. {id : ?}.Est hook sirve para tarerme los parametros de la URL.
const dispatch = useDispatch();//HOOKS PARA INTERACTUAR CON REACT.En este caso va a enviar esta accion al store.
const { characterDetail } = useSelector((state) => state);
console.log("characterDetail:",characterDetail);

React.useEffect(() => {
    dispatch(getCharacterDetail(params?.id))//cuando el estado se monta o se cambcambia el id del personaje , este despacha la accion con el id que corresponde , entonces ontendriamos el objeto con los detalles del personaje.

    return () => {
    dispatch(cleanDetail());//despacho la accion para limpiar el estado.Y la hago dentro del hook ya que es el que monta el componente.
};
}, [dispatch, params?.id])//este es una dependencia que significa que el hook  cambia si se actualiza el id.


    return (
        <div className={backgroundImage}>
        <div className={detailContainer}>
        <div className={detailText}>
            <h2>{characterDetail.name}</h2>
            <p> Status : {characterDetail.status}</p>
            <p> Species :{characterDetail.species}</p>
            <p> Gender : {characterDetail.gender}</p>
            <p> Origin : {characterDetail.origin?.name}</p>
          
        </div>

          <img className={detailImage} src={characterDetail.image} alt={characterDetail.name} />
        </div>
        </div>
    )
}


export default Detail;