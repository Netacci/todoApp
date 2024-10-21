import React, { useState } from 'react';
import Todos from './pages/todos/Todos';
import AddTodo from './pages/addTodo/AddTodo';
import { todoList } from './config.js/todos';

const App = () => {
  const [addTodo, setAddTodo] = useState(false);
  const [todos, setTodos] = useState(todoList);
  const [editId, setEditId] = useState<number | null>(null);
  const [editText, setEditText] = useState<string | null>('');

  return (
    <div className='flex flex-col md:flex-row min-h-screen'>
      <Todos
        setAddTodo={setAddTodo}
        todos={todos}
        setTodos={setTodos}
        setEditText={setEditText}
        setEditId={setEditId}
      />
      <AddTodo
        addTodo={addTodo}
        todos={todos}
        setTodos={setTodos}
        editText={editText}
        setEditText={setEditText}
        editId={editId}
      />
    </div>
  );
};

export default App;
