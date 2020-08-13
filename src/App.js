import React, { useState } from "react";
import Screen from "./components/Screen";
import ChangeButtons from "./components/ChangeButtons";
import OperatorButtons from "./components/OperatorButtons";
import NumberButtons from "./components/NumberButtons";
import "./App.css";

function App() {
  const [input, setInput] = useState("0");
  const [output, setOutput] = useState("");
  const [result, setResult] = useState("");

  return (
    <div className="App">
      <Screen input={input} output={output} />
      <ChangeButtons
        input={input}
        setInput={setInput}
        output={output}
        setOutput={setOutput}
      />
      <OperatorButtons
        input={input}
        setInput={setInput}
        output={output}
        setOutput={setOutput}
        result={result}
      />
      <NumberButtons
        input={input}
        setInput={setInput}
        output={output}
        setOutput={setOutput}
        setResult={setResult}
      />
    </div>
  );
}

export default App;
