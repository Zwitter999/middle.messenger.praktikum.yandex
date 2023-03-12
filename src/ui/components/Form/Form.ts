import Block from '../../../utils/Block';
import Button from '../../components/Button/Button';
import { InputProps } from '../../components/Input/Input';
import { ProfileInputProps } from '../../pages/ProfilePage/ProfilePage';
import ValidateFormsController from '../../../controllers/validateFormsController';
import InputWithError from '../InputWithError/InputWithError';
import './Form';

interface FormProps {
  buttonName: string;
  inputs: InputProps[] | ProfileInputProps[];
  type?: string;
}

class Form extends Block<FormProps> {
  constructor(props: FormProps) {
    super({ ...props });
  }

  init() {
    this.children.button = new Button({
      label: this.props.buttonName,
      type: 'submit',
      events: {
        click: event => {
          event.preventDefault();
          ValidateFormsController.onSubmit(this);
        },
      },
    });

    this.children.inputs = this.props.inputs.map((input: InputProps | ProfileInputProps) => {
      return new InputWithError({
        type: this.props?.type || 'normal',
        input,
      });
    });
  }

  render() {
    const template: string = `<form class="modal-form">
    {{ inputs }}
    {{ button }}
    </form>`;
    return this.compile(template, { ...this.props });
  }
}

export default Form;
