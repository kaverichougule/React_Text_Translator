import { useEffect } from "react";
import axios from 'react'
import "./App.css";
import Body from "./Components/Body"
function App() {
  document.title="Text Translator"
  useEffect(() => {
    const fetchData = async () => {
      const encodedParams = new URLSearchParams();
      encodedParams.set("source_language", "en");
      encodedParams.set("target_language", "id");
      encodedParams.set("text", "What is your name?");
      
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
      } catch (error) {
        console.error(error);
      }
    };
  }, []);
  return <div className="App">
    <Body />
  </div>;
}

export default App;
