import Block from '../../../utils/Block';
import Modal from '../Modal/Modal';
import { InputProps } from '../../components/Input/Input';
import Form from '../../components/Form/Form';
import './ChangePasswordModal';

const inputs: InputProps[] = [
  { placeholder: 'Old password...', name: 'old_password' },
  { placeholder: 'New password...', name: 'new_password' },
];
class ChangePasswordModal extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.form = new Form({
      buttonName: 'Change',
      inputs,
    });
  }

  render() {
    const template: string = `
      {{ form }}
    `;
    return this.compile(new Modal({ title: 'Change password', modalContent: template }).element?.outerHTML!, {
      ...this.props,
    });
  }
}

export default ChangePasswordModal;
