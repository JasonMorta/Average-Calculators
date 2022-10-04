import React from 'react';
import "./averageNums.css"

export default function AverageNumber() {
  return (
      <div id="inputField">
        <form>
       <p style={{color: "black"}}>Get the Average number count</p>
            <input type="number"  className="inputs" id="x" required/><b>,</b>
            <input type="number"  className="inputs" id="y" required/><b>,</b>
            <input type="number"  className="inputs" id="z" /><b>,</b>
            <input type="number"  className="inputs" id="z" /><br></br>
            <button className="button button5">Button</button>
           
        </form>
          
        </div>
  )
}
