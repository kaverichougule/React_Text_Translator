import { useEffect,useState } from "react";
import axios from 'axios';
import React from 'react';
import "./App.css";
import Body from "./Components/Body";
import data from "./Components/data.json";
function App() {
  document.title="Text Translator";
  let [fromLang,setFromLang]=useState("en");
  let [toLang,setToLang]=useState("hi");
  let [textToTrans,setTextToTrans]=useState("Hello World");
  let [transText, setTransText]=useState("");
  let [count,setCount]=useState(0);
  
  useEffect(() => {
    const fetchData = async () => {
      const encodedParams = new URLSearchParams();
      encodedParams.set("source_language", fromLang);
      encodedParams.set("target_language", toLang);
      encodedParams.set("text", textToTrans);
      
      const options = {
        method: "POST",
        url: "https://text-translator2.p.rapidapi.com/translate",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":
            "18df0ad753msh8339d3815f02a0ep1454e5jsn28f139d105be",
          "X-RapidAPI-Host": "text-translator2.p.rapidapi.com",
        },
        data: encodedParams,
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setTransText(response.data.data.translatedText)
      } catch (error) {
        console.log(error);
      }
    };
    fetchData()
  }, [count,fromLang,toLang]);
  return <div className="App">
  <Body data={data} fromLang={fromLang} setFromLang={setFromLang} toLang={toLang} setToLang={setToLang} textToTrans={textToTrans} setTextToTrans={setTextToTrans} transText={transText} setCount={setCount} /> 
  </div>;
}

export default App;
