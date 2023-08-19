import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';
import './showTask.css';
import PropTypes from 'prop-types';
const ShowTask = ({ EditHandel, deleteTask }) => {
  const { id } = useParams();
  const { Item } = useSelector((state) => state.task);
  if (id === undefined) {
    return;
  }

  console.log('this id is ', id);
  const task = Item.find((item) => item.id === +id);

  return (
    <div className="task_content">
      <div className="task_content_head">
        <div className="task_content_left">
          <h2 className="task_content_title">{task.title}</h2>
          <span>{task.timestamp}</span>
        </div>
        <div className="task_content_right">
          <button onClick={() => EditHandel(task)}>
            <AiOutlineEdit />
          </button>
          <button onClick={() => deleteTask(task.id)}>
            <AiOutlineDelete />
          </button>
        </div>
      </div>
      <div className="task_content_desc">
        <p>{task.desc}</p>
      </div>
    </div>
  );
};
ShowTask.propTypes = {
  EditHandel: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
};
export default ShowTask;
