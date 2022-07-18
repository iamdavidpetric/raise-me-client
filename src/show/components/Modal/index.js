import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Modal = ({ children, setVisible, title, visible }) => {
  useEffect(() => {
    const listener = e => {
      if (e.key === 'Escape') {
        setVisible(false);
      }
    };
    window.addEventListener('keydown', listener);
  });

  return (
    visible && (
      <div className='fixed z-10 inset-0 overflow-y-auto '>
        <div className='items-center justify-center min-h-screen text-center block p-0'>
          <div
            className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'
            onClick={() => setVisible(false)}
          />
          <span className='inline-block align-middle h-screen'>&#8203;</span>
          <div className='inline-block bg-white text-black rounded-lg text-left overflow-hidden shadow-xl transform transition-all my-8 align-middle max-w-lg w-full'>
            <div className='flex justify-center p-6 pb-4'>
              <div className='flex flex-col mt-3 text-center justify-center w-full'>
                {title && (
                  <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    {title}
                  </h3>
                )}
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

Modal.defaultProps = {
  children: undefined,
  setVisible: false,
  title: '',
  visible: false
};

Modal.dPropTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  setVisible: PropTypes.bool,
  title: PropTypes.string,
  visible: PropTypes.bool
};

export default Modal;
