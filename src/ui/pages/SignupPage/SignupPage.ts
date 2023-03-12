import Block from '../../../utils/Block';
import ModalPage from '../../components/ModalPage/ModalPage';
import { InputProps } from '../../components/Input/Input';
import Form from '../../components/Form/Form';
import { Link } from '../../components/Link/Link';
import './SignupPage';

const inputs: InputProps[] = [
  { placeholder: 'Name...', name: 'first_name' },
  { placeholder: 'Sacond name...', name: 'second_name' },
  { placeholder: 'Login...', name: 'login' },
  { placeholder: 'Email...', name: 'email' },
  { placeholder: 'Password...', name: 'password' },
  { placeholder: 'Phone number...', name: 'phone' },
];

class SignupPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.form = new Form({
      buttonName: 'Signup',
      inputs,
    });
    this.children.link = new Link({
      to: '/',
      label: 'Login',
    });
  }

  render() {
    const template: string = `
      {{ form }}
      {{ link }}
    `;

    return this.compile(new ModalPage({ title: 'Signup', content: template }).element?.outerHTML!, { ...this.props });
  }
}

export default SignupPage;
