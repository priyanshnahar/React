import React, { useState } from "react";
import "./App.css";

function Calc() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [op, setOp] = useState();
  const [result, setResult] = useState();

  function handleChange(event, number) {
    setNum1(event.target.value);
  }
  function handleChange1(event, number) {
    setNum2(event.target.value);
  }

  function handleButtonClick(str) {
    setOp(str);
  }

  function calculate() {
    console.log(op);
    let ans = 0;
    if (op === "+") {
      ans = Number(num1) + Number(num2);
    } else if (op === "-") {
      ans = Number(num1) - Number(num2);
    } else if (op === "*") {
      ans = Number(num1) * Number(num2);
    } else if (op === "/") {
      ans = Number(num1) / Number(num2);
    }
    setResult(ans);
  }
  return (
    <div>
      <label>Enter first number</label>
      <input
        className="label"
        type="number"
        name="num1"
        value={num1}
        onChange={(event) => handleChange(event, num1)}
      />

      <label>Enter second number</label>
      <input
        className="label"
        type="number"
        name="num2"
        value={num2}
        onChange={(event) => handleChange1(event, num2)}
      />

      <label>Enter operator</label>

      <button className="button" onClick={() => handleButtonClick("+")}>
        +
      </button>
      <button className="button" onClick={() => handleButtonClick("-")}>
        -
      </button>
      <button className="button" onClick={() => handleButtonClick("*")}>
        *
      </button>
      <button className="button" onClick={() => handleButtonClick("/")}>
        /
      </button>
      <button className="button2" type="submit" onClick={calculate}>
        Calculate
      </button>

      <h1>
        {num1} {op} {num2}
      </h1>
      <h1>Output: {result}</h1>
    </div>
  );
}

export default Calc;
