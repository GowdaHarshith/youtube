import './App.css';
import Navbar from './components/navbar'
import Home from './components/home'
import AddVideo from './components/addVideo';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageNotFound from './components/pageNotFound';

//browserRouter holds all the webpages
//routes defines the total number of pages
//route defines the individal pages
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      < Navbar/>
      <Routes>
        <Route element={<Home/>} path='/' />
        <Route element={<AddVideo/>} path='/add-video' />
        <Route element={<PageNotFound/>} path='*'/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
