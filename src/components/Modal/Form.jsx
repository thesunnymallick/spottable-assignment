import CheckBox from './CheckBox';
import './form.css';
import PropTypes from 'prop-types';
const Form = ({
  title,
  setTitle,
  setDesc,
  setStatus,
  status,
  desc,
  submitHandel,
  isUpdate,
  updateHandel,
  err,
}) => {
  return (
    <form
      className="task_form"
      onSubmit={isUpdate ? updateHandel : submitHandel}>
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
          {err && <span className="errTittle">title should not empty</span>}
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
        {isUpdate ? 'Update task' : 'Add Task'}
      </button>
    </form>
  );
};

Form.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired,
  setDesc: PropTypes.func.isRequired,
  setStatus: PropTypes.func.isRequired,
  desc: PropTypes.string.isRequired,
  status: PropTypes.bool.isRequired,
  submitHandel: PropTypes.func.isRequired,
  isUpdate: PropTypes.bool,
  updateHandel: PropTypes.func,
  err: PropTypes.bool,
};
export default Form;
