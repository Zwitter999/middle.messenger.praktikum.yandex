import API, { AuthAPI, SigninData, SignupData } from '../api/AuthAPI';
import store from '../utils/Store';
import router from '../utils/Router';
import { Routes } from '../App';

class AuthController {
  private readonly api: AuthAPI;

  constructor() {
    this.api = API;
  }

  async signin(data: SigninData) {
    try {
      await this.api.signin(data);

      router.go(Routes.Profile);
    } catch (e: any) {
      console.error(e);
    }
  }

  async signup(data: SignupData) {
    console.log(API);
    try {
      await this.api.signup(data);

      await this.fetchUser();

      router.go(Routes.Profile);
    } catch (e: any) {
      console.error(e.message);
    }
  }

  async fetchUser() {
    const user = await this.api.read();

    store.set('user', user);
  }

  async logout() {
    try {
      await this.api.logout();

      router.go(Routes.Index);
    } catch (e: any) {
      console.error(e.message);
    }
  }
}

export default new AuthController();
