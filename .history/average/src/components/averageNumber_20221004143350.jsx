import React from 'react';
import "./averageNums.css"

export default function AverageNumber() {

 let form = document.querySelectorAll("input")

 function calculate(e){
  e.preventDefault()


  console.log(form[0].value)
 }
  return (
      <div id="inputField">
        <form onSubmit={calculate}>
       <p style={{color: "black"}}>Get the Average number count</p>
            <input type="number"  className="inputs" id="x" /><b>,</b>
            <input type="number"  className="inputs" id="y" /><b>,</b>
            <input type="number"  className="inputs" id="z" /><b>,</b>
            <input type="number"  className="inputs" id="z" />
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