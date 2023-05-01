import React, { useState } from "react";

export default function Textform(props) {

  const handleOnClickup = (event) => {
    let newtext = text.toUpperCase();
    settext(newtext);
    props.showalert("Text Converted to Uppercase", ":) ")
};
const handleOnClicklow = (event) => {
    let newtext = text.toLowerCase();
    settext(newtext);
    props.showalert("Text Converted to Lowercase", ":) ")
};
const handleclear = (event) => {
    let newtext = "";
    settext(newtext);
    props.showalert("All clear", ":) ")
  };
  

  const handleOnChange = (event) => {
    settext(event.target.value);
  };

  const [text, settext] = useState("Enter Text Here");

  return (
    <>
      <div>
        <div className="mb-3 mt-5">
          <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
            {props.titleofarea}
          </h1>
          <textarea
            style={{
              backgroundColor: props.mode === "light" ? "white" : "#343a40",
              color: props.mode ==="light"? "black" : "white",
            }}
            className="form-control border border-dark border-2"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className={`btn btn-outline-${props.mode ==='light'? 'dark':'light'} mx-2`} onClick={handleOnClickup}>
          Convert to Uppercase
        </button>
        <button
          className={`btn btn-outline-${props.mode ==='light'? 'dark':'light'} mx-2`}
          onClick={handleOnClicklow}
        >
          Convert to Lowercase
        </button>
        <button className={`btn btn-outline-${props.mode ==='light'? 'dark':'light'} mx-2`} onClick={handleclear}>
          Clear Text
        </button>
      </div>

      <div>
        <h3
          style={{ color: props.mode === "light" ? "black" : "white" }}
          className="my-3"
        >
          Your text summary{" "}
        </h3>
        <p style={{ color: props.mode === "light" ? "black" : "white" }}>
          {text.split(" ").length} words | {text.length} characters
        </p>
      </div>
    </>
  );
}
