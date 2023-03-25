import Block from '../../../utils/Block';
import Button from '../../components/Button/Button';
import ModalPage from '../../components/ModalPage/ModalPage';
import './NotFoundPage';

class NotFoundPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.button = new Button({
      label: 'Home',
      type: 'submit',
      events: {
        click: event => {
          console.log(event);
        },
      },
    });
  }

  render() {
    const template: string = `<div>Not found</div>{{ button }}`;
    return this.compile(new ModalPage({ title: '404', content: template }).element?.outerHTML!, { ...this.props });
  }
}

export default NotFoundPage;
