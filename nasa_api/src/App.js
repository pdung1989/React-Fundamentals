import React, {useEffect, useState} from 'react';
import './App.css';

function App() {
  const [explanation, setExplanation] = useState('');
  const [url, setUrl] = useState('');

  useEffect(() => {
    fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => response.json())
    .then(data => {
      setExplanation(data.explanation);
      setUrl(data.url);
    })
    .catch(error => console.log(error));
  }, [])

  return (
    <div className="App">
      <h1>Astronomy Picture of the Day </h1>
      <p>{explanation}</p>
      <img alt="Nasa apod" src={url} />
    </div>
  );
}

export default App;
