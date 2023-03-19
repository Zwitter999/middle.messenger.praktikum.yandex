import Block from '../../../utils/Block';
import Button from '../../components/Button/Button';
import './ProfilePage.scss';
import Form from '../../components/Form/Form';
import store, { withStore } from '../../../utils/Store';
import AuthController from '../../../controllers/AuthController';
import UserController from '../../../controllers/UserController';
import ChangePasswordModal from '../../components/ChangePasswordModal/ChangePasswordModal';
import ChangeAvatarModal from '../../components/ChangeAvatarModal/ChangeAvatarModal';

interface ProfilePageBaseProps {
  errors?: Record<string, string>;
  user: Record<string, any>;
  profileEditMode: boolean;
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
    const template: any = `<input value="{{ value }}" name="{{ name }}" />`;
    return this.compile(template, { ...this.props });
  }
}

interface AvatarProps {
  events: Record<string, Function>;
  avatar: string;
}

class Avatar extends Block<AvatarProps> {
  constructor(props: AvatarProps) {
    super({ ...props });
  }

  render() {
    const template: string = `
    <div class="profile-page__avatar">
      <img src="https://ya-praktikum.tech/api/v2/resources${this.props.avatar}" alt="Empty"/>
      <span class="avatar__text">Change avatar</span>
    </div>`;
    return this.compile(template, { ...this.props });
  }
}

const ProfileKeys: Record<string, string> = {
  email: 'Email',
  login: 'Login',
  first_name: 'First name',
  second_name: 'Second name',
  display_name: 'Chat name',
  phone: 'Phone number',
};

class ProfilePageBase extends Block<ProfilePageBaseProps> {
  constructor(props: ProfilePageBaseProps) {
    super({ ...props });
  }
  init() {
    AuthController.fetchUser();
    const inputs = Object.entries(this.props.user)
      .filter(([name]) => name !== 'id' && name !== 'avatar')
      .map(([name, value]) => {
        return { name, value: value || '', key: ProfileKeys[name] };
      });
    this.children.avatar = new Avatar({
      events: { click: () => store.set('ChangeAvatarModalIsOpen', true) },
      avatar: this.props.user.avatar,
    });
    this.children.form = new Form({
      buttonName: 'Save changes',
      inputs,
      type: 'profile',
      onSubmit: UserController.changeProfile.bind(UserController),
    });
    this.children.items = inputs.map(item => new ProfileItem({ ...item }));
    this.children.changeProfile = new Button({
      label: 'Change profile',
      events: {
        click: () => {
          store.set('ProfileEditMode', true);
        },
      },
    });
    this.children.changePasswordModal = new ChangePasswordModal({});
    this.children.changeAvatarModal = new ChangeAvatarModal({});
    this.children.changePassword = new Button({
      label: 'Change password',
      events: {
        click: () => {
          store.set('ChangePasswordModalIsOpen', true);
        },
      },
    });
    this.children.logout = new Button({
      label: 'Logout',
      type: 'submit',
      events: {
        click: event => {
          event.preventDefault();
          AuthController.logout();
        },
      },
    });
  }

  render() {
    const template: any = `
    <div class="profile-page">
    {{ avatar }}
    <div class="profile-page__name">
      {{ user.first_name }}
    </div>
      <form class="profile-page__info">
      ${
        this.props.profileEditMode
          ? '{{ form }}'
          : `{{ items }}<div class="info__buttons">
      {{ changeProfile }}
      {{ changePassword }}
  </div>
  {{ logout }}`
      }
      </form>
      {{ changePasswordModal }}
      {{ changeAvatarModal }}
    </div>
    `;
    return this.compile(template, { ...this.props });
  }
}

const withUser = withStore(state => ({ user: state.user, profileEditMode: state.ProfileEditMode }));

const ProfilePage = withUser(ProfilePageBase);
export default ProfilePage;
