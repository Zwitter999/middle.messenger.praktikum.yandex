import Block from '../../../utils/Block';
import Modal from '../Modal/Modal';
import { InputProps } from '../../components/Input/Input';
import Form from '../../components/Form/Form';
import './AddDeleteUserModal';

const inputs: InputProps[] = [{ placeholder: 'User name...', name: 'user_name' }];

interface AddDeleteUserModalProps {
  isAdding?: boolean;
  errors?: Record<string, string>;
}

class AddDeleteUserModal extends Block<AddDeleteUserModalProps> {
  constructor(props: AddDeleteUserModalProps) {
    super({ isAdding: true, ...props });
  }

  init() {
    this.children.form = new Form({
      buttonName: this.props.isAdding ? 'Add' : 'Delete',
      inputs,
    });
  }

  render() {
    const template: string = `
      {{ form }}
    `;
    return this.compile(
      new Modal({ title: this.props.isAdding ? 'Add user in chat' : 'Delete user from chat', modalContent: template })
        .element?.outerHTML!,
      {
        ...this.props,
      },
    );
  }
}

export default AddDeleteUserModal;
