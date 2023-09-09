// import logo from './logo.svg';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let [mode, setMode] = useState('light');
  let [alert, setAlert] = useState(null);

  let showAlert = (message, type)=>{
    setAlert({
      message: message,
      type: type
    })

    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  let toggleMode = ()=> {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor= '#181b1f';
      document.body.style.color = 'white';
      showAlert("Dark Mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor= 'white';
      document.body.style.color = 'black';
      showAlert("Light Mode has been enabled", "success");
    }
  }

  return (
    <>
      <Router>
        <Navbar Title="TextUtils" AboutText="About Us" mode={mode} toggleMode={toggleMode} showAlert={showAlert}/>
        <Alert alert={alert}/>
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm heading="Enter Text to Analyze" mode={mode} showAlert={showAlert}/>}/>

            <Route exact path="/about" element={<About mode={mode}/>}/>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
