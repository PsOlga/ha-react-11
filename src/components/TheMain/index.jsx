import styles from "./styles.module.css";



function TheMain () {

    return(

        <div className={styles.home_page}>

         <h1 className={styles.h1_home_page}>Ласкаво просимо до нашого блогу</h1>
          <div className={styles.content_home_page}>  
            <p className={styles.p_home_page}>Читайте найцікавіші статті на  актуальні теми</p>
            </div>
            {/* <NavLink to="/AllArticles">Перейти до списку статей</NavLink> */}
        </div>
    )
}

export default TheMain;