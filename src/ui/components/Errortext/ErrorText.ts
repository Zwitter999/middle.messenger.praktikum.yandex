import Block from '../../../utils/Block';
import './ErrorText.scss';

export interface ErrorTextProps {
  text?: string;
}

class ErrorText extends Block<ErrorTextProps> {
  constructor(props: ErrorTextProps) {
    super({ ...props });
  }

  render() {
    const template: any = `<div class="error-text">{{ text }}</div>`;
    return this.compile(template, { ...this.props });
  }
}

export default ErrorText;
