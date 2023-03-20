import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import Layout from './Pages/Layout';
import HomePage from './Pages/HomePage';
import ShopPage from './Pages/ShopPage';

import './App.css'

function App() {
  return (
    <div className="text-white">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/Shop" element={<ShopPage />} />
            {/*  <Route path="/:id" element={<Main />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App




/* 

<div className="App">
  <h1 className='text-red-900 font-bold text-4xl'>HELLO WORLD</h1>
</div>



function App() {
  
  
    
  )
}

export default App
//<Route path="/smallpainting" element={<SmallPaintings />} />

 */