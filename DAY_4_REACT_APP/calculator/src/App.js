import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState("");
  const [op, setOp] = useState("")

  function handleClick(event) {
    setCount(event.target.value);
  }

  function handleSelect(event){
    setOp(event.target.value)
  }

  function deleteScreen() {
    setCount("");
  }

  function calculate() {}

  return (
    <div className="App">
      

      <input type="text" placeholder="0" id="result" value={count} />

      {/* <select name = "operator" onClick = {(event)=> handleSelect(event)} />
      <button value= "" className="button">+</>
      <button value= "" className="button">-</>
      <button value= "" className="button">x</>
      <button value= "" className="button">/</> */}
      
      <input type="button" value="+" className="button" onClick={handleSelect}/>
      <input type="button" value="-" className="button" onClick={handleSelect}/>
      <input type="button" value="x" className="button" onClick={handleSelect}/>
      <input type="button" value="/" className="button" onClick={handleSelect}/>

      <input type="button" value="9" className="button1" onClick={handleClick} />
      <input type="button" value="8" className="button1" onClick={handleClick}/>
      <input type="button" value="7" className="button1" onClick={handleClick}/>
      <input type="button" value="6" className="button1" onClick={handleClick}/>
      <input type="button" value="5" className="button1" onClick={handleClick}/>
      <input type="button" value="4" className="button1" onClick={handleClick}/>
      <input type="button" value="3" className="button1" onClick={handleClick}/>
      <input type="button" value="2" className="button1" onClick={handleClick}/>
      <input type="button" value="1" className="button1" onClick={handleClick}/>
      <input type="button" value="0" className="button1" onClick={handleClick}/>
      <input type="button" value="." className="button1" onClick={handleClick}/>
      <input type="button" value="AC" className="button1" onClick={deleteScreen}/>
      <input type="button" value="=" className="button2"/>
    </div>
  );
}

export default App;
