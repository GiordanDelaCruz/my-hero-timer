import { useState, useEffect } from 'react';
import Timer from "./components/logic/Timer";
import './App.css';

function App() {
 

  return (
    <>
      <div className='container bg-deku-green-1'>
        <div className='row'>
          <div className='col-md-6'> 
            {/* Logo */}
            <h1 className='logo-text text-shadow-white-1'><span className='text-deku-red-1'>MY HERO</span> TIMER</h1>
          </div>
          <div className='col-md-6'>
           <Timer />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
