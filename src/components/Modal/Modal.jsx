import PropTypes from 'prop-types';
import './model.css';
import { AiOutlineClose } from 'react-icons/ai';
const Modal = ({ isOpen, onClose, children }) => {
  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <div className="modal-content">
        {children}
        <button
          className="close-button"
          onClick={onClose}>
          <AiOutlineClose />
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

export default Modal;
