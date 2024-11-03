import { type } from "@testing-library/user-event/dist/type";
import { GET_ALL_CHARACTERS, GET_CHARACTER_DETAIL , CLEAN_DETAIL } from "./actions-type";
import axios from "axios";

const URL_BASE = "https://rickandmortyapi.com/api/character/";

export const getAllCharacters = () => {
   //esta funcion retorna una fucnion que dentro de ella se realiza un llamado a la API
   //siempre la que va a realizar una funcion asincrona es la funcion hija. 
   return async (dispatch)=> { //SIEMPRE RECIBE EL DISPATCH ACA 
try {
    //realizamos un destructuring de data de la api que estoy aciendo la peticion.
    //en el await lo que hago es decir que espere , osea que no haga mas nada hasta que me traigas una respuesta.
    //en data vamos a tener toda la indormacion que tengo en el objeto de la api. 
    const { data } = await axios (URL_BASE);
    //con el dispatch realizo en reducer , y le digo que me traiga el type que seria todos los personajes, y el payload es todo el objeto de la api que me manda cuando realizo la peticion.
    return dispatch ({ type : GET_ALL_CHARACTERS,payload:data.results }); //el data.results , es el array dentro del objeto de la api ,este contiene un array con todos los personajes.
} catch (error){
    console.log(error);


}
    }
}

//creamos una nueva accion que va a recibir por parametro un id
export const getCharacterDetail = ( id ) => {
    //con el dispatch creamos una nueva fucnion 
    return (dispatch) => {
    //pedimos informacion a la url con el id correspondiente
    axios (`${URL_BASE}${id}`)
    //recibimos esa informacion haciendo destructring 
    .then(({data}) => {
        return dispatch({type:GET_CHARACTER_DETAIL, payload:data})
    })
.catch((error) => {
     console.log(error);
});
   
    }
}


export const cleanDetail = () => {
    return {type:CLEAN_DETAIL}
}



//Tambien lo podemos hace con un fetch 

// export const getAllCharacters = () => {
//     return (dispatch) => {
//         fetch(URL_BASE) //el fetch me trae la informacion en un json, en axios esto no pasa , me tra la informcion como un objeto 
//         .then (response => response.json()) //con el fetch necesitamos la respuesta , en donde tenemos que parsearla en un json ya que no la podemos leer
//         .then (data => { //y cuando nos llgue la informacion en data realizamos el dispatch.
//             return dispatch({ type: GET_ALL_CHARACTERS, payload:data.results})
//         }) //aca mandamos el distapch al reducer.
//     .catch((error => {
//         console.log(error);
//     }))
// }

// }