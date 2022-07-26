import ReactDatePicker from 'react-datepicker';
import { categories } from '../../../../../process/constants';
import { BsArrowBarLeft, BsArrowBarRight } from 'react-icons/bs';
import { Button, ProgressBar, TextField } from '../../../../components';

import 'react-datepicker/dist/react-datepicker.css';

const CategoryStep = ({ nextStep, project, setProject }) => {
  return (
    <div>
      <div className='mt-36 flex flex-col text-center text-3xl text-primary-600 '>
        Choose a category
      </div>
      <div className='mt-10 flex justify-evenly h-32'>
        {categories.map((category, index) => (
          <div
            onClick={() => {
              nextStep();
              setProject({
                ...project,
                category: category.name
              });
            }}
            className='cursor-pointer hover:scale-110 transition-all duration-300'
            key={index}>
            <div className='flex justify-evenly bg-white mt-5 text-primary-600'>
              {category.icon}
            </div>
            <div className='text-center mt-2 text-gray-500'>
              {category.name}
            </div>
          </div>
        ))}
      </div>
      <div className='mt-72 px-80'>
        <ProgressBar percentage={10} color='bg-primary-600' />
      </div>
    </div>
  );
};

const TitleStep = ({ nextStep, previousStep, project, setProject }) => {
  return (
    <div className='mt-36 px-20'>
      <div className='text-center text-3xl text-gray-500'>
        Name your project
      </div>
      <div className='h-64'>
        <TextField
          required
          value={project.name}
          className='rounded-2xl mt-2 items-center text-center'
          onChange={e => setProject({ ...project, name: e.target.value })}
        />
      </div>
      <div className='flex mt-20 justify-between cursor-pointer'>
        <div
          onClick={() => previousStep()}
          className='flex items-center hover:scale-110 transition-all duration-300'>
          <BsArrowBarLeft size='2rem' />
          Back
        </div>
        <div
          onClick={() => nextStep()}
          className='flex items-center cursor-pointer hover:scale-110 transition-all duration-300'>
          Next
          <BsArrowBarRight size='2rem' />
        </div>
      </div>
      <div className='mt-20 px-60'>
        <ProgressBar percentage={20} color='bg-primary-600' />
      </div>
    </div>
  );
};

const DescriptionStep = ({ nextStep, previousStep, project, setProject }) => {
  return (
    <div className='mt-20 px-20'>
      <div className='text-center text-3xl text-gray-500'>
        Describe your project
      </div>
      <div>
        <TextField
          required
          area={true}
          value={project.description}
          className='flex items-start rounded-2xl mt-2 text-start h-72'
          onChange={e =>
            setProject({ ...project, description: e.target.value })
          }
        />
      </div>
      <div className='flex mt-28 justify-between cursor-pointer'>
        <div
          onClick={() => previousStep()}
          className='flex items-center hover:scale-110 transition-all duration-300'>
          <BsArrowBarLeft size='2rem' />
          Back
        </div>
        <div
          onClick={() => nextStep()}
          className='flex items-center cursor-pointer hover:scale-110 transition-all duration-300'>
          Next
          <BsArrowBarRight size='2rem' />
        </div>
      </div>
      <div className='mt-20 px-60'>
        <ProgressBar percentage={30} color='bg-primary-600' />
      </div>
    </div>
  );
};

const GoalStep = ({ nextStep, previousStep, project, setProject }) => {
  return (
    <div className='mt-20 px-20'>
      <div className='mt-60'>
        <div className='flex justify-center text-center text-3xl text-gray-500'>
          Set your projet goal
        </div>
        <div className='flex justify-center h-64'>
          <TextField
            required
            type='number'
            value={project.goal}
            className='flex rounded-2xl mt-2 items-center text-center w-36'
            onChange={e =>
              setProject({
                ...project,
                goal:
                  e.target.value < 0
                    ? Math.abs(e.target.value)
                    : e.target.value > 999999
                    ? 999999
                    : e.target.value
              })
            }
          />
        </div>
      </div>
      <div className='flex justify-between cursor-pointer'>
        <div
          onClick={() => previousStep()}
          className='flex items-center hover:scale-110 transition-all duration-300'>
          <BsArrowBarLeft size='2rem' />
          Back
        </div>
        <div
          onClick={() => nextStep()}
          className='flex items-center cursor-pointer hover:scale-110 transition-all duration-300'>
          Next
          <BsArrowBarRight size='2rem' />
        </div>
      </div>
      <div className='mt-16 px-60'>
        <ProgressBar percentage={40} color='bg-primary-600' />
      </div>
    </div>
  );
};

