import React ,{useState} from 'react'

export default function TextForm(props) {
   
  const [style1,setStyle1]=useState(
    {
      color: "black",
      backgroundColor: "white"
      
    }
    );
    const togleStyle= ()=>{

     

      if(style1.color=="white")
      {
        alert("white");
       setStyle1({

       
        color: "black",
        backgroundColor: "white"
       }
       )
       setStyle1("Enable Dark Mode");
      
      }

      else{
        alert("black");
        setStyle(
          {

         
          color:"white",
          backgroundColor:"black"
        }
         )
     
       setLight("Enable Light Mode");

      }
      
    }


    const handleUpClick=()=>{
        const newtxt=text.toUpperCase();
        setText(newtxt);
        console.log(newtxt)
       props.showAlert("success","Now all the letter to be the Upper Case");
       
    }


    const handleCapClick=()=>{
      let npara="";

      text.split(" ").forEach(element => {
       

       
        npara=npara +" "+element.replace(element.charAt(0),element.charAt(0).toUpperCase());
      });
      
    
        setText(npara);
        props.showAlert("success","Now all the first letter to the Cap");

       
    }

    const handleLoClick=()=>{
      const newtxt=text.toLowerCase();
        setText(newtxt);
        
        props.showAlert("success","Now all the first letter to the Cap");
       
    }

    const handleOnchange=(event)=>{
    
        setText(event.target.value);
        
    }



    const [text, setText]=useState("Text here")

    const [light, setLight]=useState("Enable Dark Mode")
    const [style, setStyle]=useState({
      color:"white",
      backgroundColor:"gray"
    })
    const togleStyle1=(req)=>{
      if(props.mode=="dark")
      {
        setStyle({
        color:"white",
      backgroundColor:"gray"
      })}
      else{
        setStyle({
          color:"black",
          backgroundColor:"white"
        })
        
      }

    }

  
  return (
    // <div className={`container-fluid vh-100 vw-100 bg-${props.mode} text-${props.mode==="light"?"dark":"light"}`}
    <div style=
    {props.mode==="dark"?
    {
      color:"white",
      backgroundColor:"gray"
    }:  
    {
      color:"black",
      backgroundColor:"white"
      }
    }
    >
  
   <h1 >{props.geth}</h1>
  <div  style={style1}>
  
    <textarea  style={style1} className="form-control" value={text} onChange={handleOnchange}   rows="4"></textarea>
    <button  style={style1} className="btn " onClick={handleUpClick} >SetUpToUpperCase</button>
    <button style={style1} className="btn " onClick={handleLoClick} >SetUpToLowerCase</button>
     <button style={style1} className="btn " onClick={handleCapClick} >Capitalize</button> 
  </div>

  <h1>Your Text Summary </h1>
  <p>{text.length==0? 0:text.trim().split(/\s+/).length} words and {text.length} are the currectors</p>
  <h3>Preview</h3>
  <p>{text}</p>
  <button type="button"  onClick={togleStyle} className="btn btn-primary">{light}</button>

 
</div>
  )
}
