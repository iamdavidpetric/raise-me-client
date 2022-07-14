import { BiSearch } from 'react-icons/bi';
import { FiUnlock } from 'react-icons/fi';
import { TbStairsUp } from 'react-icons/tb';
import { GiTreeGrowth } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { MdOutlineExplore } from 'react-icons/md';
import { IoConstructOutline } from 'react-icons/io5';

import { Button } from '../';
import { EXPLORE_PATH, HOME_PATH } from '../../../process/routes/paths';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className='flex flex-row h-12 justify-between bg-primary-50 sticky top-0 py-2 z-10'>
      <div className='flex flex-row mx-2 items-center w-1/3'>
        <div
          onClick={() => navigate(EXPLORE_PATH)}
          className='flex text-white transition duration-200 items-center'>
          <Button
            variant='secondary'
            iconLeft={<MdOutlineExplore className='mx-1' size='1.5rem' />}
            label='explore'
          />
        </div>

        <div className='flex transition duration-200 items-center'>
          <Button
            variant='secondary'
            iconLeft={<BiSearch className='mx-1' size='1.5rem' />}
            label='search'
          />
        </div>
      </div>

      <div
        onClick={() => navigate(HOME_PATH)}
        className='text-white flex items-center text-2xl cursor-pointer'>
        <GiTreeGrowth /> raise.me
      </div>

      <div className='flex flex-row items-center justify-end mx-2 w-1/3'>
        <div className='flex transition-all duration-300 items-center hover:px-2 hover:py-1'>
          <Button
            variant='secondary'
            iconLeft={<IoConstructOutline className='mx-1' size='1.5rem' />}
            label='how it works'
          />
        </div>

        <div className='flex transition-all duration-300 items-center hover:px-2 hover:py-1'>
          <Button
            variant='secondary'
            iconLeft={<FiUnlock className='mx-1' size='1.5rem' />}
            label='sign in'
          />
        </div>

        <div className='flex border-2 border-primary-50 items-center hover:border-2 hover:rounded-full hover:border-white transition-all duration-300 hover:px-2 hover:py-1'>
          <Button
            variant='secondary'
            iconLeft={<TbStairsUp className='px-0 mx-0' size='1.5rem' />}
            label='raise it'
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
