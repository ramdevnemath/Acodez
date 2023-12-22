import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css'
import Home from './pages/home'
import CreateStock from './pages/CreateStock';
import Stocks from './pages/Stocks';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Home} />
        <Route path='/create' Component={CreateStock}/>
        <Route path='/all-stocks' Component={Stocks}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
