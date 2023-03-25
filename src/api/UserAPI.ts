import BaseAPI from './utils/BaseAPI';
import { User } from './AuthAPI';

export interface ChangeProfileData {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
}

export interface ChangePasswordData {
  oldPassword: string;
  newPassword: string;
}

export interface ChangeAvatarData {
  avatar: File;
}

export class UserAPI extends BaseAPI {
  constructor() {
    super('/user');
  }

  changeProfile(data: ChangeProfileData): Promise<User> {
    return this.http.put('/profile', data);
  }

  changePassword(data: ChangePasswordData) {
    return this.http.put('/password', data);
  }

  changeAvatar(data: ChangeAvatarData) {
    return this.http.put('/profile/avatar', data);
  }

  searchUser(data: {}) {
    return this.http.post('/search', data);
  }

  update = undefined;
  read = undefined;
  create = undefined;
  delete = undefined;
}

export default new UserAPI();
