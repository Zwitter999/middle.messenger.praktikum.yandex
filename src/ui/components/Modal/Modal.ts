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
    const { isActive } = this.props;
    const template: any = `
    <div class="modal ${isActive ? 'modal_active' : ''}">
      <div class="modal__container ${isActive ? 'modal__container_active' : ''} modal-window">
          <h1 class="modal__title">{{ title }}</h1>
          {{ modalContent }}
      </div>
    </div>
    `;
    return this.compile(template, { ...this.props });
  }
}

export default Modal;
