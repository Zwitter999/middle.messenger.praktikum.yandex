import Block from '../../../utils/Block';
import './ModalPage.scss';

interface ModalPageProps {
  content: string;
  title: string;
}

class ModalPage extends Block<ModalPageProps> {
  constructor(props: ModalPageProps) {
    super({ ...props });
  }

  render() {
    const template: any = `
    <div class="modal-page">
      <div class="modal-page__modal modal-window">
        <h1>{{ title }}</h1>
        {{ content }}
      </div>
    </div>
  `;
    return this.compile(template, { ...this.props });
  }
}

export default ModalPage;
