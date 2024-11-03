import Button from "../button/button";
import styles from "./nav.module.css"

const Nav = () => {
    const {navbar,navButtons,navButton} = styles
    
    return (
        <>
       <nav className={navbar}>
            <div className={navButtons}>
           <Button  className={navButton} path="/home" text="Home"/>
            <Button className={navButton} path="/form" text="Formulario"/>
       </div> 
       </nav>
       </>
    )
}


export default Nav;