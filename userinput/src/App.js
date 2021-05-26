import React, {useState} from 'react';
import './App.css';

function App() {
  const [person, setPerson] = useState({firstname: '', lastname: '', email: ''});

  const inputChanged = (event) => {
    //the name attribute specifies the attribute of the state object
    setPerson({...person, [event.target.name]: event.target.value});
  }
  //function to show alert message
  const showAlert = () => {
    alert(`Hello ${person.firstname} ${person.lastname}`);
  }
  const formSubmitted =(event) => {
    event.preventDefault();
    //Do sth with your data
  }

  return (
    <div className="App">
      Name: {person.firstname} {person.lastname} Email: {person.email} <br/>
      <form onSubmit={formSubmitted}>
        {/* user the 'name attribute to specify object attribute where teh value will be save */}
        <input placeholder="First name" name="firstname" value={person.firstname} onChange={inputChanged} />
        <input placeholder="Last name" name="lastname" value={person.lastname} onChange={inputChanged} />
        <input placeholder="Email" name="email" value={person.email} onChange={inputChanged} />
        <input type="submit" value="Submit" />
      </form>
      <button onClick={showAlert}>Show Alert</button>
      
    </div>
  );
}

export default App;
