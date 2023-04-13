import Block from '../../../utils/Block';
import Modal from '../Modal/Modal';
import { InputProps } from '../Input/Input';
import Form from '../Form/Form';
import './DeleteUserModal';
import ChatsController from '../../../controllers/ChatsController';
import store, { withStore } from '../../../utils/Store';

const inputs: InputProps[] = [{ placeholder: 'User name...', name: 'login' }];

interface DeleteUserModalProps {
  isActive: boolean;
  events: { click: (event: any) => void };
}

class DeleteUserModalBase extends Block<DeleteUserModalProps> {
  constructor(props: DeleteUserModalProps) {
    super({
      ...props,
      events: {
        click: (event: { target: { closest: (arg0: string) => any } }) => {
          if (!event.target.closest('.modal__container')) {
            store.set('deleteUserModalisOpen', false);
          }
        },
      },
    });
  }

  init() {
    this.children.form = new Form({
      buttonName: 'Delete',
      inputs,
      onSubmit: ChatsController.deleteUserFromChat.bind(ChatsController),
    });
  }

  render() {
    const template: string = `
      {{ form }}
    `;
    return this.compile(
      new Modal({
        title: 'Delete user from chat',
        modalContent: template,
        isActive: this.props.isActive,
      }).element?.outerHTML!,
      {
        ...this.props,
      },
    );
  }
}

const withModal = withStore(state => ({ isActive: state.deleteUserModalisOpen }));

// @ts-ignore
const DeleteUserModal = withModal(DeleteUserModalBase);

export default DeleteUserModal;
