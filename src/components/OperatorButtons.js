import React from "react";

function OperatorButtons(props) {
  //
  const endIsNum = /[0-9.]$/;
  const makeNeg = /[%÷×+]$/;
  const changeOp = /[0-9][%÷×\-+]$/;
  const makePos = /[%÷×\-+]-$/;

  const handleOperator = (e) => {
    const { innerText } = e.target;
    // output is result
    if (props.output.includes("=")) {
      props.setOutput(props.result + innerText);
      props.setInput(innerText);
      // no output first key pushed is minus
    } else if (!props.output && innerText === "-") {
      props.setOutput(innerText);
      props.setInput(innerText);
      // only element in output is minus
    } else if (props.output.length === 1 && props.output[0] === "-") {
      if (innerText === "-" || innerText === "+") {
        props.setOutput("");
        props.setInput("0");
      } else {
        return;
      }
      // OUTPUT END IS OPERATOR:
      // add negativ value
    } else if (makeNeg.test(props.output) && innerText === "-") {
      props.setOutput(props.output + innerText); //
      props.setInput(innerText);
      // change operator
    } else if (changeOp.test(props.output)) {
      props.setOutput(props.output.slice(0, -1) + innerText);
      props.setInput(innerText);
      // change operator when negative value
    } else if (makePos.test(props.output)) {
      props.setOutput(props.output.slice(0, -2) + innerText);
      props.setInput(innerText);
      // OUTPUT END IS NUMBER: all ops
    } else if (endIsNum.test(props.output)) {
      props.setOutput(props.output + innerText);
      props.setInput(innerText);
    }
  };

  return (
    <div className="OperatorButtons">
      <button className="ops" id="percentage" onClick={handleOperator}>
        %
      </button>
      <button className="ops" id="divide" onClick={handleOperator}>
        ÷
      </button>
      <button className="ops" id="multiply" onClick={handleOperator}>
        ×
      </button>
      <button className="ops" id="subtract" onClick={handleOperator}>
        -
      </button>
      <button className="ops" id="add" onClick={handleOperator}>
        +
      </button>
    </div>
  );
}

export default OperatorButtons;
