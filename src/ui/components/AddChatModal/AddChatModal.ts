import Block from '../../../utils/Block';
import Modal from '../Modal/Modal';
import { InputProps } from '../Input/Input';
import Form from '../Form/Form';
import './AddChatModal';
import store, { withStore } from '../../../utils/Store';
import ChatsController from '../../../controllers/ChatsController';

const inputs: InputProps[] = [{ placeholder: 'Chat name', name: 'title' }];
class AddChatModalBase extends Block {
  constructor() {
    super({
      events: {
        click: (event: { target: { closest: (arg0: string) => any } }) => {
          if (!event.target.closest('.modal__container')) {
            store.set('AddChatModalIsOpen', false);
          }
        },
      },
    });
  }

  init() {
    this.children.form = new Form({
      buttonName: 'Add',
      inputs,
      onSubmit: ChatsController.create.bind(ChatsController),
    });
  }

  render() {
    const template: string = `
        {{ form }}
    `;
    return this.compile(
      new Modal({
        title: 'Add chat',
        modalContent: template,
        isActive: this.props.isActive,
      }).element?.outerHTML!,
      {
        ...this.props,
      },
    );
  }
}

const withModal = withStore(state => ({ isActive: state.AddChatModalIsOpen }));

const AddChatModal = withModal(AddChatModalBase);

export default AddChatModal;
