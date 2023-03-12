import Block from '../../../utils/Block';
import { PropsWithRouter, withRouter } from '../../hocs/withRouter';
import './Link.scss';

interface LinkProps extends PropsWithRouter {
  to: string;
  label: string;
  events?: {
    click: () => void;
  };
}

class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: () => this.navigate(),
      },
    });
  }

  navigate() {
    this.props.router.go(this.props.to);
  }

  render() {
    const template = `
        <span class="{{ link }}">{{ label }}</span>
    `;
    return this.compile(template, { ...this.props });
  }
}

export const Link = withRouter(BaseLink);
