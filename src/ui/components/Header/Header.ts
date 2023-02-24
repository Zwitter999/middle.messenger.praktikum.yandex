import Block from '../../utils/Block';
import './Header.scss';
import Button from '../Button/Button';
import renderDOM from '../../../utils/renderDOM';

class Header extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.login = new Button({
      label: 'Login',
      events: {
        click: () => {
          renderDOM('login');
        },
      },
    });
    this.children.signup = new Button({
      label: 'Signup',
      events: {
        click: () => {
          renderDOM('signup');
        },
      },
    });
    this.children.profile = new Button({
      label: 'Profile',
      events: {
        click: () => {
          renderDOM('profile');
        },
      },
    });
    this.children.chats = new Button({
      label: 'Chats',
      events: {
        click: () => {
          renderDOM('chats');
        },
      },
    });
    this.children.notFound = new Button({
      label: 'Not found',
      events: {
        click: () => {
          renderDOM('notFound');
        },
      },
    });
    this.children.serverError = new Button({
      label: 'Server error',
      events: {
        click: () => {
          renderDOM('serverError');
        },
      },
    });
  }

  render() {
    const template: string = `<div class="header">
      <nav>
        {{ login }}
        {{ signup }}
        {{ profile }}
        {{ chats }}
        {{ notFound }}
        {{ serverError }}
      </nav>
    </div>`;
    return this.compile(template, { ...this.props });
  }
}

export default Header;
