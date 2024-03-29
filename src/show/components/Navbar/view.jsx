import PropTypes from 'prop-types';
import { ImExit } from 'react-icons/im';
import { FiUnlock } from 'react-icons/fi';
import { Fragment, useState } from 'react';
import { TbStairsUp } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { MdOutlineExplore } from 'react-icons/md';
import { CgArrowsExpandRight } from 'react-icons/cg';
import { BsArrowBarLeft, BsFillPersonLinesFill, BsPersonCircle } from 'react-icons/bs';

import Paths from 'process/routes/paths';
import { capitalize, mock, onFieldChange } from 'process/helpers';

import { Button, Modal, TextField } from '../';

const Navbar = ({
  currentUser,
  resetState,
  signIn,
  signOut,
  signUp,
  transient,
  updateTransientProps
}) => {
  const navigate = useNavigate();

  const [openLogInModal, setOpenLogInModal] = useState(false);
  const [openLogOutModal, setOpenLogOutModal] = useState(false);
  const [openSignUpModal, setOpenSignUpModal] = useState(false);

  const toggleSignInModal = () => {
    setOpenLogInModal(!openLogInModal);
    resetState();
  };

  const toggleSignUpModal = () => {
    setOpenSignUpModal(!openSignUpModal);
    resetState();
  };

  const toggleLogOutModal = () => {
    setOpenLogOutModal(!openLogOutModal);
  };

  const submitSignIn = e => {
    e.preventDefault();
    toggleSignInModal();
    signIn(transient);
  };

  const submitSignUp = e => {
    e.preventDefault();
    toggleSignUpModal();
    signUp(transient);
  };

  const handleDeleteClick = e => {
    e.preventDefault();
    toggleLogOutModal();
    signOut();
  };

  const switchModals = () => {
    toggleSignInModal();
    toggleSignUpModal();
  };

  return (
    <Fragment>
      <div className='flex flex-row h-12 justify-between bg-primary-600 sticky top-0 py-2 z-10'>
        <div className='flex flex-row mx-2 items-center w-1/3'>
          <div
            onClick={() => navigate(Paths.public.EXPLORE_PATH)}
            className='flex text-white transition duration-200 items-center'>
            <Button
              variant='secondary'
              iconLeft={<MdOutlineExplore className='mx-1' size='1.5rem' />}
              label='explore'
            />
          </div>
          {currentUser?.isLoggedIn && (
            <div onClick={() => navigate(Paths.private.MY_PROJECTS_PATH)}>
              <Button
                variant='secondary'
                iconLeft={<TbStairsUp className='mx-1' size='1.5rem' />}
                label='my projects'
              />
            </div>
          )}
        </div>

        <div
          onClick={() => navigate(Paths.public.HOME_PATH)}
          className='text-white flex items-center text-2xl cursor-pointer hover:hover:scale-110 transition-all duration-300'>
          <CgArrowsExpandRight /> raise.me
        </div>

        <div className='flex flex-row items-center justify-end mx-2 w-1/3'>
          {currentUser?.isLoggedIn ? (
            <div className='flex transition-all duration-300 items-center hover:px-2 hover:py-1'>
              <Button
                onClick={toggleLogOutModal}
                variant='secondary'
                iconLeft={<BsArrowBarLeft className='mx-1' size='1.5rem' />}
                label='log out'
              />
              <div className='flex border-2 border-primary-600 items-center hover:border-2 hover:rounded-full hover:border-white transition-all duration-300 hover:px-2 hover:py-1'>
                <Button
                  onClick={() => navigate(Paths.private.CREATE_PROJECT_PATH)}
                  variant='secondary'
                  iconLeft={<TbStairsUp className='px-0 mx-0' size='1.5rem' />}
                  label='raise it'
                />
              </div>
            </div>
          ) : (
            <div className='flex transition-all duration-300 items-center hover:px-2 hover:py-1'>
              <Button
                onClick={toggleSignInModal}
                variant='secondary'
                iconLeft={<FiUnlock className='mx-1' size='1.5rem' />}
                label='sign in'
              />
            </div>
          )}
        </div>
      </div>

      <Modal setVisible={toggleSignUpModal} visible={openSignUpModal}>
        <div className='min-h-full flex items-center justify-center py-8 px-6'>
          <div className='max-w-md w-full space-y-8'>
            <div className='flex flex-col justify-center items-center'>
              <BsFillPersonLinesFill size='3rem' className='text-primary-500' />
              <h2 className='mt-2 text-center text-3xl font-extrabold text-gray-900'>
                Create a new account
              </h2>
            </div>
            <form className='mt-8 space-y-6'>
              <div className='rounded-md shadow-sm -space-y-px'>
                <TextField
                  onChange={e =>
                    onFieldChange('username', e.target.value, updateTransientProps)
                  }
                  value={transient.username}
                  required
                  type='text'
                  placeholder='Username'
                  className='rounded-t-md'
                />
                <TextField
                  onChange={e =>
                    onFieldChange('first_name', e.target.value, updateTransientProps)
                  }
                  value={capitalize(transient.first_name)}
                  required
                  type='text'
                  placeholder='First Name'
                />
                <TextField
                  onChange={e =>
                    onFieldChange('last_name', e.target.value, updateTransientProps)
                  }
                  value={capitalize(transient.last_name)}
                  required
                  type='text'
                  placeholder='Last Name'
                />
                <TextField
                  onChange={e =>
                    onFieldChange('email', e.target.value, updateTransientProps)
                  }
                  value={transient.email}
                  required
                  type='email'
                  placeholder='Email'
                />
                <TextField
                  onChange={e =>
                    onFieldChange('password', e.target.value, updateTransientProps)
                  }
                  value={transient.password}
                  required
                  type='password'
                  placeholder='Password'
                  className='rounded-b-md'
                />
              </div>

              <div className='flex items-center justify-between w-full'>
                <div className='w-full'>
                  <Button
                    onClick={submitSignUp}
                    label='Sign Up'
                    variant='tertiary'
                    className='bg-primary-500 hover:bg-primary-600'
                  />
                  <Button
                    onClick={toggleSignUpModal}
                    label='Close'
                    variant='tertiary'
                    className='bg-primary-200 hover:bg-primary-400 mt-2'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>

      <Modal setVisible={toggleSignInModal} visible={openLogInModal}>
        <div className='min-h-full flex items-center justify-center py-6 px-6'>
          <div className='max-w-md w-full space-y-8'>
            <div className='flex flex-col justify-center items-center'>
              <BsPersonCircle size='3rem' className='text-primary-500' />
              <h2 className='mt-2 text-center text-3xl font-extrabold text-gray-900'>
                Log in
              </h2>
            </div>
            <form className='mt-8 space-y-6'>
              <div className='rounded-md shadow-sm -space-y-px'>
                <TextField
                  required
                  type='email'
                  placeholder='Email'
                  className='rounded-t-md text-center'
                  onChange={e =>
                    onFieldChange('email', e.target.value, updateTransientProps)
                  }
                  value={transient.email}
                />
                <TextField
                  required
                  type='password'
                  placeholder='Confirm Password'
                  className='rounded-b-md text-center'
                  onChange={e =>
                    onFieldChange('password', e.target.value, updateTransientProps)
                  }
                  value={transient.password}
                />
              </div>

              <div className='flex items-center justify-between w-full'>
                <div className='w-full'>
                  <Button
                    onClick={submitSignIn}
                    variant='tertiary'
                    label='Sign In'
                    className='bg-primary-500 hover:bg-primary-600'
                  />
                  <Button
                    onClick={toggleSignInModal}
                    variant='tertiary'
                    label='Close'
                    className='bg-primary-200 hover:bg-primary-400 mt-2'
                  />
                </div>
              </div>
              <div
                onClick={switchModals}
                className='text-gray-500 text-sm hover:text-gray-700 cursor-pointer hover:underline'>
                Don't have an account? Sign up.
              </div>
            </form>
          </div>
        </div>
      </Modal>

      <Modal setVisible={toggleLogOutModal} visible={openLogOutModal}>
        <div className='min-h-full flex items-center justify-center py-8 px-6'>
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
                    onClick={handleDeleteClick}
                    variant='tertiary'
                    label='Log Out'
                    className='bg-primary-500 hover:bg-primary-600'
                  />
                  <Button
                    onClick={toggleLogOutModal}
                    variant='tertiary'
                    label='Close'
                    className='bg-primary-200 hover:bg-primary-400 mt-2'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

Navbar.defaultProps = {
  currentUser: {},
  resetState: mock,
  signIn: mock,
  signOut: mock,
  signUp: mock,
  transient: {},
  updateTransientProps: mock
};

Navbar.propTypes = {
  currentUser: PropTypes.object,
  resetState: PropTypes.func,
  signIn: PropTypes.func,
  signOut: PropTypes.func,
  signUp: PropTypes.func,
  transient: PropTypes.object,
  updateTransientProps: PropTypes.func
};

export default Navbar;
