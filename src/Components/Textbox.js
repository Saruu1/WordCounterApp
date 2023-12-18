import React,{useState}from 'react'

export default function Textbox(props) {

    // Uppercase Button

    const HandleUpClick = () => {
        console.log('Button was clicked');
        let newtext = text.toLocaleUpperCase();
        setText(newtext);
        props.showAlert("Converted to Uppercase!","success")
        }

    // Lowercase Button
        
        const HandleLoClick = () => {
          console.log('Button was clicked');
          let newtext = text.toLowerCase();
          setText(newtext);
          props.showAlert("Converted to Lowercase!","success")
        
          }

     // Clear Text Button

         const HandleClearClick = () => {
            let newtext = " ";
            setText(newtext)   
            props.showAlert("Text Cleared!","success")
        
            }

            // Copy clipbord Text Button

            const HandleCopyClick = () => {
              let newtext = document.getElementById("fm");
              newtext.select();
              navigator.clipboard.writeText(newtext.value);
              document.getSelection().removeAllRanges();
              props.showAlert("Copied to clipboard!", "success");
              }

              // Remove extra spaces button

              
                const HandleSpaces = () => {
                  let newtext = text.split(/[ ]+/);
                  setText(newtext.join(" "));
                  props.showAlert("Extra Spaces Removed!","success");
                  }


          const handleOnchange = (event) => {
          console.log("changed");
          setText(event.target.value);

        }

   const[text, setText] = useState('');
   // setText("welcome"); // correct way to change the text
    return (
        <div className="container mx-2" style ={{color:props.mode===`light`?`black`:`white`}}>
          <div className="container mx-1"><h1> {props.heading} </h1> </div>

        <div className="container my-3">  
      <textarea name="mybox" id="fm" cols="100" rows="8" onChange={handleOnchange} style={{backgroundColor:props.mode===`light`?`white`:`#0c2a39`,color:props.mode===`light`?`black`:`white`,border:props.mode==='light'?'1px solid black':'1px solid white'}} value={text}></textarea>
       </div>

       <button disabled = {text.length===0} className="btn btn-success mx-2 my-2 "  onClick={HandleUpClick} >Convert to Uppercase</button>
       <button disabled = {text.length===0} className="btn btn-success mx-2 my-2"   onClick={HandleLoClick} >Convert to Lowercase</button>
       <button disabled = {text.length===0} className="btn btn-success mx-2 my-2"   onClick={HandleSpaces} >Remove Extra Spaces</button>
       <button disabled = {text.length===0} className="btn btn-success mx-2 my-2"   onClick={HandleCopyClick} >Copy Text</button>
       <button disabled = {text.length===0} className="btn btn-success mx-2 my-2"   onClick={HandleClearClick} >Clear Text</button>
      
   <div/>

      <div className="container my-4 ">
        <h1>Your text summary : </h1>
        <div className="container my-4 ">
        <h3>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</h3>
        <h3>Time required to read the text
          is {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes
        </h3>
        </div>
      </div>
      <h2 className='container mx-1'>Preview</h2>
      <p className='container mx-2'>{text.length>0?text:"Nothing to preview"}</p>


      </div>

    )
};
