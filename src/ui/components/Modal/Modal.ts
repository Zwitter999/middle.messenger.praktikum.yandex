import Block from '../../../utils/Block';
import './Modal.scss';

interface ModalProps {
  modalContent: string;
  title: string;
  isActive: boolean;
}

class Modal extends Block<ModalProps> {
  constructor(props: ModalProps) {
    super({
      ...props,
    });
  }

  render() {
    const template: any = `
    <div class="modal ${this.props.isActive ? 'modal-active' : ''}">
      <div class="modal__container ${this.props.isActive ? 'modal__content-active' : ''} modal-window">
          <h1 class="modal__title">{{ title }}</h1>
          {{ modalContent }}
      </div>
    </div>
    `;
    return this.compile(template, { ...this.props });
  }
}

export default Modal;
