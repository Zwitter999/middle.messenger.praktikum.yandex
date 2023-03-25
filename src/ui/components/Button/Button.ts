import Block from '../../../utils/Block';
import './Button.scss';

interface ButtonProps {
  type?: string;
  label: string;
  events: {
    click: (event: any) => void;
  };
}

class Button extends Block<ButtonProps> {
  constructor(props: ButtonProps) {
    super({ type: 'button', ...props });
  }

  render() {
    const template: any = `<button class="button" type={{ type }}>{{ label }}</button>`;
    return this.compile(template, { ...this.props });
  }
}

export default Button;
