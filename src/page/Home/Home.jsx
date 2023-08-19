import TaskList from '../../components/TaskList/TaskList';
import SideBar from '../../components/SideBar/SideBar';
import './home.css';
import { useDispatch, useSelector } from 'react-redux';
import ShowTask from '../../components/ShowTask/ShowTask';
import { useState } from 'react';
import dayjs from 'dayjs';
import { addTask, updateTask, deleteTask } from '../../Redux/taskSlice';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from '../../components/Modal/Modal';
import Form from '../../components/Modal/Form';
const Home = ({ open }) => {
  const { Item } = useSelector((state) => state.task);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState(false);
  const [taskID, setTaskID] = useState(0);
  const [isUpdate, setIsUpdate] = useState(false);
  const [err, setErr] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Modal logic
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setDesc('');
    setStatus('');
    setTitle('');
    setErr(false);
  };

  // update task
  const EditHandel = (task) => {
    setIsModalOpen(true);
    setTitle(task.title);
    setDesc(task.desc);
    setStatus(task.status);
    setIsUpdate(true);
    setTaskID(task.id);
  };
  const updateHandel = (e) => {
    e.preventDefault();
    const date = dayjs(new Date()).format('DD MMM YYYY');
    const updateTaskContent = {
      title,
      desc,
      status,
      timestamp: date,
    };
    dispatch(updateTask({ taskID, updateTaskContent }));
    closeModal();
  };
  // create task
  const submitHandel = (e) => {
    e.preventDefault();
    if (title.length === 0) {
      setErr(true);
      return;
    }
    setErr(false);
    const date = dayjs(new Date()).format('DD MMM YYYY');
    const id = parseInt(Math.random() * 1000);
    const taskContent = {
      id,
      title,
      desc,
      status,
      timestamp: date,
    };

    dispatch(addTask(taskContent));
    navigate(`/${id}`);
    closeModal();
    setDesc('');
    setStatus('');
    setTitle('');
  };

  // delete task
  const deleteTaskHandel = (id) => {
    const shouldDelete = window.confirm('Are you sure you want to delete this task?');
    if (shouldDelete) {
      dispatch(deleteTask(id));
      navigate('/');
    }
  };

  return (
    <>
      <div className="landing_Page">
        <SideBar
          openModal={openModal}
          setIsUpdate={setIsUpdate}
          open={open}
        />

        {Item.length != 0 ? (
          <div className="landing_page_aside">
            <div className="allTask">
              {Item.map((item) => {
                const { id, title, status } = item;
                return (
                  <TaskList
                    key={id}
                    id={id}
                    title={title}
                    status={status}
                  />
                );
              })}
            </div>

            <div className="showTask">
              <ShowTask
                EditHandel={EditHandel}
                deleteTask={deleteTaskHandel}
              />
            </div>
          </div>
        ) : (
          <div className="notfound">
            <span>No task found!</span>
          </div>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}>
        <Form
          title={title}
          setTitle={setTitle}
          setDesc={setDesc}
          setStatus={setStatus}
          status={status}
          desc={desc}
          submitHandel={submitHandel}
          isUpdate={isUpdate}
          updateHandel={updateHandel}
          err={err}
        />
      </Modal>
    </>
  );
};

Home.propTypes = {
  open: PropTypes.bool.isRequired,
  props: PropTypes.bool.isRequired,
  text: PropTypes.string,
};
export default Home;
