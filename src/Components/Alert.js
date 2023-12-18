import React from 'react'
export default function Alert(props) {
    const capitalise =(word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+ word.slice(1);
    }
  return (
  <div style={{height:'50px'}} >
  {props.alert &&
   <div className="alert alert-success" role="alert">
  {capitalise(props.alert.type)} : {props.alert.msg}
</div>}
</div>
  )
};
