import { FiTwitter } from 'react-icons/fi';
import { AiOutlineLink } from 'react-icons/ai';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import { Button, ProgressBar } from '../../../components';

const project_details = {
  title: 'Backpack 7 in 1',
  description:
    'aim is to remove the stresses of packing and organising for outdoor activities so that people can souly enjoy the positives of an active outdoor lifestyle. All the prototyping and research of the product have already been carried out, so the purpose of the funds are to finalise the design and begin manufacture as soon as possible Once the minimum target has been reached, a website will be made available to pre-order All Access backpacks until a reliable manufacturer has been sourced, after which shipping will begin right away.',
  statement: 'Hai jupana in hora',
  team_members: ['Mihai', 'Petru', 'Alecs', 'Avram'],
  goal: 100000,
  progress_goal: 40000,
  fee: 49,
  dead_line: '2023-01-01',
  images: [
    'https://i.imgur.com/O4vo5Uf.jpg',
    'https://i.imgur.com/HJcS8Xc.jpg',
    'https://i.imgur.com/kHgmAGw.jpg',
    'https://i.imgur.com/O4vo5Uf.jpg',
    'https://i.imgur.com/HJcS8Xc.jpg',
    'https://i.imgur.com/O4vo5Uf.jpg',
    'https://i.imgur.com/kHgmAGw.jpg',
    'https://i.imgur.com/O4vo5Uf.jpg',
    'https://i.imgur.com/HJcS8Xc.jpg',
    'https://i.imgur.com/O4vo5Uf.jpg',
    'https://i.imgur.com/HJcS8Xc.jpg'
  ],
  team_members_pictures: [
    'https://upload.wikimedia.org/wikipedia/commons/d/d8/Elon_Musk_Royal_Society_%28cropped%29.jpg',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
  ]
};

const Project = () => {
  return (
    <div className='flex flex-col bg-white h-full w-full'>
      <div className='flex bg-white h-20 mt-5'>
        <div className='flex h-20 w-20 justify-center items-center'>
          <div className='flex items-center justify-center w-16 h-16 rounded-full ml-5'>
            <img
              src={project_details.team_members_pictures[1]}
              alt={project_details.team_members[0]}
              className='rounded-full object-cover h-14 w-14'
            />
          </div>
        </div>
        <div className='flex flex-col justify-center ml-2 w-full text-2xl'>
          {project_details.statement}
        </div>
      </div>

      <div className='flex mt-5 mb-10'>
        <div className='flex flex-col h-112 w-3/5'>
          <div className='flex justify-center items-center h-full w-full'>
            <img
              src={project_details.images[0]}
              alt='bacpack'
              className='object-cover rounded-lg h-full w-full mx-5 my-5'
            />
          </div>

          <div className='mr-5 h-28 mt-5'>
            <div className='no-scrollbar flex ml-4 h-[112px] no-scrollbar overflow-x-scroll'>
              {project_details.images.map(item => (
                <img
                  key={item}
                  src={item}
                  alt='bacpack'
                  className='h-28 mx-2 rounded-lg'
                />
              ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col w-2/5 h-112 mx-10'>
          <div>
            <div className='flex flex-row h-12 text-2xl items-center justify-center'>
              {project_details.title}
            </div>
            <div className='px-5 mt-2 text-gray-500'>
              {project_details.description}
            </div>
            <div className='mt-5 px-5 text-lg text-center'>
              {project_details.progress_goal}$ / {project_details.goal}$
            </div>
            <div className='px-5'>
              <ProgressBar percentage={25} />
            </div>
            <div className='flex items-center justify-center mt-5'>
              <Button
                className='flex w-1/6 justify-center'
                variant='invertoutline'
                label={`${project_details.fee} $`}
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
            {project_details.description}
          </div>
          <div className='flex justify-center'>
            <div className='flex flex-col'>
              <div className='flex justify-center text-2xl mt-3'>
                Team members
              </div>
              <div className='flex flex-col'>
                <div className='flex justify-center'>
                  <div className='flex h-20 w-20 justify-center items-center'>
                    <div className='flex items-center justify-center w-16 h-16 rounded-full'>
                      <img
                        src={project_details.team_members_pictures[1]}
                        alt={project_details.team_members[1]}
                        className='rounded-full object-cover h-14 w-14'
                      />
                    </div>
                  </div>
                  <div className='flex justify-center items-center'>
                    {project_details.team_members[0]}
                  </div>
                </div>
                <div className='flex'>
                  <div>
                    <div className='flex h-20 w-20 justify-center items-center'>
                      <div className='flex items-center justify-center w-16 h-16 rounded-full'>
                        <img
                          src={project_details.team_members_pictures[2]}
                          alt={project_details.team_members[2]}
                          className='rounded-full object-cover h-14 w-14'
                        />
                      </div>
                    </div>
                    <div className='flex justify-center'>
                      {project_details.team_members[1]}
                    </div>
                  </div>
                  <div>
                    <div className='flex h-20 w-20 justify-center items-center'>
                      <div className='flex items-center justify-center w-16 h-16 rounded-full'>
                        <img
                          src={project_details.team_members_pictures[0]}
                          alt={project_details.team_members[0]}
                          className='rounded-full object-cover h-14 w-14'
                        />
                      </div>
                    </div>
                    <div className='flex justify-center'>
                      {project_details.team_members[2]}
                    </div>
                  </div>
                  <div>
                    <div className='flex h-20 w-20 justify-center items-center'>
                      <div className='flex items-center justify-center w-16 h-16 rounded-full'>
                        <img
                          src={project_details.team_members_pictures[2]}
                          alt={project_details.team_members[2]}
                          className='rounded-full object-cover h-14 w-14'
                        />
                      </div>
                    </div>
                    <div className='flex justify-center'>
                      {project_details.team_members[3]}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-2/5'>
          <div className='mx-5 w-full'>
            <img
              src={project_details.images[1]}
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
