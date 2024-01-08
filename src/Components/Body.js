import React, { useEffect } from "react";
import "./Body.css";
function body(props) {
    
    function HandleClick(){
            
    }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="textInput">
          <textarea
            name=""
            className="from-text"
            placeholder="Enter text"
          ></textarea>
          <textarea
            name=""
            className="to-text"
            placeholder="Translation"
          ></textarea>
        </div>

        <div className="controls">
              <select>
                <option value="">English</option>
                <option value="">Hindi</option>
              </select>
         
              <select>
                <option value="">English</option>
                <option value="">Hindi</option>
              </select>
          </div>
      </div>
      <button onClick={HandleClick}>Translate Text</button>
    </div>
  );
}

export default body;
