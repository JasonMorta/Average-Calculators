import React from 'react';
import "./averageNums.css"

export default function AverageNumber() {

 let form = document.querySelectorAll("input");
 let output = document.queryCommandIndeterm("#ave");


 function calculate(e){
  e.preventDefault()
  
  let total = 0;
  let allInputs = 0;
  let loopCount = 0
 
  //sum all input values
  form.forEach(input => 
   {allInputs += parseInt(input.value)
   loopCount++}
  );

  total = allInputs / loopCount;

  output.innerHTML = total;
 
 }
  return (
      <div id="inputField">
        <form onSubmit={calculate}>
       <p style={{color: "black"}}>Get the Average number count</p>
            <input type="number"  className="inputs" /><b>,</b>
            <input type="number"  className="inputs" /><b>,</b>
            <input type="number"  className="inputs" /><b>,</b>
            <input type="number"  className="inputs" />
            <br></br>
            <b></b>
            <br id="ave"></br>
            <button 
            className="button button5"
            type="submit"
            >Calculate</button>
           
        </form>
          
        </div>
  )
}