const FeeStep = ({ nextStep, previousStep, project, setProject }) => {
  return (
    <div className='mt-18 px-20'>
      <div className='mt-60'>
        <div className='flex justify-center text-center text-3xl text-gray-500'>
          Set project fee
        </div>
        <div className='flex justify-center h-64'>
          <TextField
            required
            type='number'
            value={project.fee}
            className='flex rounded-2xl mt-2 items-center text-center w-36'
            onChange={e =>
              setProject({
                ...project,
                fee:
                  e.target.value < 0
                    ? Math.abs(e.target.value)
                    : e.target.value > 999999
                    ? 999999
                    : e.target.value
              })
            }
          />
        </div>
      </div>
      <div className='flex justify-between cursor-pointer'>
        <div
          onClick={() => previousStep()}
          className='flex items-center hover:scale-110 transition-all duration-300'>
          <BsArrowBarLeft size='2rem' />
          Back
        </div>
        <div
          onClick={() => nextStep()}
          className='flex items-center cursor-pointer hover:scale-110 transition-all duration-300'>
          Next
          <BsArrowBarRight size='2rem' />
        </div>
      </div>
      <div className='mt-16 px-60'>
        <ProgressBar percentage={50} color='bg-primary-600' />
      </div>
    </div>
  );
};

const DatelineStep = ({ nextStep, previousStep, project, setProject }) => {
  return (
    <div className='mt-18 px-20'>
      <div className='mt-60'>
        <div className='flex justify-center text-center text-3xl text-gray-500'>
          Set project deadline
        </div>
        <div className='flex justify-center'>
          <div className='flex justify-center h-full mt-2 w-40 text-gray-500 text-2xl border rounded-full border-gray-500 px-4'>
            <ReactDatePicker
              required
              className='flex justify-center text-center w-full '
              selected={project.deadline}
              onChange={deadline =>
                setProject({ ...project, deadline: deadline })
              }
              dateFormat='dd/MM/yyyy'
              minDate={new Date()}
              withPortal
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between cursor-pointe mt-52'>
        <div
          onClick={() => previousStep()}
          className='flex items-center hover:scale-110 transition-all duration-300'>
          <BsArrowBarLeft size='2rem' />
          Back
        </div>
        <div
          onClick={() => nextStep()}
          className='flex items-center cursor-pointer hover:scale-110 transition-all duration-300'>
          Next
          <BsArrowBarRight size='2rem' />
        </div>
      </div>
      <div className='mt-16 px-60'>
        <ProgressBar percentage={60} color='bg-primary-600' />
      </div>
    </div>
  );
};

const StatementStep = ({ nextStep, previousStep, project, setProject }) => {
  return (
    <div className='mt-36 px-20'>
      <div className='text-center text-3xl text-gray-500'>
        Enter your 6 word statement
      </div>
      <div className='h-64'>
        <TextField
          value={project.statement}
          className='rounded-2xl mt-2 items-center text-center'
          onChange={e => setProject({ ...project, statement: e.target.value })}
        />
      </div>
      <div className='flex mt-20 justify-between cursor-pointer'>
        <div
          onClick={() => previousStep()}
          className='flex items-center hover:scale-110 transition-all duration-300'>
          <BsArrowBarLeft size='2rem' />
          Back
        </div>
        <div
          onClick={() => nextStep()}
          className='flex items-center cursor-pointer hover:scale-110 transition-all duration-300'>
          Next
          <BsArrowBarRight size='2rem' />
        </div>
      </div>
      <div className='mt-20 px-60'>
        <ProgressBar percentage={70} color='bg-primary-600' />
      </div>
    </div>
  );
};

