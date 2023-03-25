import API, { ChatsAPI } from '../api/ChatsAPI';
import store from '../utils/Store';
import MessagesController from './MessagesController';
import UserController from './UserController';

class ChatsController {
  private readonly api: ChatsAPI;

  constructor() {
    this.api = API;
  }

  async create(body: {}) {
    await this.api.create(body);

    store.set('AddChatModalIsOpen', false);

    this.fetchChats();
  }

  async fetchChats() {
    const chats = await this.api.read();

    chats.map(async chat => {
      const token = await this.getToken(chat.id);

      await MessagesController.connect(chat.id, token);
    });

    store.set('chats', chats);
  }

  async addUserToChat(data: {}) {
    const users = await UserController.searchUser(data);
    const id = store.getState().selectedChat;

    this.api.addUsers(id, [users[0].id]);
  }

  async deleteUserFromChat(data: {}) {
    const users = await UserController.searchUser(data);
    const id = store.getState().selectedChat;

    this.api.deleteUsers(id, [users[0].id]);
  }

  async delete(id: number) {
    await this.api.delete(id);

    this.fetchChats();
  }

  getToken(id: number) {
    return this.api.getToken(id);
  }

  selectChat(id: number) {
    store.set('selectedChat', id);
  }
}

const controller = new ChatsController();

export default controller;
