import React, { useState } from 'react';
import TodoActions from './TodoActions';
import { Todo } from '../../../types/types';

const AddTodoForm: React.FC<{
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  editText: string | null;
  setEditText: React.Dispatch<React.SetStateAction<string | null>>;
  editId: number | null;
}> = ({ setTodos, editText, setEditText, editId }) => {
  const [value, setValue] = useState('');
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (editText) {
      setEditText(e.target.value);
    } else {
      setValue(e.target.value);
    }
  };
  const handleAddTodo = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos((prevTodos: Todo[]) => [
      ...prevTodos,
      { id: Date.now(), title: value, completed: false },
    ]);

    setValue('');
  };
  const handleEditTodo = (e: React.FormEvent) => {
    e.preventDefault();
    setTodos((prevTodos: Todo[]) =>
      prevTodos.map((todo: Todo) =>
        todo?.id === editId ? { ...todo, title: editText ?? '' } : todo
      )
    );
    setEditText('');
    setValue('');
  };
  const handleDelete = () => {
    setTodos((prevTodos: Todo[]) =>
      prevTodos.filter((todo: Todo) => todo.id !== editId)
    );
  };
  return (
    <div className='px-[20px]  mt-[28px] flex flex-col h-full'>
      <p className='text-[#000000]'>Task Name</p>
      <form
        onSubmit={editText ? handleEditTodo : handleAddTodo}
        className='flex flex-col h-full'
      >
        <input
          onChange={onChange}
          value={editText ? editText : value}
          type='text'
          className='bg-[#F3F3F3] border-2 border-[#CBCBCB] px-[26px] py-[20px] w-full mt-[15px] rounded-[9px] text-[#0D2972] text-[20px]'
        />
        <div className='mt-auto'>
          <TodoActions handleDelete={handleDelete} value={value} />
        </div>
      </form>
    </div>
  );
};

export default AddTodoForm;
