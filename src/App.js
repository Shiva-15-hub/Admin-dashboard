import React from 'react';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Dashboard from './pages/Dashboard'
import Analytics from './pages/Analytics'
import Comment from './pages/Comment'
import Products from './pages/Products'
import ProductLists from './pages/ProductLists'
import Sidebar from './components/Sidebar' 
import LogContain from './components/LogContainer';
import Protected from './Protected';
import Public from './Public'


function App() {
  return (
<BrowserRouter>
    <Routes>
       
      <Route path='/' element={<Public><LogContain/></Public>  }  />
     
      <Route path='/dashboard' element={ <Protected> <Sidebar><Dashboard/></Sidebar></Protected>  } /> 
      <Route path='/analytics' element={<Protected> <Sidebar><Analytics/></Sidebar></Protected>  }/> 
      <Route path='/comment' element={<Protected> <Sidebar><Comment/></Sidebar></Protected>}/> 
      <Route path='/product' element={<Protected> <Sidebar><Products/></Sidebar></Protected> }/> 
      <Route path='/productList' element={<Protected> <Sidebar><ProductLists/></Sidebar></Protected>}/> 
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
