import Button from '../Button';

import { GiTreeGrowth } from 'react-icons/gi';
import { MdOutlineExplore } from 'react-icons/md';
import { BiSearch } from 'react-icons/bi';
import { IoConstructOutline } from 'react-icons/io5';
import { FiUnlock } from 'react-icons/fi';
import { TbStairsUp } from 'react-icons/tb';

const Navbar = () => {
  return (
    <div className='flex flex-row h-12 justify-between bg-primary-50'>
      <div className='flex flex-row mx-2 items-center w-1/3'>
        <div className='flex text-white transition duration-150 items-center'>
          <Button
            className='flex'
            onClick={() => console.log('button explore')}>
            <MdOutlineExplore className='mx-1' size='1.5rem' /> explore
          </Button>
        </div>

        <div className='flex text-white transition duration-150 items-center'>
          <Button className='flex' onClick={() => console.log('search btn')}>
            <BiSearch className='mx-1' size='1.5rem' /> search
          </Button>
        </div>
      </div>

      <div className=' text-white flex items-center text-2xl cursor-pointer'>
        <GiTreeGrowth className='itmes-start' /> raise.me
      </div>

      <div className='flex flex-row items-center justify-end mx-2 w-1/3'>
        <div className='flex text-white transition-all duration-300 items-center hover:px-2 hover:py-1'>
          <Button
            className='flex'
            onClick={() => console.log('how it works btn')}>
            <IoConstructOutline className='mx-1' size='1.5rem' />
            how it works
          </Button>
        </div>

        <div className='flex text-white transition-all duration-300 items-center hover:px-2 hover:py-1'>
          <Button className='flex' onClick={() => console.log('sign in btn')}>
            <FiUnlock className='mx-1' size='1.5rem' />
            sign in
          </Button>
        </div>

        <div className='flex text-white border-2 border-primary-50 items-center hover:border-2 hover:rounded-full hover:border-white transition-all duration-300 hover:px-2 hover:py-1 '>
          <Button className='flex' onClick={() => console.log('raise it btn')}>
            <TbStairsUp className='px-0 mx-0 ' size='1.5rem' />
            raise it
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