const ImagesStep = ({ nextStep, previousStep, project, setProject }) => {
  return (
    <div className='mt-12 px-20'>
      <div className='text-center text-3xl text-gray-500'>
        Enter your project photos URL
      </div>
      <div className='h-full mt-6'>
        {project.images.map((image, index) => (
          <TextField
            key={index}
            value={image}
            className='rounded-2xl mt-2 items-center text-center'
            onChange={e => {
              let newImages = project.images;
              newImages[index] = e.target.value;
              setProject({ ...project, images: newImages });
            }}
          />
        ))}
      </div>
      <div className='flex mt-14 justify-between cursor-pointer'>
        <div
          onClick={() => previousStep()}
          className='flex items-center hover:scale-110 transition-all duration-300'>
          <BsArrowBarLeft size='2rem' />
          Back
        </div>
        <div
          onClick={() => nextStep()}
          className='flex items-center cursor-pointer hover:scale-110 transition-all duration-300'>
          Next
          <BsArrowBarRight size='2rem' />
        </div>
      </div>
      <div className='mt-20 px-60'>
        <ProgressBar percentage={80} color='bg-primary-600' />
      </div>
    </div>
  );
};

const TeamMembersStep = ({ nextStep, previousStep, project, setProject }) => {
  return (
    <div className='mt-12 px-20'>
      <div className='text-center text-3xl text-gray-500'>
        Enter your project members
      </div>
      <div className='flex w-full mt-10'>
        <div className='flex w-1/2 h-full'>
          <div className='w-3/4 px-2'>
            {project.team_members.map((member, index) => (
              <TextField
                key={index}
                value={member.name}
                className='rounded-2xl mt-2 items-center text-center'
                onChange={e => {
                  let newTeamMembers = project.team_members;
                  newTeamMembers[index] = { ...member, name: e.target.value };
                  setProject({ ...project, team_members: newTeamMembers });
                }}
              />
            ))}
          </div>
        </div>
        <div className='flex w-1/2 h-full justify-end'>
          <div className='w-full px-2'>
            {project.team_members.map((member, index) => (
              <TextField
                key={index}
                value={member.avatar_url}
                className='rounded-2xl mt-2 items-center text-center'
                onChange={e => {
                  let newTeamMembers = project.team_members;
                  newTeamMembers[index] = {
                    ...member,
                    avatar_url: e.target.value
                  };
                  setProject({ ...project, team_members: newTeamMembers });
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <div className='flex mt-20 justify-between cursor-pointer'>
        <div
          onClick={() => previousStep()}
          className='flex items-center hover:scale-110 transition-all duration-300'>
          <BsArrowBarLeft size='2rem' />
          Back
        </div>
        <div
          onClick={() => {
            nextStep();
          }}
          className='flex items-center cursor-pointer hover:scale-110 transition-all duration-300'>
          Next
          <BsArrowBarRight size='2rem' />
        </div>
      </div>
      <div className='mt-20 px-60'>
        <ProgressBar percentage={90} color='bg-primary-600' />
      </div>
    </div>
  );
};

const PublishStep = ({ nextStep, postData, previousStep }) => {
  return (
    <div className='mt-18 px-20'>
      <div className='mt-60'>
        <div className='flex justify-center text-center text-3xl text-gray-500'>
          Ready to publish?
        </div>
        <div className='flex justify-center'>
          <div className='flex justify-center h-full mt-2 w-40  text-2xl rounded-full'>
            <Button
              onClick={() => {
                nextStep();
                postData();
              }}
              variant='outline'
              label='Yes, raise it!'
            />
          </div>
        </div>
      </div>
      <div className='flex justify-between cursor-pointe mt-52'>
        <div
          onClick={() => previousStep()}
          className='flex items-center hover:scale-110 transition-all duration-300'>
          <BsArrowBarLeft size='2rem' />
          Back
        </div>
      </div>
      <div className='mt-16 px-60'>
        <ProgressBar percentage={100} color='bg-primary-600' />
      </div>
    </div>
  );
};

export {
  FeeStep,
  GoalStep,
  TitleStep,
  ImagesStep,
  PublishStep,
  CategoryStep,
  DatelineStep,
  StatementStep,
  DescriptionStep,
  TeamMembersStep
};
