// App.js
import React from 'react';
import { BrowserRouter , Routes ,Route } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Signup from './components/signup';
import USERDETAILS from './components/uniqfolder';

const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/:id"  element={<USERDETAILS/>}/>
        </Routes>
      
    </BrowserRouter>
  );
};

export default App;

