import React from 'react';
import "./averageNums.css"

export default function AverageNumber() {

 let form = document.querySelectorAll("input");
 let output = document.querySelector("#ave");


 function calculate(e){
  e.preventDefault()
  
  let total = 0;
  let allInputs = 0;
  let loopCount = 0
 console.log(form)
  //sum all input values
  form.forEach((input) => {
    allInputs += input.value;
    loopCount++;
  });

  total = allInputs / loopCount;
  output.textContent = total;
 
 }
  return (
      <div id="inputField">
        <form onSubmit={calculate}>
       <p style={{color: "black"}}>Get the Average number count</p>
            <input type="number"  className="inputs" required/>
            <b>,</b>
            <input type="number"  className="inputs" required/>
            <b>,</b>
            <input type="number"  className="inputs" />
            <b>,</b>
            <input type="number"  className="inputs" />
            <br></br>
            <b id="ave"></b>
            <br></br>
            <button 
            className="button button5"
            type="submit"
            >Calculate</button>
           
        </form>
          
        </div>
  )
}
