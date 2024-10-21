

const Header = ({editText} : {editText: string | null}) => {
  return (
    <div
      className='bg-[#3556AB] flex px-8 py-[20px]  
border border-[#00000040] gap-[21px] w-full h-[123px] '
    >
      <h2 className='text-white font-medium text-[24px]'>{editText ? 'Edit Task' : 'Add Task'}</h2>
    </div>
  );
};

export default Header;
