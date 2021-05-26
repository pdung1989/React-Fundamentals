import React, { useState } from 'react';
import './App.css';
import ReactiveButton from 'reactive-button';

import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

function App() {
  const [todo, setTodo] = useState({ description: '', date: '', status: '' });
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({ ...todo, [event.target.name]: event.target.value });
  }

  const addTodo = () => {
    setTodos([...todos, todo]);
    setTodo({ description: '', date: '', status: '' });
  }

  return (
    <div className="App">
      <input placeholder="Description" name="description" value={todo.description} onChange={inputChanged} />
      <input placeholder="Date" name="date" value={todo.date} onChange={inputChanged} />
      <input placeholder="Status" name="status" value={todo.status} onChange={inputChanged} />
      <ReactiveButton
        onClick={addTodo}
        idleText={'Add'}
        type={'button'}
        style={{ borderRadius: '5px', margin: '10px' }}
        rounded={true}
        color="violet"
        size={'small'}
        width={'null'}
        height={'null'}
        animation={true} />
      <div className="ag-theme-material" style={{ height: 600, width: 600, margin: '10px auto' }}>
        <AgGridReact
          rowData={todos}>
          <AgGridColumn field="description" sortable={true} filterable={true} suppressMovable={true} animateRows={true}></AgGridColumn>
          <AgGridColumn field="date" sortable={true} filterable={true} suppressMovable={true} animateRows={true}></AgGridColumn>
          <AgGridColumn field="status" sortable={true} filterable={true} suppressMovable={true} animateRows={true}></AgGridColumn>
        </AgGridReact>
      </div>
    </div>
  );
}

export default App;