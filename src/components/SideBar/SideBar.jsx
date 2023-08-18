import { useState } from 'react';
import './sidebar.css';
import { AiOutlinePlus } from 'react-icons/ai';
import Modal from '../Modal/Modal';
import Form from '../Modal/Form';

const SideBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="sidebar">
      <div className="addTask">
        <button
          className="addTask_btn"
          onClick={openModal}>
          <AiOutlinePlus />
          <span>CREATE NEW TASK</span>
        </button>
        <Modal
          isOpen={isModalOpen}
          onClose={closeModal}>
          <Form closeModal={closeModal} />
        </Modal>
      </div>
    </div>
  );
};

export default SideBar;
