import React from 'react';


interface TodoActionsProps {
  handleDelete: () => void;
  value: string;
}
const TodoActions: React.FC<TodoActionsProps> = ({handleDelete, value}) => {
  return (
    <div className='flex flex-col h-full'>
    <div className='flex gap-[20px] pb-[25px]'>
      <button onClick={handleDelete} className='rounded-md h-[61px] bg-[#AB3535] border-2 border-[#720D0D] text-white px-4 py-2 w-[30%]'>
        Delete
      </button>
      <button
        type='submit'
        className='rounded-md h-[61px] bg-[#3556AB] border-2 border-[#0D2972] text-white px-4 py-2 w-[70%]'
        disabled={value.length === 0}

      >
        Save
      </button>
    </div>
  </div>
  
  );
};

export default TodoActions;
