import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInputText] = useState('');

  const searchData = () => {
    fetch("https://api.github.com/search/repositories?q=" + inputText)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Response status not ok!');
        }
        return response.json();
      })
      .then(resData => setItems(resData.items));
  };

  //get user input
  const inputChanged = (event) => {
    setInputText(event.target.value);
  }

  return (
    <div className="App">
      <h1>Repositories</h1>
      <input name="inputText" value={inputText} onChange={inputChanged} />
      <button onClick={searchData}>Search</button>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>URL</th>
          </tr>
          {
            items.map((item, index) =>
              <tr key={index}>
                <td>{item.full_name}</td>
                <td><a href={item.html_url}>{item.html_url}</a></td>
              </tr>
            )
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
