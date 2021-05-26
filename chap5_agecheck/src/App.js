import React, {useState} from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({name: '', age:''});

  const inputChanged = (event) => {
    setPerson({...person, [event.target.name]: event.target.value});
  }

  const showAlert = () => {
    if(person.age >= 18) {
      alert(`Hello ${person.name}`);
    } else {
      alert('You are too young');
    }
  }
 
  return (
    <div className="App">
        <input placeholder="Name" name="name" value= {person.name} onChange={inputChanged} />
        <input placeholder="Age" name="age" value= {person.age} onChange={inputChanged} />
        <button onClick={showAlert}>Check Age</button>
    </div>
  );
}

export default App;
