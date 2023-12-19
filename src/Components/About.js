import React from 'react'

export default function About (props) {
  
  let myStyle = {
    color: props.mode ==='light'?'black':'white',
    backgroundColor: props.mode ==='dark'?'rgb(2, 19, 47)':'white',
    border: '0px solid',
    borderColor: props.mode ==='light'?'black':'white'
    
  }
  

  return (
    <>
    <div className="container" style={{color: props.mode ==='light'?'black':'white',
    }}>
    <h1 className='my-3'>{props.heading}</h1>
    <div className="accordion" id="accordionExample" style={myStyle}>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>  Analyze Your Text  </strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body"style={myStyle}>
          Word counter gives you a way to analyze your text quickly and efficiently. Be it a word count,character count or extra space remover
          </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          <strong>Free To Use</strong>
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          Word counter is a free character counter tool that provides instant character count  and word count for a given text. Word counter reports the number of words and characters, Thus it is suitable for character or word limit.
        </div>
      </div>
    </div>
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
          <strong>Browser Compatible</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle}>
          The word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari. It suits to count characters in facebook blog, books,excel, document,pdf document,essays etc.
        </div>
      </div>
    </div>
     </div>
    </div>
    </>
  )
}
