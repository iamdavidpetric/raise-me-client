import { Button, Card, ProgressBar } from '../../../components';

const Home = () => {
  return (
    <div className='bg-primary-50 flex flex-col h-full w-full'>
      <div className='bg-white'>
        <div className='bg-white flex items-center justify-between w-full h-24 text-4xl'>
          <div className='w-1/4 flex flex-col items-center justify-start border-r-4'>
            222,301
            <div className='text-sm'>projects funded</div>
          </div>
          <div className='w-1/4 flex flex-col items-center justify-center'>
            $6,103,555,942
            <div className='text-sm'>towards creative work</div>
          </div>
          <div className='w-1/4 flex flex-col items-center justify-end border-l-4'>
            68,319,962
            <div className='text-sm'>pledges</div>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='flex flex-col w-1/3 h-128 mt-5 mr-2'>
          <div className='h-112 ml-5'>
            <img
              src='https://i.imgur.com/kHgmAGw.jpg'
              alt='backpack'
              className='w-full h-full object-cover rounded-t-lg'
            />
          </div>
          <div className='bg-white h-full ml-5 rounded-b-lg text-gray-500 text-lg text-center'>
            <div>All Access | Outdoor Leisure Backpac</div>
            <div className='flex justify-center'>
              <Button variant='outline' label='49 $' />
            </div>
            <div className='flex items-center justify-center mb-2 mt-2'>
              <ProgressBar percentage={25} />
            </div>
          </div>
        </div>
        <div className='w-full h-128 mr-5 mt-5'>
          <div className='flex flex-col content-start h-full'>
            <div className='h-1/4'>
              <Card
                src='https://i.imgur.com/O4vo5Uf.jpg'
                reversed={true}
                title='All Access | Outdoor Leisure Backpack'
                price={'49$'}
                percentage={30}
              />
            </div>
            <div className='h-1/4 mt-2'>
              <Card
                src='https://i.imgur.com/HJcS8Xc.jpg'
                reversed={true}
                title='All Access | Outdoor Leisure Backpac'
                price={'49$'}
                percentage={89}
              />
            </div>
            <div className='h-1/4 mt-2 mr-2'>
              <Card
                src='https://i.imgur.com/O4vo5Uf.jpg'
                reversed={false}
                title='All Access | Outdoor Leisure Backpac'
                price={'49$'}
                percentage={40}
              />
            </div>
            <div className='h-1/4 mt-2 mr-2'>
              <Card
                src='https://i.imgur.com/HJcS8Xc.jpg'
                reversed={false}
                title='All Access | Outdoor Leisure Backpac'
                price={'49$'}
                percentage={99}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
