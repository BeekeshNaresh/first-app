import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar';
import TextForm from './Component/TextForm';
import { useState } from 'react';
import Alert from './Component/Alert';
import { type } from '@testing-library/user-event/dist/type';
import About from './Component/About';


import React from 'react';
function App() {
const [mode, setMode]=useState({
  color:"white",
  backgrond:"black"
});
const [alerts, setAlert]=useState(null);
const togleMode=()=>{
  if(mode==="light")
 { 
  setMode("dark")
  setAlert({type: "suceess",msg: "Dark Mode Active "});
  document.title="Dark Mode Active";
  setInterval(() => {
    document.title="-Active";
  }, 2000);
  setInterval(() => {
    document.title="Loading-Active";
  }, 1500);
}
else {
  setMode("light")
  setAlert({type: "suceess",msg: "Light Mode Active "});
  document.title="Dark Light Active";
}

}
const showAlert=(type,msg)=>{
  setAlert({
    type:type,
    msg:msg
  })

}

setTimeout(()=>{
  setAlert(null);
  console.log("alert set to null")
},1500);
  return (
    <>


<Navbar title="Navbar" style={mode} togleMode={togleMode}/>
    <Alert alert={ alerts}/>
    




    </>
  );
}

export default App;
