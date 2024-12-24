import React from 'react';
import QuizApp from './components/QuizApp';
import Home from './pages/Home';
import About from './pages/About';
import Contactus from './pages/Contactus';
import Pricing from './pages/Pricing';
import Navbar from './pages/Navbar';
import Login from './pages/Login';
import Signup from './pages/Signup';
import { Routes, Route } from 'react-router-dom';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <>
      {/* navbar end*/}
      {/* routing setup start */}
      {/* routing setup end */}
      {/* <QuizApp/> */}
      
       <Navbar/>
       <Routes>
       <Route path='/' element={<Home />} />
       <Route path='/about' element={<About />} />
       <Route path='/contactus' element={<Contactus />} />
       <Route path='/pricing' element={<Pricing />} />
       <Route path='/testselection' element={<QuizApp/>} />       
       <Route path='/login' element={<Login />} />
       <Route path='/signup' element={<Signup/>} />
       <Route path='*' element={<PageNotFound />} />
       </Routes>
        
    </>
  );
}

export default App;
