import Block from '../../utils/Block';
import ModalPage from '../../components/ModalPage/ModalPage';
import { InputProps } from '../../components/Input/Input';
import Form from '../../components/Form/Form';
import './SignupPage';

const inputs: InputProps[] = [
  { placeholder: 'Name...', name: 'first_name' },
  { placeholder: 'Sacond name...', name: 'second_name' },
  { placeholder: 'Login...', name: 'login' },
  { placeholder: 'Email...', name: 'email' },
  { placeholder: 'Password...', name: 'assword' },
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
  }

  render() {
    const template: string = `
      {{ form }}
    `;

    return this.compile(new ModalPage({ title: 'Signup', content: template }).element?.outerHTML!, { ...this.props });
  }
}

export default SignupPage;
