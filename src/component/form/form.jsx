import React from "react";
import validation from "./validation";
import styles from "./form.module.css"

const Form = () => {
  const {formContainer,form,inputField,submitButton,backgroundImage}=styles
    //utilizamos l hook useState para crear un estado interno dentro del componente Form.
 const [ input, setInput] = React.useState({
    //estos son los estados del input , que estarian vacios al principios.
    email:"",
    password:""
  })
  const [errors, setErrors] = React.useState({});

  //est es una funcion que capta los eventos de cambio del estado en este caso tras un evento , que es el cambio del input.
  //el handle atua cada vez que se dispara un evento que en este caso seria escribir en el input.
  const handleChange = (event) => {
    //cada vez que se dispara el evento , se actualiza la propiedad setInput que es utilizada para cabiar el estado.
    setInput({
        ...input,//copiamos los valores actuales del estado 
        //event , es por el evento 
        //target hace referencia al elemto HTML input 
        //name , este genera un identificador unico que asocia el campo con una clave en el estado.
        [event.target.name]:event.target.value

    })
    //cuando se ejecuta setErrors se envia validation pasandole el input
    setErrors(validation(input));
  }

//manejar el envio, esta funcion recibe el onSubmit (event),para controlar de manera manual el envio.
//ya que si no usariamos esta accion la pagina se recargaria en cada envios o accion.
//esto me permite que pueda reaizar otras acciones como validar los datos o hacer un envio de datos a alguna api , antes de que esta se envie.
  const handleSubmit=(event) => {
    event.prevenDefault();
  }

    return (


<div className={backgroundImage}>
   <div className={formContainer}>
     {/* Animación con Framer Motion */}
     



      {   /* el onSubmit es la accion para el envio del formulario (osea enviar )*/}
        <form className={form} onSubmit={handleSubmit}>
        
            <label htmlFor="email">Email:</label>
            <input className={inputField} onChange={handleChange} type="email" name="email" value={input.email} />
            
            {errors.email && <p style={{color:"red"}}>{errors.email}</p>}
      {/* este componente se utiliza para dar un salto */}
      <br / >

            <label htmlFor="password">Password:</label>
            <input className={inputField} type="password"  name="password"  value={input.password} />
            {errors.password && <p style={{color:"red"}}>{errors.password}</p>}
      <br />   
      {/* este button es de tipo submit para que pueda utilizarlo en el form , disable es una prop para verificar que sean valores correctos para habilitar el boton */}
         <button className={submitButton} onChange={handleChange} type="submit" disabled={input.email === "" || input.password === "" || errors.email || errors.password}> Submit </button>

        </form>
        </div>
        </div>
       
    )
}

export default Form;