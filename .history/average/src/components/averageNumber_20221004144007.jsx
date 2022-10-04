import React from 'react';
import "./averageNums.css"

export default function AverageNumber() {

 let form = document.querySelectorAll("input")


 function calculate(e){
  e.preventDefault()
  let total = 0;
 

  form.forEach(x => {
   total += x.value


  });

  console.log(total);
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
