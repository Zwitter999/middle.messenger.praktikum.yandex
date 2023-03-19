import API, { UserAPI, ChangeProfileData, ChangePasswordData, ChangeAvatarData } from './../api/UserAPI';
import router from '../utils/Router';
import store from '../utils/Store';

class UserController {
  private readonly api: UserAPI;

  constructor() {
    this.api = API;
  }

  async changeProfile(data: ChangeProfileData) {
    try {
      const user = await this.api.changeProfile(data);
      router.go('/profile');
      store.set('ProfileEditMode', false);
      store.set('user', user);
    } catch (e: any) {
      console.error(e);
    }
  }

  async changePassword(data: ChangePasswordData) {
    try {
      await this.api.changePassword(data);
      router.go('/profile');
      store.set('ChangePasswordModalIsOpen', false);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async changeAvatar(data: ChangeAvatarData) {
    try {
      await this.api.changeAvatar(data);
      store.set('ChangeAvatarModalIsOpen', false);
      router.go('/profile');
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async searchUser(data: {}) {
    try {
      const user = await this.api.searchUser(data);
      return user;
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new UserController();
