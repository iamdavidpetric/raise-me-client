import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { FiTwitter } from 'react-icons/fi';
import { FaFacebook } from 'react-icons/fa';
import { useParams } from 'react-router-dom';
import { AiOutlineLink } from 'react-icons/ai';

import { mock } from 'process/helpers';
import { Button, ProgressBar, ProductSlider } from 'show/components';

const Project = ({ createGrowls, getProject, selectedProject, getPaymentLink }) => {
  const { id } = useParams();

  useEffect(() => {
    getProject({ id });
  }, [getProject, id]);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    createGrowls([{ type: 'success', content: 'Link copied!' }]);
  };

  const projectPictures = selectedProject?.images;
  const secondaryPicture = selectedProject?.images && selectedProject?.images[1];
  const firstMember = selectedProject?.team_members && selectedProject?.team_members[0];
  const restMembers =
    selectedProject?.team_members && selectedProject?.team_members.slice(1);
  const restRestMembers = restMembers?.filter(
    member => member.name !== null || member.avatar_url !== null
  );

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
          {selectedProject?.statement}
        </div>
      </div>

      <div className='flex mt-5 mb-10'>
        <div className='flex flex-col h-112 w-3/5'>
          <div className='h-64 w-5/6 mb-10 ml-5'>
            <ProductSlider images={projectPictures} />
          </div>
        </div>

        <div className='flex flex-col w-2/5 h-112 mx-10 justify-center'>
          <div>
            <div className='flex flex-row h-12 text-2xl items-center justify-center'>
              {selectedProject?.name}
            </div>
            <div className='mt-5 px-5 text-lg text-center'>
              {selectedProject?.amount_invested}$ / {selectedProject?.goal}$
            </div>
            <div className='px-5'>
              <ProgressBar
                percentage={selectedProject?.achieved_goal_percentage}
                color='bg-primary-600'
              />
            </div>
            <div className='flex items-center justify-center mt-5'>
              <Button
                className='flex w-1/6 justify-center'
                variant='invert-outline'
                label={`${selectedProject?.fee} $`}
                disabled={selectedProject?.achieved_goal_percentage >= 100}
                onClick={() => getPaymentLink({ id: selectedProject.id })}
              />
            </div>
            <div className='flex flex-col'>
              <div className='flex justify-center text-2xl mt-3'>Team members</div>
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
                      restRestMembers?.map(member => (
                        <div className='flex flex-col items-center' key={member.id}>
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
            <div className='flex px-5 justify-center mt-5'>
              Share it with your friends
            </div>
            <div className='flex px-5 mt-3 justify-center '>
              <Button
                onClick={() =>
                  (window.location.href = `https://facebook.com/sharer/sharer.php?u=www.facebook.com/david.petric.35/`)
                }
                className='text-primary-600 hover:text-primary-300'
                iconLeft={<FaFacebook size='2rem' />}
              />
              <Button
                onClick={() =>
                  (window.location.href = `https://twitter.com/intent/tweet?text=Look%20at%20this%20project%20${window.location.href}`)
                }
                className='text-primary-600 hover:text-primary-300'
                iconLeft={<FiTwitter size='2rem' />}
              />
              <Button
                onClick={copyLink}
                className='text-primary-600 hover:text-primary-300'
                iconLeft={<AiOutlineLink size='2rem' />}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='flex h-128 px-10 mt-32'>
        <div className='flex flex-col justify-center w-3/5'>
          <div className='flex mt-5 mx-5 text-gray-500 '>
            {selectedProject?.description}
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

Project.defaultProps = {
  selectedProject: {},
  getProject: mock
};

Project.propTypes = {
  selectedProject: PropTypes.object,
  getProject: PropTypes.func
};

export default Project;
