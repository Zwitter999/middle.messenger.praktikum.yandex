import Templator from './../../../utils/Templator';
import './Modal.scss';

function Modal(modalContent, title) {
  const template = `
      <div class="modal modal-active">
        <div class="modal__container modal__content-active modal-window">
            <div class="modal__title">{{ title }}</div>
            {{ modalContent }}
        </div>
      </div>
    `;

  const chatsTemplate = new Templator(template);

  const chatsMarkup = chatsTemplate.compile({ modalContent, title });

  document.getElementById('root').innerHTML += chatsMarkup;
}

export default Modal;
