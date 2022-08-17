import { useSelector } from 'react-redux';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Navbar } from 'show/components';
import { HOME_PATH } from 'process/routes/paths';
import { privateRoutes, publicRoutes } from 'process/routes';

const Application = () => {
  const currentUser = useSelector(state => state.user);
  return (
    <BrowserRouter>
      <div className='flex flex-col justify-between min-h-screen h-screen w-screen'>
        <Navbar />
        <Routes>
          {privateRoutes.map(route => (
            <Route
              path={route.path}
              key={route.path}
              element={
                currentUser.isLoggedIn ? (
                  <route.element />
                ) : (
                  <Navigate to={HOME_PATH} replace />
                )
              }
            />
          ))}
          {publicRoutes.map(route => (
            <Route path={route.path} key={route.path} element={<route.element />} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Application;
