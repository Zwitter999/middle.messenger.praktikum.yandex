import Block from '../../../utils/Block';
import Input, { InputProps } from '../Input/Input';
import ErrorText, { ErrorTextProps } from '../Errortext/ErrorText';
import ValidateFormsController from '../../../controllers/ValidateFormsController';
import { ProfileInput, ProfileInputProps } from '../../pages/ProfilePage/ProfilePage';
import './InputWithError.scss';

interface InputWithErrorProps {
  input: InputProps | ProfileInputProps;
  errorText?: ErrorTextProps;
  type?: string;
}

class InputWithError extends Block<InputWithErrorProps> {
  constructor(props: InputWithErrorProps) {
    super({ ...props });
  }

  init() {
    this.children.errorText = new ErrorText({ text: this.props.errorText?.text || '' });
    this.children.inputChild =
      this.props.type === 'profile'
        ? new ProfileInput({
            ...(this.props.input as ProfileInputProps),
            events: {
              focus: (event: any) => {
                ValidateFormsController.onBlurFocus(this.children.errorText, event.target.value, event.target.name);
                event.target.focus();
              },
              blur: (event: any) => {
                ValidateFormsController.onBlurFocus(this.children.errorText, event.target.value, event.target.name);
              },
            },
          })
        : new Input({
            ...(this.props.input as InputProps),
            events: {
              focus: (event: any) => {
                ValidateFormsController.onBlurFocus(this.children.errorText, event.target.value, event.target.name);
                event.target.focus();
              },
              blur: (event: any) => {
                ValidateFormsController.onBlurFocus(this.children.errorText, event.target.value, event.target.name);
              },
            },
          });
  }

  render() {
    const template: any = `
    <div class="input-with-error">
    ${
      this.props.type === 'profile'
        ? `<div class="info__item"><span>{{ input.key }}</span>{{ inputChild }}</div>`
        : `{{ inputChild }}`
    }
    {{ errorText }}
    </div>
    `;
    return this.compile(template, { ...this.props });
  }
}
export default InputWithError;
