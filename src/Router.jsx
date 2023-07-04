import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';        
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home/Home'
import Formulaire from './pages/Formulaire/Formulaire';


const Router = () => {
  return(
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Formulaire' element={<Formulaire />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
