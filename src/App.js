

import { Routes, Route} from 'react-router-dom';
import './App.css';
import AllArticles from './components/AllArticles'; 
import Article from './components/Article';
import TheMain from './components/TheMain';
import Header from './components/header';

function App() {
  return (

<div className="App">

   <Header />
    <Routes>
      <Route path="/" element={<TheMain />}/>
      <Route path="/AllArticles" element={<AllArticles />}/>
      <Route path="/article/:artickelId" element={<Article />}/>

    </Routes>
    </div>

  );
}

export default App;
