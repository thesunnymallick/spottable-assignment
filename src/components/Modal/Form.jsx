import './form.css';
const Form = () => {
  return (
    <form className="task_form">
      <div className="form_heading">
        <h2>Add Task</h2>
      </div>
      <div className="form_content">
        <div>
          <label>Title:</label>
          <input
            type="text"
            name=""
            id=""
          />
        </div>
        <div>
          <label> Description</label>
          <textarea
            name=""
            id=""></textarea>
        </div>
        <div>
          <label>completion status</label>
          <input
            type="checkbox"
            name=""
            id=""
          />
        </div>
      </div>
      <button type="submit">ADD TASK</button>
    </form>
  );
};

export default Form;
