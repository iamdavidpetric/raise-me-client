import { FiUnlock } from 'react-icons/fi';
import { TbStairsUp } from 'react-icons/tb';
import { GiTreeGrowth } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { MdOutlineExplore } from 'react-icons/md';
import { IoConstructOutline } from 'react-icons/io5';
import { BsFillPersonLinesFill } from 'react-icons/bs';

import { Fragment, useState, useEffect } from 'react';

import { Button, Modal } from '../';
import { EXPLORE_PATH, HOME_PATH } from '../../../process/routes/paths';

const Navbar = () => {
  const navigate = useNavigate();
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        setOpenSignUpModal(null);
      }
    };
    window.addEventListener('keydown', listener);
  });

  const closeSignupModal = () => {
    setOpenSignUpModal(false);
  };

  return (
    <Fragment>
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
              onClick={() => setOpenSignUpModal(true)}
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

      <Modal setVisible={setOpenSignUpModal} visible={openSignUpModal}>
        <div className='min-h-full flex items-center justify-center py-12 px-6'>
          <div className='max-w-md w-full space-y-8'>
            <div className='flex flex-col justify-center items-center'>
              <BsFillPersonLinesFill
                size={'3rem'}
                className='text-primary-500'
              />
              <h2 className='mt-2 text-center text-3xl font-extrabold text-gray-900'>
                Create a new account
              </h2>
            </div>
            <form className='mt-8 space-y-6' action='#' method='POST'>
              <input type='hidden' name='remember' value='true' />
              <div className='rounded-md shadow-sm -space-y-px'>
                <div>
                  <label htmlFor='username' className='sr-only'>
                    Username
                  </label>
                  <input
                    id='username'
                    name='username'
                    type='username'
                    autoComplete='username'
                    required
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 text-sm'
                    placeholder='Username'
                  />
                </div>
                <div>
                  <label htmlFor='email-address' className='sr-only'>
                    Email address
                  </label>
                  <input
                    id='email-address'
                    name='email'
                    type='email'
                    autoComplete='email'
                    required
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 text-sm'
                    placeholder='Email address'
                  />
                </div>

                <div>
                  <label htmlFor='password' className='sr-only'>
                    Password
                  </label>
                  <input
                    id='password'
                    name='password'
                    type='password'
                    autoComplete='current-password'
                    required
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 text-sm'
                    placeholder='Password'
                  />
                </div>

                <div>
                  <label htmlFor='confirmpassword' className='sr-only'>
                    Confirm Password
                  </label>
                  <input
                    id='confirmpassword'
                    name='confirmpassword'
                    type='password'
                    autoComplete='current-password'
                    required
                    className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm'
                    placeholder='Confirm password'
                  />
                </div>
              </div>

              <div className='flex items-center justify-between'></div>
              <div>
                <button
                  type='submit'
                  className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-500 hover:bg-primary-600'>
                  Sign Up
                </button>
                <button
                  onClick={closeSignupModal}
                  className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-200 hover:bg-primary-400 mt-2'>
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default Navbar;
