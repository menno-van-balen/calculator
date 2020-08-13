import React from "react";

function Screen(props) {
  return (
    <div className="Screen">
      <div className="output">{props.output}</div>
      <div className="input" id="display">
        {props.input}
      </div>
    </div>
  );
}

export default Screen;
