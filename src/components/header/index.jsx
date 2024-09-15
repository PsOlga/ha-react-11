import { NavLink } from "react-router-dom"
import styles from "./styles.module.css"


function Header () {

    return(
<header className={styles.headerBlog}>

        <NavLink 
            to="/"
            className={ styles.linkHome}
            > ГОЛОВНА 
        </NavLink>
      
        <NavLink 
            className={styles.linkArticles}
            to="/AllArticles" >
            СПИСОК СТАТЕЙ
        </NavLink>
   
</header>
    )
}

export default Header;
