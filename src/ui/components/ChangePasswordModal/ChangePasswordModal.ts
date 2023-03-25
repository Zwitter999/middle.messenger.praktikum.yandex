import Block from '../../../utils/Block';
import Modal from '../Modal/Modal';
import { InputProps } from '../../components/Input/Input';
import Form from '../../components/Form/Form';
import './ChangePasswordModal';
import store, { withStore } from '../../../utils/Store';
import UserController from '../../../controllers/UserController';

const inputs: InputProps[] = [
  { placeholder: 'Old password...', name: 'oldPassword' },
  { placeholder: 'New password...', name: 'newPassword' },
];
class ChangePasswordModalBase extends Block {
  constructor() {
    super({
      events: {
        click: (event: { target: { closest: (arg0: string) => any } }) => {
          if (!event.target.closest('.modal__container')) {
            store.set('ChangePasswordModalIsOpen', false);
          }
        },
      },
    });
  }

  init() {
    this.children.form = new Form({
      buttonName: 'Change',
      inputs,
      onSubmit: UserController.changePassword.bind(UserController),
    });
  }

  render() {
    const template: string = `
        {{ form }}
    `;
    return this.compile(
      new Modal({
        title: 'Change password',
        modalContent: template,
        isActive: this.props.isActive,
      }).element?.outerHTML!,
      {
        ...this.props,
      },
    );
  }
}

const withModal = withStore(state => ({ isActive: state.ChangePasswordModalIsOpen }));

const ChangePasswordModal = withModal(ChangePasswordModalBase);

export default ChangePasswordModal;
