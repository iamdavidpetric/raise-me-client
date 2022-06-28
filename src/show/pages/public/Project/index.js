import { Button, ProgressBar } from '../../../components';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
import { AiOutlineLink } from 'react-icons/ai';

const Project = () => {
  return (
    <div className='flex flex-col bg-white h-full w-full'>
      <div className='flex bg-white h-20 mt-5'>
        <div className='flex h-20 w-20 justify-center items-center'>
          <div className='flex items-center justify-center w-16 h-16 rounded-full ml-5'>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/d/d8/Elon_Musk_Royal_Society_%28cropped%29.jpg'
              alt='Elon Musk'
              className='rounded-full object-cover h-14 w-14'
            />
          </div>
        </div>
        <div className='flex flex-col justify-center ml-2 w-full text-2xl'>
          Hatz Musk "change your lifestyle with this product or another bs"
        </div>
      </div>

      <div className='flex mt-5 mb-10'>
        <div className='flex flex-col h-112 w-3/5'>
          <div className='flex justify-center items-center h-full w-full'>
            <img
              src='https://i.imgur.com/kHgmAGw.jpg'
              alt='bacpack'
              className='object-cover rounded-lg h-full w-full mx-5 my-5'
            />
          </div>

          <div className='mr-5 h-28 mt-5'>
            <div className='flex ml-4 h-[112px] no-scrollbar overflow-x-scroll'>
              {[...Array(40)].map(item => (
                <img
                  key={item}
                  src='https://i.imgur.com/kHgmAGw.jpg'
                  alt='bacpack'
                  className='h-28 mx-2 rounded-lg'
                />
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col w-2/5 h-112 mx-10'>
          <div>
            <div className='flex flex-row h-12 text-2xl items-center justify-center '>
              All Access | Outdoor Leisure Backpack
            </div>
            <div className='px-5 mt-2 text-gray-500'>
              'All Access' aim is to remove the stresses of packing and
              organising for outdoor activities so that people can souly enjoy
              the positives of an active outdoor lifestyle. All the prototyping
              and research of the product have already been carried out, so the
              purpose of the funds are to finalise the design and begin
              manufacture as soon as possible Once the minimum target has been
              reached, a website will be made available to pre-order All Access
              backpacks until a reliable manufacturer has been sourced, after
              which shipping will begin right away.'
            </div>
            <div className='mt-5 px-5 text-lg text-center'>
              25.000$/100.000$
            </div>
            <div className='px-5'>
              <ProgressBar percentage={25} />
            </div>
            <div className='flex items-center justify-center mt-5 '>
              <Button
                className='flex w-1/6 justify-center'
                variant='invertoutline'
                label='49 $'
              />
            </div>
            <div className='flex px-5 justify-center mt-5'>
              Share it with your friends
            </div>
            <div className='flex px-5 mt-3 justify-center '>
              <Button
                className='text-primary-50 hover:text-primary-300'
                iconLeft={<FaFacebook size='2rem' />}
              />
              <Button
                className='text-primary-50 hover:text-primary-300'
                iconLeft={<FaInstagram size='2rem' />}
              />
              <Button
                className='text-primary-50 hover:text-primary-300'
                iconLeft={<FiTwitter size='2rem' />}
              />
              <Button
                className='text-primary-50 hover:text-primary-300'
                iconLeft={<AiOutlineLink size='2rem' />}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex h-128 px-10 mt-32'>
        <div className='flex flex-col justify-center w-3/5'>
          <div className='flex mt-5 mx-5 text-gray-500 '>
            Description 2 'All Access' aim is to remove the stresses of packing
            and organising for outdoor activities so that people can souly enjoy
            the positives of an active outdoor lifestyle. All the prototyping
            and research of the product have already been carried out, so the
            purpose of the funds are to finalise the design and begin
            manufacture as soon as possible Once the minimum target has been
            reached, a website will be made available to pre-order All Access
            backpacks until a reliable manufacturer has been sourced, after
            which shipping will begin right away. The biggest risk to this
            project is lack of exposure. Every other aspect of the process from
            concept to market is either already taken care of or in the works.
            Quality is a must for us. The materials we will use will be built to
            last, even in the harsh outdoors where our backpack is designed for.
          </div>
          <div className='flex justify-center '>
            <div className='flex flex-col'>
              <div className='flex justify-center text-2xl mt-3'>
                Team members
              </div>
              <div className='flex flex-col'>
                <div className='flex justify-center'>
                  <div className='flex h-20 w-20 justify-center items-center'>
                    <div className='flex items-center justify-center w-16 h-16 rounded-full'>
                      <img
                        src='https://upload.wikimedia.org/wikipedia/commons/d/d8/Elon_Musk_Royal_Society_%28cropped%29.jpg'
                        alt='Elon Musk'
                        className='rounded-full object-cover h-14 w-14'
                      />
                    </div>
                  </div>
                  <div className='flex justify-center items-center'>
                    Hatz Musk
                  </div>
                </div>
                <div className='flex'>
                  <div>
                    <div className='flex h-20 w-20 justify-center items-center'>
                      <div className='flex items-center justify-center w-16 h-16 rounded-full'>
                        <img
                          src='https://upload.wikimedia.org/wikipedia/commons/d/d8/Elon_Musk_Royal_Society_%28cropped%29.jpg'
                          alt='Elon Musk'
                          className='rounded-full object-cover h-14 w-14'
                        />
                      </div>
                    </div>
                    <div className='flex justify-center'>Peter</div>
                  </div>
                  <div>
                    <div className='flex h-20 w-20 justify-center items-center'>
                      <div className='flex items-center justify-center w-16 h-16 rounded-full'>
                        <img
                          src='https://upload.wikimedia.org/wikipedia/commons/d/d8/Elon_Musk_Royal_Society_%28cropped%29.jpg'
                          alt='Elon Musk'
                          className='rounded-full object-cover h-14 w-14'
                        />
                      </div>
                    </div>
                    <div className='flex justify-center'>Mark</div>
                  </div>
                  <div>
                    <div className='flex h-20 w-20 justify-center items-center'>
                      <div className='flex items-center justify-center w-16 h-16 rounded-full'>
                        <img
                          src='https://upload.wikimedia.org/wikipedia/commons/d/d8/Elon_Musk_Royal_Society_%28cropped%29.jpg'
                          alt='Elon Musk'
                          className='rounded-full object-cover h-14 w-14'
                        />
                      </div>
                    </div>
                    <div className='flex justify-center'>Oliver</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-2/5'>
          <div className='mx-5 w-full'>
            <img
              src='https://i.imgur.com/HJcS8Xc.jpg'
              alt='bacpack'
              className='rounded-lg h-128 object-cover w-full'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
