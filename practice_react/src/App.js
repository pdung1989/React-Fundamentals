import React, {useState} from 'react';
import './App.css';

function App(props) {
  const [count, setCount] = useState(0);

  return (
    <div className="App">

      <p>You have clicked the button {count} times</p> 
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <button onClick={() => setCount(0)}>Clear</button>

      { props.message.length >= 10
        ? <p>Too long</p>
        : <p>{props.message}</p>
      }

    </div>
  );
}

export default App;
