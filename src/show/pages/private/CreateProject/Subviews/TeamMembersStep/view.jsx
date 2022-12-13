import { useEffect } from 'react';
import PropTypes from 'prop-types';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';

import { mock } from 'process/helpers';
import { teamMembersLabels } from 'process/constants';
import { Button, ProgressBar, TextField } from 'show/components';

const TeamMembersStep = ({ nextStep, previousStep, transient, updateTransientProps }) => {
  useEffect(() => {
    updateTransientProps({ team_members: [{}, {}, {}, {}, {}, {}, {}] });
  }, [updateTransientProps]);

  const setName = (e, index, member) => {
    let newTeamMembers = [...transient.team_members];
    newTeamMembers[index] = { ...member, name: e.target.value };
    updateTransientProps({ team_members: newTeamMembers });
  };

  const setAvatarURL = (e, index, member) => {
    let newTeamMembers = [...transient.team_members];
    newTeamMembers[index] = { ...member, avatar_url: e.target.value };
    updateTransientProps({ team_members: newTeamMembers });
  };

  const disableNext = !transient?.team_members?.filter(
    member => Object.entries(member).length >= 2
  ).length;

  return (
    <div className='mt-8 px-20'>
      <div className='text-center text-3xl text-gray-500'>Enter your project members</div>
      <div className='flex w-full mt-4'>
        <div className='flex w-1/2 h-full'>
          <div className='w-3/4 px-2'>
            {transient?.team_members?.map((member, index) => (
              <TextField
                label={teamMembersLabels[index].name}
                key={index}
                value={member.name}
                className='rounded-2xl mt-1 items-center text-center'
                onChange={e => setName(e, index, member)}
              />
            ))}
          </div>
        </div>
        <div className='flex w-1/2 h-full justify-end'>
          <div className='w-full px-2'>
            {transient?.team_members?.map((member, index) => (
              <TextField
                label={teamMembersLabels[index].avatar}
                key={index}
                value={member.avatar_url}
                className='rounded-2xl mt-1 items-center text-center'
                onChange={e => setAvatarURL(e, index, member)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='flex mt-10 justify-between'>
        <Button
          onClick={() => previousStep()}
          iconLeft={<BsArrowBarLeft size='2rem' />}
          label='Back'
        />
        <Button
          disabled={disableNext}
          onClick={() => nextStep()}
          iconRight={<BsArrowBarRight size='2rem' />}
          label='Next'
        />
      </div>
      <div className='mt-10 px-60'>
        <ProgressBar percentage={90} color='bg-primary-600' />
      </div>
    </div>
  );
};

TeamMembersStep.defaultProps = {
  nextStep: mock,
  previousStep: mock,
  transient: {},
  updateTransientProps: mock
};

TeamMembersStep.propTypes = {
  nextStep: PropTypes.func,
  previousStep: PropTypes.func,
  transient: PropTypes.object,
  updateTransientProps: PropTypes.func
};

export default TeamMembersStep;
