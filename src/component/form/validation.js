//validation recibe un input del form para que el estado de error reciba a la validacion.
const validation = (input ) =>{
    const errors = {};

    if(!input.email.includes("@")){
        errors.email = "Email invalido"
    }
    if(!input.email.includes(".")){
    errors.email = "Email invalido"  
    }
    if(input.password.length < 6){
        errors.password = "Faltan caracteres"
    }
    if(!input.password.includes(".") || !input.password.includes("!")){
        errors.password = "Debe contenes (.) o (!)"
}

    return errors;

}

export default validation;
  