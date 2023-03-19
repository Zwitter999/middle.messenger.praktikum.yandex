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
  onSubmit: Function;
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
          if (ValidateFormsController.onSubmit(this)) {
            const values = [...event.target.parentElement].slice(0, -1).map(input => {
              // const input = div.getElementsByTagName('input')[0];
              return [input.name, input.name !== 'avatar' ? input.value : input.files[0]];
            });
            const preData = Object.fromEntries(values);
            let data;
            if (preData.avatar) {
              data = new FormData();
              data.append('avatar', preData.avatar);
            } else {
              data = preData;
            }
            this.props.onSubmit(data);
          }
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
