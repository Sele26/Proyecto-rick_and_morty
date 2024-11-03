import React from "react";
import Cards from "./component/cards/Cards";
import { Routes,Route } from "react-router-dom" //imprtamos routes y route para crear rutas.
import Detail from "./component/Detail/Detail";
import Nav from "./component/nav/nav";
import Form from "./component/form/form";
import Welcome from "./component/Bienvenida/bienvenida";

function App() {
  
    return(
        <>
        
    <Nav />
    {/* El contenido cambia según la ruta */}
<div className="main-content">
        <Routes>
            
            {/* //aca le decimos que en path (osea ruta) vas a estar renderizando este elemento (osea Cards) */}
            <Route path="/" element= {<Welcome/>} />
            <Route path="/home" element={<Cards/>} /> 
            <Route path="/detail/:id" element={<Detail/>} />
            <Route path="/form" element={<Form/>} />
           
        </Routes>
        </div>
          
 </>
    );
  
}

export default App;

  