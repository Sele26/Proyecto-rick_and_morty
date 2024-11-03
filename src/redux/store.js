//este es el estado global de la app
//esta seria la tienda de Redux ,donde se almacena el esado y donde los componentes pueden leer o modificar el estado a traves de acciones y reducers
import { createStore, applyMiddleware, compose } from "redux";
//createStore es la funcion principal para crear el store 
//applyMiddleware permite añadir middlewares
//compose permite combinar varias funciones en una sola.Es util cuando necesitas aplicar multiples mejoras(enhancers)
import { thunk } from "redux-thunk"; //middleware que permite escribir creadores de acciones que devuelvan una funcion en lugar de un objeto 
import reducer from "./reducer/reducer"; //el reducer es la raiz , especifica como cambia el estado de la app en respuesta a las acciones enviadas.

//funcion que intentamos acceder a la herramienta de redux devtools que permite visualizar y depurar el estado , la cual mejora el compose para que sea compatible con reduxdevtools
//me sirve para conectarme con la funcion del navegador.

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

 
//creacion del store de Redux
const store = createStore (
    reducer, //maneja el estado principal de la app y el que lo cambia 
    composeEnhancer(applyMiddleware(thunk)) //permite manejar aciones asincronas
);

export default store;