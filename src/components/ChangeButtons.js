import React from "react";

function ChangeButtons(props) {
  // Should be the same
  const handleAC = () => {
    props.setInput("0");
    props.setOutput("");
  };

  //
  const handleCE = () => {
    // if output is result
    if (props.output.includes("=")) {
      props.setInput("0");
      props.setOutput("");
      // output is empty
    } else if (props.output.length === 0) {
      return;
      // output has only 1 number or decimal
    } else if (
      props.output.length === 1 ||
      (props.output.length === 2 && props.output[0] === "-") ||
      (props.output.length === 2 && props.output[0] === "0")
    ) {
      props.setInput("0");
      props.setOutput(props.output.slice(0, -2));
      // input at default 0 => delete only output
    } else if (props.output && props.input.length === 1) {
      props.setInput("0");
      props.setOutput(props.output.slice(0, -1));
    } else {
      // default case
      props.setInput(props.input.slice(0, -1));
      props.setOutput(props.output.slice(0, -1));
    }
  };

  return (
    <div className="ChangeButtons">
      <button className="clear" id="clear" onClick={handleAC}>
        AC
      </button>
      <button id="ce" onClick={handleCE}>
        CE
      </button>
    </div>
  );
}

export default ChangeButtons;
