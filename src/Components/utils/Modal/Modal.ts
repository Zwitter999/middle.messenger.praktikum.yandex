import Templator from '../../../utils/Templator';
import './Modal.scss';

function Modal(modalContent: string, title: string) {
  const template = `
      <div class="modal modal-active">
        <div class="modal__container modal__content-active modal-window">
            <h1 class="modal__title">{{ title }}</h1>
            {{ modalContent }}
        </div>
      </div>
  `;

  const modalTemplate = new Templator(template);

  const modalMarkup = modalTemplate.compile({ modalContent, title });

  document.getElementById('root')!.innerHTML += modalMarkup;
}

export default Modal;
