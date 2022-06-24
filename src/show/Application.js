import { Home } from './pages';
import { Navbar } from '../show/components';

const Application = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen h-screen w-screen'>
      <Navbar />
      <Home />
    </div>
  );
};

export default Application;
