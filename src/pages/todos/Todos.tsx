import React from 'react';

import Header from './components/Header';
import UpgradePro from './components/UpgradePro';
import TodoList from './components/TodoList';
import { Todo } from '../../types/types';
import AddTodoBtn from './components/AddTodoBtn';

const Todos = ({
  setAddTodo,
  todos,
  setTodos,
  setEditId,
  setEditText
}: {
  setAddTodo: React.Dispatch<React.SetStateAction<boolean>>;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setEditId: React.Dispatch<React.SetStateAction<number | null>>;
  setEditText: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return (
    <div className='flex flex-col w-[100%] md:w-[40%] shadow-[0_0_7px_2px_#00000040] bg-[#F3F3F3]'>
      <Header />
      <UpgradePro />
      <TodoList todos={todos} setTodos={setTodos} setEditId={setEditId} setEditText={setEditText} />
      <div className='mt-auto'>
        <AddTodoBtn setAddTodo={setAddTodo} />
      </div>
    </div>
  );
};

export default Todos;
