import React from "react";
import styles from "./bienvenida.module.css"
import { motion } from "framer-motion";
import {titleAnimation,hoverAnimation} from "./animationwelcome"
const Welcome = () => {

    const {backgroundImage,animatedTitle,parrafo} = styles
    
    return (
        <div className={backgroundImage} >
       

        <div>
        <motion.h1
            className={animatedTitle}
            initial={titleAnimation.initial}
            animate={titleAnimation.animate}
            transition={titleAnimation.transition}
            whileHover={hoverAnimation.whileHover}
            whileTap={hoverAnimation.whileTap}
            >
            Bievenidos a Rick and Morty
            </motion.h1> 
 <hr>
            </hr>
            <p className={parrafo} > Aqui vas a poder explorar todos tus personajes favoritos</p>
           <>
           <p className={parrafo}> ¿EMPEZAMOS?</p>
       </> 
       </div>
         </div>
    )
}

export default Welcome;

