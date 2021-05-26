import React, {useState} from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState({num1: '', num2: ''});
  const [result, setResult] = useState(0);

  const inputChanged = (event) => {
    setNumber({...number, [event.target.name]: event.target.value});
  }
  
  const plus = () => {
    let result = parseInt(number.num1) + parseInt(number.num2);
    setResult(result);
  }

  const minus = () => {
    let result;
    if(parseInt(number.num1 >= number.num2)) {
      result = number.num1 - number.num2;
    } else {
      result = number.num2 - number.num1; 
    }
    setResult(result);
  }

  return (
    <div className="App">
      <p>Result = {result}</p>
      <input placeholder="Num1" name="num1" value={number.num1} onChange={inputChanged} />
      <input placeholder="Num2" name="num2" value={number.num2} onChange={inputChanged} />
      <button onClick={plus}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
}

export default App;
