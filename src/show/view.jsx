import PropTypes from 'prop-types';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Paths from 'process/routes/paths';
import { Growl, Navbar } from 'show/components';
import { privateRoutes, publicRoutes } from 'process/routes';

const Application = ({ currentUser }) => {
  return (
    <BrowserRouter>
      <div className='flex flex-col justify-between min-h-screen h-screen w-screen'>
        <Navbar />
        <Growl />
        <Routes>
          {privateRoutes.map(route => (
            <Route
              path={route.path}
              key={route?.path}
              element={
                currentUser.isLoggedIn ? (
                  <route.element />
                ) : (
                  <Navigate to={Paths.public.HOME_PATH} replace />
                )
              }
            />
          ))}

          {publicRoutes.map(route => (
            <Route path={route.path} key={route?.path} element={<route.element />} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

Application.defaultProps = {
  currentUser: {}
};

Application.propTypes = {
  currentUser: PropTypes.object
};

export default Application;
