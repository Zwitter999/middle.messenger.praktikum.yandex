import Block from '../../../utils/Block';
import './ChatsPage.scss';
import ChatsController from '../../../controllers/ChatsController';
import store, { withStore } from '../../../utils/Store';
import { ChatsList } from '../../components/ChatsList/ChatsList';
import AddChatModal from '../../components/AddChatModal/AddChatModal';
import { Messenger } from '../../components/Messenger/Messenger';
import { Link } from '../../components/Link/Link';
import AddUserModal from '../../components/AddUserModal/AddUserModal';
import DeleteUserModal from '../../components/DeleteUserModal/DeleteUserModal';
import { Routes } from '../../../App';

interface SideBarButtonProps {
  text: string;
  events: {
    click: () => void;
  };
}

class SideBarButton extends Block<SideBarButtonProps> {
  constructor(props: SideBarButtonProps) {
    super({ ...props });
  }

  render() {
    const template: any = `<button>{{ text }}</button>`;
    return this.compile(template, { ...this.props });
  }
}
class ChatsPageBase extends Block {
  constructor({ ...props }) {
    super({ ...props });
  }

  init() {
    // @ts-ignore
    this.children.editProfile = new Link({ to: Routes.Profile, label: 'Edit profile' });
    this.children.addChat = new SideBarButton({
      text: '+ Add chat',
      events: { click: () => store.set('AddChatModalIsOpen', true) },
    });
    this.children.chatsList = new ChatsList({ isLoaded: false });

    this.children.messenger = new Messenger({});

    ChatsController.fetchChats().finally(() => {
      (this.children.chatsList as Block).setProps({
        isLoaded: true,
      });
    });
    this.children.addChatModal = new AddChatModal({});
    this.children.addUserModal = new AddUserModal({});
    this.children.deleteUserModal = new DeleteUserModal({});
  }

  render() {
    const template: any = `
      <div class="chats-page">
        <div class="chats-page__sidebar">
          <div class="sidebar__search">
            <svg width="24" height="24" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M36.3247 31.4199L27.8263 22.9215C29.2439 20.6275 30.0625 17.9242 
                30.0625 15.0312C30.0625 6.72937 23.3331 0 15.0312 
                0C6.72937 0 0 6.72937 0 15.0312C0 23.3331 6.72937 30.0625 15.0312 
                30.0625C17.9242 30.0625 20.6275 29.2439 22.9215 27.8263L31.4199 36.3247C32.3195 
                37.2243 33.7902 37.2243 34.6898 36.3247L36.3247 34.6898C37.2243 
                33.7902 37.2243 32.3195 36.3247 31.4199ZM7.67287 22.3896C5.70725 20.424 4.625 17.8109 
                4.625 15.0312C4.625 12.2516 5.70725 9.6385 7.67287 7.67287C9.6385 
                5.70725 12.2516 4.625 15.0312 4.625C17.8109 4.625 20.424 5.70725 22.3896 7.67287C24.3552 
                9.6385 25.4375 12.2516 25.4375 15.0312C25.4375 17.8109 24.3552 
                20.424 22.3896 22.3896C20.424 24.3552 17.8109 25.4375 15.0312 25.4375C12.2516 25.4375 9.6385 
                24.3552 7.67287 22.3896Z"
                fill="white"
              />
            </svg>
            <input placeholder="Search..." />
            </div>
            <div class="sidebar__buttons">
              {{ editProfile }} {{ addChat }}
            </div>
          {{ chatsList }}
        </div>
        {{messenger}}
        {{addChatModal}}
        {{addUserModal}}
        {{deleteUserModal}}
      </div>
    `;
    return this.compile(template, { ...this.props });
  }
}

const withChats = withStore(state => ({
  // @ts-ignore
  selectedChat: (state.chats || []).find(({ id }) => id === state.selectedChat),
}));

const ChatsPage = withChats(ChatsPageBase);

export default ChatsPage;
