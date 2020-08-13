import React from "react";

const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const numIds = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function NumberButtons(props) {
  const endIsOp = /[%÷×\-+]$/;
  //
  const handleNumber = (e) => {
    const { innerText } = e.target;
    // if output is result:
    if (props.output.includes("=")) {
      if (innerText === "0") {
        return;
      }
      props.setInput(innerText);
      props.setOutput(innerText);
      // input = 0
    } else {
      if (props.input[0] === "0" && props.input.length === 1) {
        // input = 0 and no output
        if (!props.output) {
          // don't ad zero's to output
          if (innerText === "0") {
            return;
            // do ad all others
          } else {
            props.setInput(innerText);
            props.setOutput(innerText);
          }
          // input = 0 and there is output
        } else {
          props.setInput(innerText);
          props.setOutput(props.output + innerText);
        }
      } else if (endIsOp.test(props.output)) {
        props.setInput(innerText);
        props.setOutput(props.output + innerText);
        // default case
      } else {
        props.setInput(props.input + innerText);
        props.setOutput(props.output + innerText);
      }
    }
  };

  const handleDecimal = (e) => {
    // const { innerText } = e.target;
    // if output is result: reset
    if (props.output.includes("=")) {
      props.setInput("0.");
      props.setOutput("0.");
    } else {
      // if input =  0
      if (props.input[0] === "0" && props.input.length === 1) {
        // input = 0 but there is output
        if (props.output) {
          props.setInput(props.input + ".");
          props.setOutput(props.output + ".");
        } else {
          props.setInput(props.input + ".");
          props.setOutput("0.");
        }
        // input end is operator
      } else if (endIsOp.test(props.input)) {
        props.setInput("0.");
        props.setOutput(props.output + "0.");
        // else ad decimal if not already used
      } else if (!props.input.includes(".")) {
        props.setInput(props.input + ".");
        props.setOutput(props.output + ".");
      } else {
        return;
      }
    }
  };

  const handleEquals = () => {
    const isOp = /[/*×\-+]/g;
    let result = props.output;
    if (props.output.length === 1 && props.output[0] === "-") {
      props.setInput("0");
      props.setOutput("");
      // output is result: do nothing
    } else if (props.output.includes("=")) {
      return;
    } else {
      // output ends with operator
      if (endIsOp.test(result)) {
        while (endIsOp.test(result)) {
          result = result.slice(0, -1);
        }
      }
      // replace symbols in output
      if (props.output.includes("%")) {
        result = result.replace(/%/g, "/100*");
      }
      if (props.output.includes("÷")) {
        result = result.replace(/÷/g, "/");
      }
      if (props.output.includes("×")) {
        result = result.replace(/×/g, "*");
      }
      // compute result
      if (isOp.test(result)) {
        result = parseFloat(eval(result));
        result = Math.round(result * 100000000000) / 100000000000;
        // store 'notLocale' value in state for reuse
        props.setResult(result.toString());
        result = result.toLocaleString(undefined, {
          maximumFractionDigits: 11,
        });
      }
      // display result
      props.setInput(result);
      props.setOutput(props.output + " = " + result);
    }
  };

  // to use the local decimal symbol on decimal button
  let dec = (0.01).toLocaleString();
  dec = dec.replace(/^0/, "");
  dec = dec.replace(/01$/, "");

  return (
    <div className="NumberButtons">
      {numbers.map((num) => (
        <button id={numIds[num]} key={num} onClick={handleNumber}>
          {num}
        </button>
      ))}

      <button id="decimal" onClick={handleDecimal}>
        {dec}
      </button>
      <button id="equals" onClick={handleEquals}>
        =
      </button>
    </div>
  );
}

export default NumberButtons;
