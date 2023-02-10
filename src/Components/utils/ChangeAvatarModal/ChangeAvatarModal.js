import './ChangeAvatarModal.scss';
import Modal from '../Modal/Modal';
import Button from '../Button/Button';
import ErrorText from '../ErrorText/ErrorText';

function ChangeAvatarModal(title, text, errorText = '') {
  const modalContent = `
  <form class="modal-form">
    <div class="load-file">
      <label for="files">${text}</label>
      <input id="files" name="avatar" type="file">
    </div>
    ${Button('Change avatar')}
    ${errorText ? ErrorText(errorText) : ''}
  </form>`;
  Modal(modalContent, title);
}

export default ChangeAvatarModal;
