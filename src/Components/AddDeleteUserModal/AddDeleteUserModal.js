import './AddDeleteUserModal.scss';
import Modal from '../utils/Modal/Modal';
import Button from '../utils/Button/Button';
import Input from '../utils/Input/Input';

function AddDeleteUserModal(isAdding) {
  const modalContent = `
      ${Input('User name')}
      ${Button(isAdding ? 'Add user' : 'Delete user')}
    `;
  Modal(modalContent, isAdding ? 'Add user in chat' : 'Delete user from chat');
}

export default AddDeleteUserModal;
