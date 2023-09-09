import React, { useState} from 'react'

export default function TextForm(props) {
    let changeText = (e) => {
        setText(e.target.value);
    };

    let handleChangeLowerCase = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase.", "success");
    }
    
    let handleChangeUpperCase = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to Uppercase.", "success");
    };

    let handleClearText = ()=> {
        setText("");
        props.showAlert("Text Cleared.", "success");
    }

    let handleCopy = ()=> {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard", "success");
    }

    let handleExtraSpaces = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed.", "success");
    }

    let [text, setText] = useState("");

    return (
        <>
        <div className="my-3" style={{color:props.mode==='dark'?'white':'black'}}>
            <h2>{props.heading}</h2>
            <div className="mb-3">
                <textarea className="form-control" id="myBox" style={{backgroundColor:props.mode==='dark'?'#181b1f':'white', color:props.mode==='dark'?'white':'black'}} value={text} onChange={changeText} rows="5"></textarea>
            </div>
            <button disabled={text.length === 0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1`} onClick={handleChangeUpperCase}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1`} onClick={handleChangeLowerCase}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1`} onClick={handleClearText}>Clear Text</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1`} onClick={handleCopy}>Copy Text</button>
            <button disabled={text.length === 0} className={`btn btn-${props.mode==='dark'?'light':'dark'} mx-1`} onClick={handleExtraSpaces}>Remove Exta Spaces</button>
        </div>

        <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
            <h3>Your Text Summary</h3>
            {/* <p>{(text==="" || text[text.length-1]===" ")?text.split(' ').length-1 : text.split(' ').length} Words and {text.length} Characters</p> */}
            <p>{text.split(/\s/).filter((word)=>{return word.length!==0}).length} Words and {text.length} Characters</p>
            <p>{0.008 * (text.split(/\s/).filter((word)=>{return word.length!==0}).length)} minutes to read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>

        </>
    )
}
