import { useState } from 'react';
import menuBar from './assets/menu-bar.png';
import youtubeLogo from './assets/YouTube-Logo-PNG7.png';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="h-[56px] flex items-center p-[16px]">
        <img src={menuBar} className="max-h-[29px] m-[8px] "/>
        <img src={youtubeLogo} className="max-h-[56px] m-[14px]"/>
      </div>
    </>
  )
}

export default App
