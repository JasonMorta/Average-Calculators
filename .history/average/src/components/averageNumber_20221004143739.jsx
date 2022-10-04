import React from 'react';
import "./averageNums.css"

export default function AverageNumber() {

 let form = document.querySelectorAll("input")

 let total;
 function calculate(e){
  e.preventDefault()


  form.forEach(x => {
  console.log( total += x.value)
  });
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
            <b>12333</b>
            <br></br>
            <button 
            className="button button5"
            type="submit"
            >Calculate</button>
           
        </form>
          
        </div>
  )
}
