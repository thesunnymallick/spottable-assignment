import { useDispatch } from 'react-redux';
import CheckBox from './CheckBox';
import './form.css';
import { addTask } from '../../Redux/taskSlice';
import { useState } from 'react';
import dayjs from 'dayjs';
import PropTypes from 'prop-types';
const Form = ({ closeModal }) => {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [status, setStatus] = useState(false);

  const dispatch = useDispatch();

  const submitHandel = (e) => {
    e.preventDefault();

    const date = dayjs(new Date()).format('DD MMM YYYY');
    const id = parseInt(Math.random() * 1000);
    const taskContent = {
      id,
      title,
      desc,
      status,
      timestamp: date,
    };
    console.log('submit handel', taskContent);
    dispatch(addTask(taskContent));
    closeModal();
  };

  return (
    <form
      className="task_form"
      onSubmit={submitHandel}>
      <div className="form_heading">
        <h2>Add Task</h2>
      </div>
      <div className="form_content">
        <div>
          <label>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label> Description</label>
          <textarea
            value={desc}
            onChange={(e) => setDesc(e.target.value)}></textarea>
        </div>
        <div className="checkbox_status">
          <CheckBox
            status={status}
            setStatus={setStatus}
          />
        </div>
      </div>
      <button
        type="submit"
        className="add-task-btn">
        ADD TASK
      </button>
    </form>
  );
};

Form.propTypes = {
  closeModal: PropTypes.func.isRequired,
};
export default Form;
