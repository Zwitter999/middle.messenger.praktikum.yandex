import Block from '../../utils/Block';
import Button from '../../components/Button/Button';
import './ProfilePage.scss';
import Form from '../../components/Form/Form';

interface ProfilePageProps {
  isEditMode?: boolean;
  errors?: Record<string, string>;
}

interface ProfileItemProps {
  value: string;
  key: string;
  name?: string;
}

class ProfileItem extends Block<ProfileItemProps> {
  constructor(props: ProfileItemProps) {
    super({ ...props });
  }

  render() {
    const template: any = `<div class="info__item">
      <span>{{ key }}</span>
      <span>{{ value }}</span>
    </div>`;
    return this.compile(template, { ...this.props });
  }
}

export interface ProfileInputProps {
  value: string;
  name: string;
  key: string;
  events?: Record<string, Function>;
}

export class ProfileInput extends Block<ProfileInputProps> {
  constructor(props: ProfileInputProps) {
    super({ ...props });
  }

  render() {
    const template: any = `<input value={{ value }} name={{ name }}/>`;
    return this.compile(template, { ...this.props });
  }
}

const inputs: ProfileInputProps[] = [
  { value: 'test.test.yandex.ru', name: 'email', key: 'Email' },
  { value: 'PtestAcc', name: 'login', key: 'Login' },
  { value: 'Anatoli', name: 'first_name', key: 'First name' },
  { value: 'Kurlov', name: 'second_name', key: 'Second name' },
  { value: 'Bubaika', name: 'display_name', key: 'Chat name' },
  { value: '+78005553532', name: 'phone', key: 'Phone number' },
];

class ProfilePage extends Block<ProfilePageProps> {
  constructor(props: ProfilePageProps) {
    super({ isEditMode: false, ...props });
  }

  init() {
    this.children.form = new Form({
      buttonName: 'Save changes',
      inputs,
      type: 'profile',
    });
    this.children.items = inputs.map(item => new ProfileItem({ ...item }));
    this.children.changeProfile = new Button({
      label: 'Change profile',
      events: {
        click: event => {
          console.log(event);
        },
      },
    });
    this.children.changePassword = new Button({
      label: 'Change password',
      events: {
        click: event => {
          console.log(event);
        },
      },
    });
    this.children.logout = new Button({
      label: 'Logout',
      type: 'submit',
      events: {
        click: event => {
          console.log(event);
        },
      },
    });
  }

  render() {
    const template: any = `
    <div class="profile-page">
    <div class="profile-page__avatar">
      <input name="avatar" type="file"/>
      <span class="avatar__text">Change avatar</span>
    </div>
    <div class="profile-page__name">
      Anatoli
    </div>
      <form class="profile-page__info">
      ${this.props.isEditMode ? '{{ form }}' : '{{ items }}'}
        ${
          this.props.isEditMode
            ? ``
            : `<div class="info__buttons">
            {{ changeProfile }}
            {{ changePassword }}
        </div>
        {{ logout }}`
        }
      </form>
    </div>
    `;
    return this.compile(template, { ...this.props });
  }
}

export default ProfilePage;
