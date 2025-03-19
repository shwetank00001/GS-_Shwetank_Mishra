import React from 'react'
import Charts from './components/Charts';
import Navbar from './components/Navbar';
import Planning from './components/Planning'
import Sidebar from './components/Sidebar';
import Stores from './components/Stores'
import SKU from './components/SKU';
import {Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (

    <div>
      <Navbar/>
      <div className='flex'>
        <Sidebar />
        <div className='flex-1 p-4 '>
          <Routes>
            <Route path='/stores' element={<Stores />} />
            <Route path='/sku' element={<SKU />} />
            <Route path='/planning' element={<Planning />} />
            <Route path='/charts' element={<Charts />} />
          </Routes>
        </div>
      </div>
    </div>

  )
}

export default App