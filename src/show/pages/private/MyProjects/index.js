import { useNavigate } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import { FaPencilAlt, FaTrash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

import Paths from 'process/routes/paths';
import { Button, ProgressBar, Modal } from 'show/components';
import { deleteProject, getMyProjects } from 'process/redux/projectSlice';

const MyProjects = () => {
  const [projectId, setProjectId] = useState(null);
  const [deleteProjectModal, setDeleteProjectModal] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { projects } = useSelector(state => state.projects);

  const handleDeleteClick = e => {
    e.preventDefault();
    setDeleteProjectModal(false);
    dispatch(deleteProject({ id: projectId }));
  };

  useEffect(() => {
    dispatch(getMyProjects());
  }, [dispatch]);

  const prepareToDelete = project => {
    setDeleteProjectModal(true);
    setProjectId(project.id);
  };

  return (
    <Fragment>
      <div className='h-full w-full'>
        {projects?.length > 0 ? (
          <div className='grid grid-cols-3 mt-5'>
            {projects?.map(project => (
              <div
                className='rounded-lg h-96 mt-5 ml-5 mr-5 cursor-pointer'
                key={project?.id}
                id={project?.id}>
                <div className='bg-primary-600 rounded-lg border shadow-md'>
                  <div className='relative'>
                    <img
                      onClick={() =>
                        navigate(Paths.public.PROJECT_PATH.replace(':id', project.id))
                      }
                      src={project?.images[0]}
                      alt='main'
                      className='object-cover rounded-t-lg h-72 w-full'
                    />
                    <div className='flex items-center bg-green-500 w-10 h-10 rounded-full absolute -top-5 -right-4 hover:scale-110 transition-all duration-300'>
                      <Button
                        onClick={() =>
                          navigate(
                            Paths.private.EDIT_PROJECT_PATH.replace(':id', project.id)
                          )
                        }
                        label={<FaPencilAlt size='1.5rem' />}
                        className='flex items-center justify-center w-16 h-16 text-white hover:text-green-900 hover:scale-110'
                      />
                    </div>
                    <div className='flex items-center bg-red-500 w-10 h-10 rounded-full absolute -top-5 -left-4 hover:scale-110 transition-all duration-300'>
                      <Button
                        onClick={() => prepareToDelete(project)}
                        label={<FaTrash size='1.5rem' />}
                        className='flex items-center justify-center w-16 h-16 text-white hover:text-red-900 hover:scale-110'
                      />
                    </div>
                  </div>
                  <div className='ml-3 mb-2 text-2xl text-white'>{project.name}</div>
                  <div className='flex items-center w-full justify-center px-5 pb-4'>
                    <ProgressBar percentage={project.achieved_goal_percentage} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className='flex text-center justify-center text-2xl text-gray-500'>
            There are currently no projects to show
          </div>
        )}
      </div>

      <Modal setVisible={setDeleteProjectModal} visible={deleteProjectModal}>
        <div className='min-h-full flex items-center justify-center py-12 px-6'>
          <div className='max-w-md w-full space-y-8'>
            <div className='flex flex-col justify-center items-center'>
              <FaTrash size='3rem' className='text-primary-500' />
              <h2 className='mt-2 text-center text-3xl font-extrabold text-gray-900'>
                Delete project?
              </h2>
            </div>
            <form className='mt-8 space-y-6'>
              <div className='flex items-center justify-between w-full'>
                <div className='w-full'>
                  <Button
                    onClick={e => handleDeleteClick(e)}
                    variant='tertiary'
                    label='Yes'
                    className='bg-primary-200 hover:bg-primary-400'
                  />
                  <Button
                    onClick={() => setDeleteProjectModal(false)}
                    variant='tertiary'
                    label='No'
                    className='bg-primary-500 hover:bg-primary-600 mt-2'
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
    </Fragment>
  );
};

export default MyProjects;
