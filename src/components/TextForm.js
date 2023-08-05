import React, {useState} from "react";
import PropTypes from 'prop-types';

export default function TextForm(props) {
    const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleChange=(event)=>{
        setText(event.target.value);
    }

    const handleSelectClick=(event)=>{
        let text = document.getElementById('exampleFormControlTextarea1')
        text.select()
        navigator.clipboard.writeText(text.value);
    }

    const handleSpaceClick=(event)=>{
      let newText = text.select();
      // navigator.clipboard.writeText(newText);
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container my-3">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={handleChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
      <button className="btn btn-primary mx-3" onClick={handleLowClick}>Convert to LowerCase</button>
      <button className="btn btn-primary mx-3" onClick={handleSelectClick}>Copy Text</button>
      <button className="btn btn-primary mx-3" onClick={handleSpaceClick}>Remove extra spaces</button>



    </div>
    <div className="container my-5">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008*text.split(" ").length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  );
}

TextForm.propTypes = {
    heading: PropTypes.string,
}

TextForm.defaultProps = {
    heading:'Example Text Here',
}
