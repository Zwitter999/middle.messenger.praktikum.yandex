import Block from '../../../utils/Block';
import Button from '../../components/Button/Button';
import Modal from '../Modal/Modal';
import './ChangeAvatarModal.scss';
import ValidateFormsController from '../../../controllers/validateFormsController';
import store, { withStore } from '../../../utils/Store';
import Form from '../Form/Form';
import UserController from '../../../controllers/UserController';

class ChangeAvatarModalBase extends Block {
  constructor() {
    super({
      events: {
        click: (event: { target: { closest: (arg0: string) => any } }) => {
          if (!event.target.closest('.modal__container')) {
            store.set('ChangeAvatarModalIsOpen', false);
          }
        },
      },
    });
  }

  init() {
    this.children.form = new Form({
      buttonName: 'Change',
      inputs: [{ name: 'avatar', placeholder: 'placeholder...', type: 'file' }],
      onSubmit: UserController.changeAvatar.bind(UserController),
    });
    this.children.button = new Button({
      label: 'Change avatar',
      type: 'submit',
      events: {
        click: event => {
          event.preventDefault();
          ValidateFormsController.onSubmit(this);
        },
      },
    });
  }

  render() {
    const template: string = `<div class="load-file">{{ form }}</div>`;
    // const template: string = `<form class="modal-form">
    // <div class="load-file">
    //   <label for="files">{{ text }}</label>
    //   <input id="files" name="avatar" type="file">
    //   ${
    //     this.props.errors?.inputAvatar ? new ErrorText({ text: this.props.errors.inputAvatar }).element?.outerHTML! : ''
    //   }
    // </div>`;
    return this.compile(
      new Modal({ title: 'Change avatar', modalContent: template, isActive: this.props.isActive }).element?.outerHTML!,
      {
        ...this.props,
      },
    );
  }
}

const withModal = withStore(state => ({ isActive: state.ChangeAvatarModalIsOpen }));

const ChangeAvatarModal = withModal(ChangeAvatarModalBase);

export default ChangeAvatarModal;
