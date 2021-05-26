import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/search/repositories?q=react")
      .then(response => response.json())
      .then(resData => setItems(resData.items))
      .catch(error => console.log(error));
  }, []);

  //get array of urls with 'react' keyword
  const urls = items.filter(item => item.url.includes('react'));

  return (
    <div className="App">
      <h1>Repositories</h1>
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>URL</th>
          </tr>
          {
            urls.map((item, index) =>
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
