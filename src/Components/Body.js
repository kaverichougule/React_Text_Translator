import "./Body.css";
import React from 'react';
function body(props) {
    function HandleClick(e) {
        props.setCount((prev)=>prev+1);   
    }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="textInput">
          <textarea
            name="" value={props.textToTrans}
            className="from-text"
            placeholder="Enter text" onChange={((e)=>{
                props.setTextToTrans(e.target.value)
            })}
          ></textarea>
          <textarea
            name="" value={props.transText}
            className="to-text"
            placeholder="Translation"
          >{props.transText}</textarea>
        </div>

        <div className="controls">
          <select value={props.fromLang} onChange={(e)=>{
            props.setFromLang(e.target.value)
          }}>
            {props.data.data.languages.map((e) => {
              return <option value={e.code}>{e.name}({e.code})</option>;
            })}
          </select>

          <select value={props.toLang} onChange={(e)=>{
            props.setToLang(e.target.value)
          }}>
            {props.data.data.languages.map((e) => {
              return <option value={e.code}>{e.name}({e.code})</option>;
            })}
          </select>
        </div>
      </div>
      <button onClick={HandleClick}>Translate Text</button>
    </div>
  );
}

export default body;
