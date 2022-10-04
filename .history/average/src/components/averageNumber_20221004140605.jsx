import React from 'react';
import "./averageNums.css"

export default function AverageNumber() {
  return (
      <div id="inputField">
        <form>
       <p style={{color: "black"}}>Get the Average number count</p>
            <input type="number"  className="inputs" id="x" required/><p>,</p>
            <input type="number"  className="inputs" id="y" required/>
            <input type="number"  className="inputs" id="z" />
            <input type="number"  className="inputs" id="z" />
           
        </form>
          
        </div>
  )
}
