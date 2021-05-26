import React, { useState } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SaveIcon from '@material-ui/icons/Save';
import TextField from '@material-ui/core/TextField'; //use for input
import AppBar from '@material-ui/core/AppBar';  //Make app bar
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu'; //menu icon


function App() {
  const [todo, setTodo] = useState({description: '', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          {/* size of the text */}
          <Typography variant="h6"> 
            Todolist
          </Typography>
        </Toolbar>
      </AppBar>
      <TextField
        style={{margin: 10}}
        variant="outlined"
        label="Description" 
        name="description" 
        value={todo.description} 
        onChange={inputChanged} 
      />
      <TextField 
        style={{margin: 10}}
        label="Date" 
        name="date" 
        value={todo.date} 
        onChange={inputChanged}
      />
      <Button 
        style={{margin: 10}}
        color="primary"
        variant="outlined"
        //use icon inside the button
        startIcon={<SaveIcon />} 
        onClick={addTodo}>
        Add
      </Button>
      <table>
        <tbody>
       {
          todos.map((todo, index) => 
            <tr key={index}>
              <td>{todo.description}</td>
             <td>{todo.date}</td>
             <td>
               {/* use icon button */}
              <IconButton size="small" color="secondary" onClick={() => deleteTodo(index)}>
                <DeleteIcon />
              </IconButton>
              </td>
            </tr>)
        }
        </tbody>
      </table>
    </div>
  );
}

export default App;