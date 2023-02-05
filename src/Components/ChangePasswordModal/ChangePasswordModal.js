import './ChangePasswordModal.scss';
import Modal from '../utils/Modal/Modal';
import Button from '../utils/Button/Button';
import Input from '../utils/Input/Input';

function ChangePasswordModal() {
  const modalContent = `
    ${Input('Old password')}
    ${Input('New password')}
    ${Button('Change')}
  `;
  Modal(modalContent, 'Change password');
}

export default ChangePasswordModal;
