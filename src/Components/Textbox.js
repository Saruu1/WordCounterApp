import React,{useState}from 'react'

export default function Textbox(props) {

    // Uppercase Button

    const HandleUpClick = () => {
        console.log('Button was clicked');
        let newtext = text.toLocaleUpperCase();
        setText(newtext);
        }

    // Lowercase Button
        
        const HandleLoClick = () => {
          console.log('Button was clicked');
          let newtext = text.toLowerCase();
          setText(newtext);
          }

     // Clear Text Button

         const HandleClearClick = () => {
            let newtext = " ";
            setText(newtext);
            }

            // Copy clipbord Text Button

            const HandleCopyClick = () => {
              let newtext = document.getElementById("fm");
              newtext.select();
              navigator.clipboard.writeText(newtext.value);
              alert("copied to clipboard");
              }

              // Remove extra spaces button

              
                const HandleSpaces = () => {
                  let newtext = text.split(/[ ]+/);
                  setText(newtext.join(" "));
                  }


          const handleOnchange = (event) => {
          console.log("changed");
          setText(event.target.value);

        }

   const[text, setText] = useState('');
   // setText("welcome"); // correct way to change the text
    return (
        <div>

        <h1> {props.heading}</h1>
        <div className="container my-3">  
      <textarea name="mybox" id="fm" cols="100" rows="8" onChange={handleOnchange} value={text}></textarea>
       </div>

       <button className="btn btn-success mx-3 my-2"  onClick={HandleUpClick} >Convert to Uppercase</button>
       <button className="btn btn-success mx-2"   onClick={HandleLoClick} >Convert to Lowercase</button>
       <button className="btn btn-success mx-2"   onClick={HandleSpaces} >Remove Extra Spaces</button>
       <button className="btn btn-success mx-2"   onClick={HandleCopyClick} >Copy Text</button>
       <button className="btn btn-success mx-2"   onClick={HandleClearClick} >Clear Text</button>
      
      <div className="container my-4">
        <h1>Your text summary : </h1>
        <div className="container my-4">
        <h3>{text.split(" ").length} words and {text.length} characters</h3>
        <h3>Time required to read the text
          is {0.008 * text.split(" ").length} minutes
        </h3>

        </div>
      </div>
      


    </div>

  )
}
