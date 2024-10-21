import React from 'react';
import Header from './components/Header';
import AddTodoForm from './components/AddTodoForm';
import { AddTodoProps } from '../../types/types';

const AddTodo: React.FC<AddTodoProps> = ({
  setTodos,
  editText,
  setEditText,
  editId,
}) => {
  return (
    <>
      <div className=' flex flex-col  w-[100%] md:flex  md:w-[60%] bg-[#F3F3F3]  '>
        <Header editText={editText} />
        <AddTodoForm
          setTodos={setTodos}
          editId={editId}
          editText={editText}
          setEditText={setEditText}
        />
      </div>
    </>
  );
};

export default AddTodo;
