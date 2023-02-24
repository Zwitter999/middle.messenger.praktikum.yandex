import Block from '../../utils/Block';
import ModalPage from '../../components/ModalPage/ModalPage';
import { InputProps } from '../../components/Input/Input';
import Form from '../../components/Form/Form';

const inputs: InputProps[] = [
  { placeholder: 'Login...', name: 'login' },
  { placeholder: 'Password...', name: 'assword' },
];
class LoginPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.form = new Form({
      buttonName: 'Login',
      inputs,
    });
  }

  render() {
    const template: string = `
      {{ form }}
    `;
    return this.compile(new ModalPage({ title: 'Login', content: template }).element?.outerHTML!, { ...this.props });
  }
}

export default LoginPage;
