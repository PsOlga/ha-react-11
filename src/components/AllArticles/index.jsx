import { NavLink } from "react-router-dom";
import React from "react";
import styles from "./styles.module.css"




function AllArticles () {
    const articles = [
        { 
          id: 1, 
          title: 'Як почати програмувати', 
          content: 'У цій статті ви дізнаєтеся, як зробити перші кроки в програмуванні, які мови обрати та де шукати навчальні матеріали.' 
        },
        { 
          id: 2, 
          title: '10 порад для продуктивності', 
          content: 'Продуктивність – це ключ до успіху. Дізнайтеся 10 корисних порад, як залишатися зосередженим і ефективним протягом дня.' 
        },
        { 
          id: 3, 
          title: 'Основи веб-розробки', 
          content: 'Ця стаття пояснює основи веб-розробки, включаючи HTML, CSS і JavaScript, а також як почати створювати свої перші веб-сайти.' 
        }
      ];
    return(
        <div className={styles.divAllArtycles}>
            <h3 className={styles.h3_AllArtycles}>Список статей</h3>

            <ul className={styles.ul_AllArtycles}>
                {articles.map(article => (
                    <li key={article.id}
                    className={styles.li_AllArtycles}
                   >
                        <NavLink 
                        to={`/article/${article.title}`} 
                        state={article}
                        className={styles.linc_AllArtycles}
                        > {article.title}</NavLink>
                      
                    </li>
                   
                ))}
            </ul>
        </div>
    )
}

export default AllArticles;