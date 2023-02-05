import './ChangeAvatarModal.scss';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import ErrorText from '../ErrorText/ErrorText';

function ChangeAvatarModal(title, text, errorText = '') {
  const modalContent = `
    <div class="load-file">
        ${text}
    </div>
    ${Button('Change avatar')}
    ${errorText ? ErrorText(errorText) : ''}
  `;
  Modal(modalContent, title);
}

export default ChangeAvatarModal;
