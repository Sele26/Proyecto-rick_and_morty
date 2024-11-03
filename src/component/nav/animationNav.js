// animations.js

export const titleAnimation = {
    initial: { opacity: 0, y: "-100vh" }, // Estado inicial de la animación, la cual comienza totalmente fuera de la pnatalla
    animate: { opacity: 1, y: 0, scale: 1 },    // Estado final de la animación, osea posicion original 
    transition: {
      type: 'spring',//usa animacion con efecto rebote 
      stiffness: 100,//controla la rigidez del resorte
      damping: 10,//amortiguacion para evitar que rebote demasiado
      duration: 3,//duraion de la animacion 
    },
  };
  
  export const hoverAnimation = {
    whileHover: { scale: 1.1 },  // Aumenta de tamaño al hacer hover
    whileTap: { scale: 0.9 },    // Se reduce al hacer tap o click
  };
  
