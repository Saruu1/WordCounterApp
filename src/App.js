import React from 'react';
import { useState } from 'react';
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textbox from './Components/Textbox';
import Alert from './Components/Alert';
import {Routes, Route} from "react-router-dom";
import {
  BrowserRouter as Router,
  
} from "react-router-dom";;



function App() {

  const [btxt, setbtxt] = useState("Enable Dark Mode")
 const [alert, setalert] = useState(null)
  const showAlert=(message,type)=>{
    setalert({
      msg : message,
      type:type
    })
    setTimeout(() => {
        
      setalert(null)
      
    }, 800);
  }
  
  const [mode, setmode] = useState(`light`)
 const toggleMode = ()=>{
    if(mode === `light`){
      setmode(`dark`);
      document.body.style.backgroundColor = `#042743`;
     showAlert("Dark Mode Enabled!","success")
      setbtxt("Enable Light Mode")
      document.title="DarkMode - Enabled"
    }
    else{
      setmode(`light`);
      document.body.style.backgroundColor = `white`;
      showAlert("Light Mode Enabled!","success")
      setbtxt("Enable Dark Mode")
      document.title="LightMode - Enabled"

  }
 }
   return ( 
    <>
  <Router>
 
  <Navbar title = 'Word Counter' aboutText = 'About Us'  link ='My Link'  /*green = {green} gtxt = {gtxt} greenMode = {greenMode}*/  btxt= {btxt} mode ={mode} toggleMode = {toggleMode}/>
  <Alert alert={alert}/>
  <div className="container my-3">
      <Routes>
        <Route path="/about" element ={<About mode={mode}/>}/>
    <Route path="/" element={<Textbox heading = 'Enter the text below' /* green = {green}*/ showAlert = {showAlert} mode = {mode}/>}/>
  </Routes>
  </div>
 
  </Router>
  </>
  );

};
export default App;


