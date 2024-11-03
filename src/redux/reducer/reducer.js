import { GET_ALL_CHARACTERS, GET_CHARACTER_DETAIL, CLEAN_DETAIL } from "../actions/actions-type";

const initialState = { //estos array se utilizaan para despachar acciones de los componentes o case en este caso que actualizaran cada esado que yo qiero definir 
    allCharacters: [],
    allFavorites: [],
    myFavorites: [],
    characterDetail:{},
}

//asi se llama al reducer que es el estado global donde se van a guardar todas las acciones.
const reducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_CHARACTERS: //nos traemos la action type 
            return { //y retornamos el estado y el estado allcharaters que contienela informacion que retornamos en la action 
                ...state,
                allCharacters:action.payload
            }
        case GET_CHARACTER_DETAIL:
            return {
                ...state,
                characterDetail:action.payload
            }    
        case CLEAN_DETAIL:
                return{
                    ...state,
                    characterDetail: {} //characterDetail es un objeto vacio porque estamos limpiando el estado.
                }
       

        default : 
        return {...state}

    }
}

export default reducer;