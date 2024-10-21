import React from 'react'

interface AddTodoBtnProps {
  setAddTodo: (addTodo: boolean) => void
}
const AddTodoBtn: React.FC<AddTodoBtnProps> = ({setAddTodo}) => {

  return (
    <div className='flex justify-end pb-[25px] pr-[16px]'>
 
    <button onClick={() => setAddTodo(true)} className='w-[60px] h-[60px] text-white rounded-full bg-[#123EB1] border border-[#071D55] bg-white p-[12px] text-[36px] flex justify-center items-center '>
   +
  </button>
  </div>
  )
}

export default AddTodoBtn