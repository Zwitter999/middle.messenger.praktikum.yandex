import Block from '../../../utils/Block';
import Modal from '../Modal/Modal';
import { InputProps } from '../Input/Input';
import Form from '../Form/Form';
import './AddUserModal.scss';
import ChatsController from '../../../controllers/ChatsController';
import store, { withStore } from '../../../utils/Store';

const inputs: InputProps[] = [{ placeholder: 'User name...', name: 'login' }];

interface AddUserModalProps {
  isActive: boolean;
  events: { click: (event: any) => void };
}

class AddUserModalBase extends Block<AddUserModalProps> {
  constructor(props: AddUserModalProps) {
    super({
      ...props,
      events: {
        click: (event: { target: { closest: (arg0: string) => any } }) => {
          if (!event.target.closest('.modal__container')) {
            store.set('addUserModalisOpen', false);
          }
        },
      },
    });
  }

  init() {
    this.children.form = new Form({
      buttonName: 'Add',
      inputs,
      onSubmit: ChatsController.addUserToChat.bind(ChatsController),
    });
  }

  render() {
    const template: string = `
      {{ form }}
    `;
    return this.compile(
      new Modal({
        title: 'Add user in chat',
        modalContent: template,
        isActive: this.props.isActive,
      }).element?.outerHTML!,
      {
        ...this.props,
      },
    );
  }
}

const withModal = withStore(state => ({ isActive: state.addUserModalisOpen }));

// @ts-ignore
const AddUserModal = withModal(AddUserModalBase);

export default AddUserModal;
