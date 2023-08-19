import './tasklist.css';
import PropTypes from 'prop-types';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
//FaTimesCircle
const TaskList = ({ id, title, status }) => {
  const navigate = useNavigate();
  const taskHandel = (id) => {
    console.log(id);
    navigate(`/${id}`);
  };

  return (
    <div
      className="tasklist_box"
      onClick={() => taskHandel(id)}>
      <h2 className="tasklist_title">{title}</h2>
      <div className="tasklist_status">
        {status != true ? (
          <>
            <FaTimesCircle style={{ color: '#F29339' }} />
            <span style={{ color: '#F29339' }}>task not completed</span>
          </>
        ) : (
          <>
            <FaCheckCircle style={{ color: '#4BB543' }} />
            <span style={{ color: '#4BB543' }}>task completed</span>
          </>
        )}
      </div>
    </div>
  );
};

TaskList.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
};

export default TaskList;
