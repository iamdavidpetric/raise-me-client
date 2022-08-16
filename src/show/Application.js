import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Navbar } from 'show/components/';
import routes from 'process/routes/index';

const Application = () => {
  return (
    <BrowserRouter>
      <div className='flex flex-col justify-between min-h-screen h-screen w-screen'>
        <Navbar />
        <Routes>
          {routes.map(route => (
            <Route path={route.path} key={route.path} element={<route.element />} />
          ))}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Application;
