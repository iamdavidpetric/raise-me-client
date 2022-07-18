import { Button, Modal } from '../';
import { ImExit } from 'react-icons/im';
import { FiUnlock } from 'react-icons/fi';
import { TbStairsUp } from 'react-icons/tb';
import { GiTreeGrowth } from 'react-icons/gi';
import { useNavigate } from 'react-router-dom';
import { MdOutlineExplore } from 'react-icons/md';
import { IoConstructOutline } from 'react-icons/io5';
import { BsFillPersonLinesFill, BsPersonCircle } from 'react-icons/bs';
import { EXPLORE_PATH, HOME_PATH } from '../../../process/routes/paths';

import { Fragment, useState } from 'react';
import TextField from '../TextField';

const Navbar = () => {
  const navigate = useNavigate();
  const [openSignUpModal, setOpenSignUpModal] = useState(false);
  const [openLogInModal, setOpenLogInModal] = useState(false);
  const [openLogOutModal, setOpenLogOutModal] = useState(false);

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
              // onClick={() => setOpenLogOutModal(true)}
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
              <BsFillPersonLinesFill size='3rem' className='text-primary-500' />
              <h2 className='mt-2 text-center text-3xl font-extrabold text-gray-900'>
                Create a new account
              </h2>
            </div>
            <form className='mt-8 space-y-6'>
              <input type='hidden' name='remember' value='true' />
              <div className='rounded-md shadow-sm -space-y-px'>
                <TextField
                  required
                  type='username'
                  placeholder='Username'
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 text-sm'
                />
                <TextField
                  required
                  type='email'
                  placeholder='Email'
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 text-sm'
                />
                <TextField
                  required
                  type='password'
                  placeholder='Password'
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 text-sm'
                />
                <TextField
                  required
                  type='password'
                  placeholder='Confirm Password'
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm'
                />
              </div>

              <div className='flex items-center justify-between w-full'>
                <div className='w-full'>
                  <Button
                    type='submit'
                    label='Sign Up'
                    className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:text-white bg-primary-500 hover:bg-primary-600'></Button>
                  <Button
                    onClick={() => setOpenSignUpModal(false)}
                    label='Close'
                    className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:text-white bg-primary-200 hover:bg-primary-400 mt-2'></Button>
                </div>
              </div>

              <div
                onClick={() =>
                  setOpenLogInModal(true) & setOpenSignUpModal(false)
                }
                className='text-gray-500 text-sm hover:text-gray-700 cursor-pointer hover:underline'>
                Already have an account? Sign in.
              </div>
            </form>
          </div>
        </div>
      </Modal>

      <Modal setVisible={setOpenLogInModal} visible={openLogInModal}>
        <div className='min-h-full flex items-center justify-center py-12 px-6'>
          <div className='max-w-md w-full space-y-8'>
            <div className='flex flex-col justify-center items-center'>
              <BsPersonCircle size='3rem' className='text-primary-500' />
              <h2 className='mt-2 text-center text-3xl font-extrabold text-gray-900'>
                Log in
              </h2>
            </div>
            <form className='mt-8 space-y-6'>
              <input type='hidden' name='remember' value='true' />
              <div className='rounded-md shadow-sm -space-y-px'>
                <TextField
                  required
                  type='email'
                  placeholder='Email'
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 focus:z-10 text-sm'
                />
                <TextField
                  required
                  type='password'
                  placeholder='Confirm Password'
                  className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 text-sm'
                />
              </div>

              <div className='flex items-center justify-between w-full'>
                <div className='w-full'>
                  <Button
                    type='submit'
                    label='Sign In'
                    className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:text-white bg-primary-500 hover:bg-primary-600'></Button>
                  <Button
                    onClick={() => setOpenLogInModal(false)}
                    label='Close'
                    className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:text-white bg-primary-200 hover:bg-primary-400 mt-2'></Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
      {/* <Modal setVisible={setOpenLogOutModal} visible={openLogOutModal}>
        <div className='min-h-full flex items-center justify-center py-12 px-6'>
          <div className='max-w-md w-full space-y-8'>
            <div className='flex flex-col justify-center items-center'>
              <ImExit size='3rem' className='text-primary-500' />
              <h2 className='mt-2 text-center text-3xl font-extrabold text-gray-900'>
                Log Out
              </h2>
            </div>
            <form className='mt-8 space-y-6'>
              <div className='flex items-center justify-between w-full'>
                <div className='w-full'>
                  <Button
                    type='submit'
                    label='Log Out'
                    className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:text-white bg-primary-500 hover:bg-primary-600'></Button>
                  <Button
                    onClick={() => setOpenLogOutModal(false)}
                    label='Close'
                    className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white hover:text-white bg-primary-200 hover:bg-primary-400 mt-2'></Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal> */}
    </Fragment>
  );
};

export default Navbar;
