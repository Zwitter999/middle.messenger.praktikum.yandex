import Block from '../../../utils/Block';
import { html } from 'lit';
import './Input.scss';

export interface InputProps {
  type?: string;
  placeholder: string;
  name: string;
  events?: Record<string, Function>;
}

class Input extends Block<InputProps> {
  constructor(props: InputProps) {
    super({ ...props });
  }

  render() {
    const template: any = html`
      <input class="input" placeholder="{{ placeholder }}" name="{{ name }}" type="{{ type }}" />
    `.strings[0];
    return this.compile(template, { ...this.props });
  }
}

export default Input;
