import './sidebar.css';
import { AiOutlinePlus } from 'react-icons/ai';

import PropTypes from 'prop-types';
const SideBar = ({ openModal, setIsUpdate, open }) => {
  return (
    <div className={`sidebar ${open ? 'openSidebar' : ''}`}>
      <div className="addTask">
        <button
          className="addTask_btn"
          onClick={() => {
            openModal();
            setIsUpdate(false);
          }}>
          <AiOutlinePlus />
          <span>CREATE NEW TASK </span>
        </button>
      </div>
    </div>
  );
};

SideBar.propTypes = {
  openModal: PropTypes.func.isRequired,
  open: PropTypes.bool,
  setIsUpdate: PropTypes.func.isRequired,
};

export default SideBar;
