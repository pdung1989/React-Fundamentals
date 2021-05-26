import React, { useState } from 'react';
import TodoTable from './TodoTable';

function Todolist() {

  const [todo, setTodo] = useState({ despcription: '', date: '' });
  const [todos, setTodos] = useState([]);

  const inputedChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: '', date: '' });
  }

  const deleteTodo = (row) => {
    setTodos(todos.filter((todo, index) => index !== row));
  }

  return (
    <div className="App">
      <input placeholder="Description" name="description" value={todo.description} onChange={inputedChanged} />
      <input placeholder="Date" name="date" value={todo.date} onChange={inputedChanged} />
      <button onClick={addTodo}>Add</button>
      <TodoTable todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todolist;
