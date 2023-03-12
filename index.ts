import App from './src/App';

declare global {
  interface Window {
    ChangeAvatarModal: any;
    ChatsPage: any;
    AddDeleteUserModal: any;
    ProfilePage: any;
    LoginPage: any;
    SignupPage: any;
    NotFoundPage: any;
    ServerErrorPage: any;
    ChangePasswordModal: any;
  }
}

window.addEventListener('DOMContentLoaded', App);
