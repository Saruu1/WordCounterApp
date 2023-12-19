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
              props.showAlert("Copied to clipboard", "success");
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
        <div className="container" style ={{color:props.mode===`light`?`black`:`white`}}>
           <h1> {props.heading} </h1>

        <div className="container my-3">  
      <textarea name="mybox" id="fm" cols="100" rows="8" onChange={handleOnchange} style={{backgroundColor:props.mode===`light`?`white`:`grey`,color:props.mode===`light`?`black`:`white`}} value={text}></textarea>
       </div>

       <button className="btn btn-success mx-3 my-2"  onClick={HandleUpClick} >Convert to Uppercase</button>
       <button className="btn btn-success mx-2"   onClick={HandleLoClick} >Convert to Lowercase</button>
       <button className="btn btn-success mx-2"   onClick={HandleSpaces} >Remove Extra Spaces</button>
       <button className="btn btn-success mx-2"   onClick={HandleCopyClick} >Copy Text</button>
       <button className="btn btn-success mx-2"   onClick={HandleClearClick} >Clear Text</button>
      
   <div/>

      <div className="container my-4 ">
        <h1>Your text summary : </h1>
        <div className="container my-4 ">
        <h3>{text.split(/\s+/).length} words and {text.length} characters</h3>
        <h3>Time required to read the text
          is {0.008 * text.split(" ").length} minutes
        </h3>
        </div>
      </div>

      <h1 className="container mx-1">Preview</h1>
      <p className="container mx-2">{text.length>0?text:"Enter the text to preview"}</p>


      </div>

    )
};
