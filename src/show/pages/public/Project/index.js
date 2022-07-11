import axios from 'axios';
import { FiTwitter } from 'react-icons/fi';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineLink } from 'react-icons/ai';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import { Button, ProgressBar } from '../../../components';

const Project = () => {
  const [project, setProject] = useState({});

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/v1/projects/${id}`)
      .then(res => setProject(res.data))
      .catch(err => err);
  }, [id]);

  const firstPicture = project?.images && project?.images[0];
  const secondaryPicture = project?.images && project?.images[1];
  const restPictures = project?.images && project?.images.slice(2);

  const firstMember = project?.team_members && project?.team_members[0];
  const restMembers = project?.team_members && project?.team_members.slice(1);

  return (
    <div className='flex flex-col bg-white h-full w-full'>
      <div className='flex bg-white h-20 mt-5'>
        <div className='flex h-20 w-20 justify-center items-center'>
          <div className='flex items-center justify-center w-16 h-16 rounded-full ml-5'>
            <img
              src={firstMember?.avatar_url}
              alt={firstMember?.name}
              className='rounded-full object-cover h-14 w-14'
            />
          </div>
        </div>
        <div className='flex flex-col justify-center ml-2 w-full text-2xl'>
          {project?.statement}
        </div>
      </div>

      <div className='flex mt-5 mb-10'>
        <div className='flex flex-col h-112 w-3/5'>
          <div className='flex justify-center items-center h-full w-full'>
            <img
              src={firstPicture}
              alt='main'
              className='object-cover rounded-lg h-full w-full mx-5 my-5'
            />
          </div>

          <div className='mr-5 h-28 mt-5'>
            <div className='no-scrollbar flex ml-4 h-[112px] no-scrollbar overflow-x-scroll'>
              {restPictures &&
                restPictures.map((item, index) => (
                  <img
                    key={index}
                    src={item}
                    alt='...'
                    className='h-28 mx-2 rounded-lg'
                  />
                ))}
            </div>
          </div>
        </div>

        <div className='flex flex-col w-2/5 h-112 mx-10'>
          <div>
            <div className='flex flex-row h-12 text-2xl items-center justify-center'>
              {project?.name}
            </div>
            <div className='px-5 mt-2 text-gray-500'>
              {project?.description}
            </div>
            <div className='mt-5 px-5 text-lg text-center'>
              {project?.amount_invested}$ / {project?.goal}$
            </div>
            <div className='px-5'>
              <ProgressBar percentage={project.achieved_goal_percentage} />
            </div>
            <div className='flex items-center justify-center mt-5'>
              <Button
                className='flex w-1/6 justify-center'
                variant='invert-outline'
                label={`${project?.fee} $`}
                disabled={project.achieved_goal_percentage >= 100}
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
            {project?.description}
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
                        src={firstMember?.avatar_url}
                        alt={firstMember?.name}
                        className='rounded-full object-cover h-14 w-14'
                      />
                    </div>
                  </div>
                  <div className='flex justify-center items-center'>
                    {firstMember?.name}
                  </div>
                </div>
                <div className='flex flex-col w-96 px-0 mx-0'>
                  <div className='flex justify-center items-center'>
                    {restMembers &&
                      restMembers.map(member => (
                        <div
                          className='flex flex-col items-center'
                          key={member.id}>
                          <img
                            src={member?.avatar_url}
                            alt={member?.name}
                            className='rounded-full object-cover h-14 w-14 mx-2'
                          />
                          {member?.name}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex w-2/5'>
          <div className='mx-5 w-full'>
            <img
              src={secondaryPicture}
              alt='secondary'
              className='rounded-lg h-128 object-cover w-full'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
