import Modal from '../utils/Modal/Modal';
import Button from '../utils/Button/Button';
import Input from '../utils/Input/Input';

function ChangePasswordModal() {
  const modalContent = `
    <form class="modal-form">
      ${Input('Old password', 'oldPassword')}
      ${Input('New password', 'newPassword')}
      ${Button('Change', 'submit')}
    </form>
  `;
  Modal(modalContent, 'Change password');
}

export default ChangePasswordModal;
