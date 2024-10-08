import React from 'react'
import Weather from './components/Weather'
import "./components/Weather.css";
import { ThemeProvider } from './Context/ThemeContext';

const App = () => {
  return (
    <div className='app'>
      <Weather/>
    </div>
  )
}

export default App