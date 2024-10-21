import Avatar from '../../../assets/avatar.png';

const Header = () => {
  return (
    <div
    className='bg-[#3556AB] flex px-8 py-[20px]  
border border-[#00000040] gap-[21px] '
  >
    <img src={Avatar} className='w-[50px] h-[50px]' />
    <div>
      <h2 className='text-white font-medium'>Hello, Jhon</h2>
      <p className='font-thin text-white text-[25px] italic mt-2'>
        What are your plans for today?
      </p>
    </div>
  </div>
  )
}

export default Header