import Block from '../../utils/Block';
import Button from '../../components/Button/Button';
import ModalPage from '../../components/ModalPage/ModalPage';
import './ServerErrorPage';

class ServerErrorPage extends Block {
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
    const template: string = `<div>Server bad</div>{{ button }}`;
    return this.compile(new ModalPage({ title: '5**', content: template }).element?.outerHTML!, { ...this.props });
  }
}

export default ServerErrorPage;
