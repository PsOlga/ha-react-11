
import { useLocation, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

function Article() {
  const location = useLocation();
  const articleLesen = location.state; // Получаем данные статьи из состояния маршрута
  const navigate = useNavigate();
  

  // Функция для перехода на страницу всех статей
  const clickBtn1 = () => {
    navigate("/AllArticles");
  };

  // Функция для перехода на главную страницу
  const clickBtn2 = () => {
    navigate("/");
  };

  return (
    <div className={styles.articleContainer}>
      <h3 className={styles.h3_article}>{articleLesen.title}</h3>
      <div className={styles.contentContainer}>
        <p className={styles.p_article}>{articleLesen.content}</p>
      </div>

     <div className={styles.btnContainer}>
         {/* Кнопка для перехода к списку статей */}
      <button onClick={clickBtn1} 
      className={styles.btnArticle}>
        Назад до статей
      </button>

      {/* Кнопка для перехода на главную страницу */}
      <button onClick={clickBtn2} 
      className={styles.btnArticle}>
        На головну
      </button>
     </div>
    
    </div>
  );
}

export default Article;