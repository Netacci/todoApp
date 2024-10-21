import React from 'react';
import { TodoCardProps } from '../../types/types';
import { Check } from 'lucide-react';

const TodoCard: React.FC<TodoCardProps> = ({ todo, handleToggle, handleEdit }) => {

 
  return (
    <li className='bg-white border border-[#E7E7E7] px-[20px] py-[30px] mb-[24px] shadow-[0_4px_4px_0px_#0000001A] rounded-md flex justify-between items-center'>
      <div className='flex items-center space-x-4 flex-grow'>
        <button
          onClick={()=>handleToggle(todo.id)}
          className={`w-[32px] h-[32px] rounded-full border-[1.5px] ${
            todo.completed
              ? 'bg-green-500 border-green-500 flex items-center justify-center'
              : 'border-[#071D55]'
          }`}
        >
          {todo.completed && <Check className='text-[#8D8D8D] ' size={20} />}
        </button>
        <p
          className={`flex-grow ${
            todo.completed
              ? 'line-through text-[#8D8D8D] font-medium'
              : 'text-[#071D55] font-medium'
          }`}
        >
          {todo.title}
        </p>
      </div>
      <button onClick={()=>handleEdit(todo?.id, todo?.title)} className='text-[#071D55] font-medium border border-[#071D55] bg-white rounded p-[12px]'>
        Edit
      </button>
    </li>
  );
};

export default TodoCard;
