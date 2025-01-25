import React, { useState } from "react";
import countries from "../data"; 
const Translate = () => {
  const [fromText, setFromText] = useState("");
  const [toText, setToText] = useState("");
  const [fromLang, setFromLang] = useState("en-GB");
  const [toLang, setToLang] = useState("hi-IN");

 
  const handleTextChange = (e) => {
    setFromText(e.target.value);
  };

  const handleTranslate = () => {
    if (fromText === "") return;

    setToText("Loading...");
    const apiUrl = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLang}|${toLang}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setToText(data.responseData.translatedText);
      });
  };

  const handleExchange = () => {
    setFromLang(toLang);
    setToLang(fromLang);
    setFromText(toText);
    setToText(fromText);
  };


  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <div className="text-input">
          <textarea
            value={fromText}
            onChange={handleTextChange}
            placeholder="Enter text"
          ></textarea>
          <textarea
            value={toText}
            readOnly
            placeholder="Translation"
          ></textarea>
        </div>

        <div className="controls">
          <select value={fromLang} onChange={(e) => setFromLang(e.target.value)}>
            {Object.keys(countries).map((code) => (
              <option key={code} value={code}>
                {countries[code]}
              </option>
            ))}
          </select>
          <button className="exchange" onClick={handleExchange}>
            ↔️
          </button>
          <select value={toLang} onChange={(e) => setToLang(e.target.value)}>
            {Object.keys(countries).map((code) => (
              <option key={code} value={code}>
                {countries[code]}
              </option>
            ))}
          </select>
        </div>

        <div className="controls">
          <button onClick={handleTranslate}>Translate</button>
        </div>

        <div className="controls icons">
          <button onClick={() => handleCopy(fromText)}>Copy From Text</button>
          <button onClick={() => handleCopy(toText)}>Copy To Text</button>
        </div>
      </div>
    </div>
  );
};

export default Translate;
