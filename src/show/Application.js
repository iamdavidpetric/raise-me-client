import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home, Project } from './pages';
import { Navbar } from '../show/components';

const Application = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen h-screen w-screen'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/project' element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Application;
