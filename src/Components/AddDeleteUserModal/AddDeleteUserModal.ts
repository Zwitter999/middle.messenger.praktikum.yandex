import Modal from '../utils/Modal/Modal';
import Button from '../utils/Button/Button';
import Input from '../utils/Input/Input';

function AddDeleteUserModal(isAdding: boolean) {
  const modalContent = `
      <form class="modal-form">
        ${Input('User name')}
        ${Button(isAdding ? 'Add user' : 'Delete user', 'submit')}
      </form>
    `;
  Modal(modalContent, isAdding ? 'Add user in chat' : 'Delete user from chat');
}

export default AddDeleteUserModal;
