import Block from '../../../utils/Block';
import { withRouter } from '../../hocs/withRouter';
import './Link.scss';

interface LinkProps {
  to: string;
  label: string;
  events?: {
    click: (event: any) => void;
  };
  router: any;
}

class BaseLink extends Block<LinkProps> {
  constructor(props: LinkProps) {
    super({
      ...props,
      events: {
        click: event => {
          event.preventDefault();
          this.navigate();
        },
      },
    });
  }

  navigate() {
    this.props.router.go(this.props.to);
  }

  render() {
    const template = `
        <a href="{{ to }}" class="{{ link }}">{{ label }}</a>
    `;
    return this.compile(template, { ...this.props });
  }
}

export const Link = withRouter(BaseLink);
