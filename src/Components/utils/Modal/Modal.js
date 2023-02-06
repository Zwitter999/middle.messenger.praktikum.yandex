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

  const modalTemplate = new Templator(template);

  const modalMarkup = modalTemplate.compile({ modalContent, title });

  document.getElementById('root').innerHTML += modalMarkup;
}

export default Modal;
