import Cup from '../../../assets/upgradeCup.png';
const UpgradePro = () => {
  return (
    <div className='relative bg-[#CDE53D] flex px-8 py-[20px] border-2 border-[#9EB031]'>
        <div className='flex gap-[21px] items-center'>
          <img src={Cup} className='w-[53px] h-[40px]' />
          <div>
            <p className='text-[#071D55] text-lg font-bold'>
              Go Pro Upgrade Now
            </p>
          </div>
        </div>

        <div className='absolute top-0 right-[21px] -mt-1 bg-[#071D55] w-[66px] h-[71px] flex justify-center items-center'>
          <p className='text-[#F2C94C] text-lg font-medium'>$1</p>
        </div>
      </div>
  )
}

export default UpgradePro