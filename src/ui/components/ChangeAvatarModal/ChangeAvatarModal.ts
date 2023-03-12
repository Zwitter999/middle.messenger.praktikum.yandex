import Block from '../../utils/Block';
import Button from '../../components/Button/Button';
import Modal from '../Modal/Modal';
import ErrorText from '../Errortext/ErrorText';
import './ChangeAvatarModal.scss';
import ValidateFormsController from '../../../controllers/validateFormsController';

interface ChangeAvatarModalProps {
  title: string;
  text: string;
  errors?: Record<string, string>;
}

class ChangeAvatarModal extends Block<ChangeAvatarModalProps> {
  constructor(props: ChangeAvatarModalProps) {
    super({ ...props });
  }

  init() {
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
    const template: string = `<form class="modal-form">
    <div class="load-file">
      <label for="files">{{ text }}</label>
      <input id="files" name="avatar" type="file">
      ${
        this.props.errors?.inputAvatar ? new ErrorText({ text: this.props.errors.inputAvatar }).element?.outerHTML! : ''
      }
    </div>`;
    return this.compile(new Modal({ title: this.props.title, modalContent: template }).element?.outerHTML!, {
      ...this.props,
    });
  }
}

export default ChangeAvatarModal;
