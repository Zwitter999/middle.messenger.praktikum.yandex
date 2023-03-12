import Block from '../../../utils/Block';
import './Modal.scss';

interface ModalProps {
  modalContent: string;
  title: string;
}

class Modal extends Block<ModalProps> {
  constructor(props: ModalProps) {
    super({ ...props });
  }

  render() {
    const template: any = `
    <div class="modal modal-active">
      <div class="modal__container modal__content-active modal-window">
          <h1 class="modal__title">{{ title }}</h1>
          {{ modalContent }}
      </div>
    </div>
    `;
    return this.compile(template, { ...this.props });
  }
}

export default Modal;
