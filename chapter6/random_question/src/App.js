import React, {useState} from 'react';
import './App.css';

function App() {
  const [random, setRandom] = useState('');

  const getRandomNumber = () => {
    return Math.floor(Math.random() * 10);
  }

  const fetchdata = () => {
    fetch("https://opentdb.com/api.php?amount=10")
    .then (response => response.json())
    .then (resData => setRandom(resData.results[getRandomNumber()].question));
  }

  return (
    <div className="App">
      <p>{random}</p>
      <button onClick={fetchdata}>New Question</button>
    </div>
  );
}

export default App;
