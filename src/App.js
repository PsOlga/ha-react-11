


import {BrowserRouter, Routes, Route, Link, NavLink} from 'react-router-dom';
import './App.css';
import AllArticles from './components/AllArticles'; 
import Article from './components/Article';
import TheMain from './components/TheMain';
import Breadcrump from './components/Breadcrumb';

function App() {
  return (
<BrowserRouter>
<div className="App">
<Breadcrump />
    <Routes>
      <Route path="/" element={<TheMain />}/>
      <Route path="/allArticles" element={<AllArticles />}/>
      <Route path="/article" element={<Article />}/>

    </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
