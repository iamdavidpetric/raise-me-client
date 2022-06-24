import { Navbar } from '../show/components';
import { Home } from './pages';

const Application = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen h-screen w-screen'>
      <Navbar />
      <Home />
    </div>
  );
};

export default Application;
