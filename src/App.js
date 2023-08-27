// import logo from './logo.svg';
import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  //THEME CODE
  const [mode, setMode] = useState('light')

  //MAIN HOME PAGE LIGHT BACKGROUND DEFAULT
  if (mode === 'light') {
    document.body.style.backgroundColor = '#f2fcfa';
  }
  //BUTTON TEXT IN THE NAVBAR
  const [btnText, setBtnText] = useState('Enable Dark Mode')

  //TOGGLE WHEN USER SWITCHES FROM  LIGHT MODE TO DARK MODE OR VICE-VERSA
  const toggleStyle = () => {
    if (mode === 'light') {
      document.body.style.backgroundColor = '#21202e';
      setMode('dark');
      setBtnText('Enable Light Mode');
      // setBtnText('./MyComponents/images/light.jfif');
      console.log('dark mode');
      // showAlert("Dark Mode is enabled", "success")
    }
    else {
      document.body.style.backgroundColor = '#f2fcfa';
      setMode('light')
      setBtnText('Enable Dark Mode')
      // setBtnText('./MyComponents/images/dark.jfif');
      console.log('light mode')
      // showAlert("Light Mode is enabled", "success")
    }}

    return (
      <Router>
        <Navbar mode={mode} toggle={toggleStyle} text={btnText} search={false}/>

        <Routes>
          <Route exact path='/' element={<><News mode={mode} key="home" country="in" category="" pageSize={6} /></>} />
          <Route exact path='/business' element={<><News mode={mode} key="business" country="in" category="business" pageSize={6} /></>} />
          <Route exact path='/entertainment' element={<><News mode={mode} key="entertainment" country="in" category="entertainment" pageSize={6} /></>} />
          <Route exact path='/general' element={<><News mode={mode} key="general" country="in" category="general" pageSize={6} /></>} />
          <Route exact path='/health' element={<><News mode={mode} key="health" country="in" category="health" pageSize={6} /></>} />
          <Route exact path='/science' element={<><News mode={mode} key="science" country="in" category="science" pageSize={6} /></>} />
          <Route exact path='/sports' element={<><News mode={mode} key="sports" country="in" category="sports" pageSize={6} /></>} />
          <Route exact path='/technology' element={<><News mode={mode} key="technology" country="in" category="technology" pageSize={6} /></>} />
        </Routes>
      </Router>

    )
  
}

export default App;

