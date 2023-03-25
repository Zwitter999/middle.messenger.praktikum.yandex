import Block from '../../utils/Block';
import Router from '../../utils/Router';

export function withRouter<T extends Record<string, any>>(Component: typeof Block<T>) {
  return class WithRouter extends Component {
    constructor(props: T) {
      super({ ...props, router: Router });
    }
  };
}

export interface PropsWithRouter {
  router: typeof Router;
}
