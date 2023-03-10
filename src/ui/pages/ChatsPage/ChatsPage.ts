import Block from '../../utils/Block';
import './ChatsPage.scss';
import ValidateFormsController from '../../../controllers/validateFormsController';

interface SideBarButtonProps {
  text: string;
}

class SideBarButton extends Block<SideBarButtonProps> {
  constructor(props: SideBarButtonProps) {
    super({ ...props });
  }

  render() {
    const template: any = `<button class="sidebar__button chat-page__button">{{ text }}</button>`;
    return this.compile(template, { ...this.props });
  }
}

interface ChatProps {
  notification: number;
  lastMessage: string;
  name: string;
}

class Chat extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super({ ...props });
  }

  render() {
    const template: any = `
    <div class="chat">
    <div class="chat__avatar"></div>
    <div class="chat__content">
      <div class="content__name">{{ name }}</div>
      <div class="content__message">{{ lastMessage }}</div>
    </div>
    ${
      this.props.notification > 0
        ? `<div class="chat__notification">{{ notification }}</div>`
        : '<div style="width: 2em"></div>'
    }
  </div>
    `;
    return this.compile(template, { ...this.props });
  }
}

interface MessageProps {
  text: string;
  author: string;
}

class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super({ ...props });
  }

  render() {
    const template: any = `
    <div class="message">
      <div class="message__avatar"></div>
      <div class="message__text" style="background-color: #${
        this.props.author === 'YOU' ? '545353' : '3a3939'
      }">{{ text }}</div>
    </div>
    `;
    return this.compile(template, { ...this.props });
  }
}

interface HeaderMenuButtonProps {
  text: string;
}

class HeaderMenuButton extends Block<HeaderMenuButtonProps> {
  constructor(props: HeaderMenuButtonProps) {
    super({ ...props });
  }

  render() {
    const template: any = `
    <div class="menu__button chat-page__button">{{ text }}</div>
    `;
    return this.compile(template, { ...this.props });
  }
}

interface SendMessageButtonProps {
  events: Record<string, Function>;
}

class SendMessageButton extends Block<SendMessageButtonProps> {
  constructor(props: SendMessageButtonProps) {
    super({ ...props });
  }

  render() {
    const template: any = `
    <button>
    <svg className="ion__svg lock-icon" xmlns="http://www.w3.org/2000/svg" style="pointer-events: none"
          width="1.6em" height="1.6em" viewBox="0 0 24 24" fill="#2d2d2d">
          <path d="M2 24v-24l20 12-20 12z" />
          </svg>
    </button>
    `;
    return this.compile(template, { ...this.props });
  }
}

interface ChatsPageProps {
  plug?: boolean;
}

const chatsList: ChatProps[] = [
  { name: 'Ivan', lastMessage: 'Hello', notification: 111 },
  { name: 'Djon', lastMessage: 'blem the PM may be', notification: 0 },
  { name: 'Scoth', lastMessage: 'al markets melted. The she', notification: 0 },
  { name: 'Ivan', lastMessage: 'Hello', notification: 76 },
  { name: 'Hafd', lastMessage: 'Hello', notification: 34 },
  { name: 'Loks', lastMessage: 'Hello', notification: 0 },
  { name: 'Obivan', lastMessage: 'Hello', notification: 0 },
  { name: 'Skyhz', lastMessage: 'Hello', notification: 34 },
  { name: 'Anna', lastMessage: 'Hello', notification: 34 },
  { name: 'Kilaja', lastMessage: 'Hello', notification: 34 },
  { name: 'Kira', lastMessage: 'Hello', notification: 34 },
  { name: 'Kira', lastMessage: 'Hello', notification: 34 },
  { name: 'Kira', lastMessage: 'Hello', notification: 34 },
  { name: 'Kira', lastMessage: 'Hello', notification: 34 },
  { name: 'Kira', lastMessage: 'Hello', notification: 34 },
  { name: 'Kira', lastMessage: 'Hello', notification: 34 },
  { name: 'Kira', lastMessage: 'Hello', notification: 34 },
  { name: 'Kira', lastMessage: 'Hello', notification: 34 },
  { name: 'Kira', lastMessage: 'Hello', notification: 34 },
  { name: 'Kira', lastMessage: 'Hello', notification: 34 },
  { name: 'Kira', lastMessage: 'Hello', notification: 34 },
];

const headerMenuButtonsList: HeaderMenuButtonProps[] = [
  { text: 'Change avatar' },
  { text: '+ Add user' },
  { text: '- Delete user' },
  { text: 'Delete chat' },
];

const messagesList: MessageProps[] = [
  { text: 'Hello', author: 'YOU' },
  { text: '?????? ?? ???????? ????????', author: 'ANONUMUS' },
  { text: '?? ???????? ?????? ???????????? ?????? ??????????????', author: 'ANONUMUS' },
  { text: '?????? ???????????????', author: 'ANONUMUS' },
  { text: '?????? ???? ???????????????? ???? ??????????????, ?? ?????? ???????????????????? ???? ????????????????????', author: 'YOU' },
  { text: '???? ???? , ???????????? ???????????? ???????? ???????? ???????????????? ???????? ?????????? ?? ????????????????????)', author: 'YOU' },
];

class ChatsPage extends Block<ChatsPageProps> {
  constructor({ plug = true, ...props }: ChatsPageProps) {
    super({ plug, ...props });
  }

  init() {
    this.children.editProfile = new SideBarButton({
      text: 'Edit profile',
    });
    this.children.addChat = new SideBarButton({
      text: '+ Add chat',
    });
    this.children.chats = chatsList.map(chat => {
      return new Chat(chat);
    });
    this.children.headerMenuButtons = headerMenuButtonsList.map(headerMenuButton => {
      return new HeaderMenuButton(headerMenuButton);
    });
    this.children.messages = messagesList.map(headerMenuButton => {
      return new Message(headerMenuButton);
    });
    this.children.sendMessageButton = new SendMessageButton({
      events: {
        click: (event: any) => {
          ValidateFormsController.onBlurFocus(this, event.target.parentNode.children[0].value, 'message');
        },
      },
    });
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
          {{ editProfile }} {{ addChat }}
          <div class="sidebar__chats-container">{{ chats }}</div>
        </div>
        <div class="chats-page__chat">
          ${
            this.props.plug
              ? `<div>Choose who you want to write to</div>`
              : `
        <div class="chat__header">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24.4868 2H10.031C7.71486 2 6.13757 2.00387 4.95701 
        2.19375C3.82304 2.37975 3.29781 2.70331 2.94123 3.13537C2.58305 3.5655 2.31482 4.201 2.16223 
        5.56694C2.00321 6.991 2 8.89362 2 11.6875V23.3125C2 26.1064 2.00321 
        28.009 2.16062 29.4331C2.31482 30.8009 2.58305 31.4345 2.94123 31.8646C3.29781 32.2967 
        3.82464 32.6203 4.95701 32.8043C6.13757 32.9961 7.71486 33 10.031 
        33H24.4868C26.8029 33 28.3802 32.9961 29.5608 32.8062C30.6948 32.6202 31.22 32.2967 31.5766 
        31.8646C31.9348 31.4345 32.203 30.799 32.3556 29.4331C32.5146 
        28.009 32.5178 26.1083 32.5178 23.3125V11.6875C32.5178 8.89362 32.5146 6.991 32.3572 5.56694C32.203 
        4.19906 31.9348 3.5655 31.5766 3.13537C31.22 2.70331 30.6932 
        2.37975 29.5608 2.19569C28.3802 2.00387 26.8046 2 24.4868 2Z" stroke="#2D2D2D" stroke-width="3"/>
        <path d="M13.2434 2V33" stroke="#2D2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8.4248 13.625H6.8186M8.4248 19.4375H6.8186M8.4248 7.8125H6.8186" 
        stroke="#2D2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <div class="header__menu">
          {{ headerMenuButtons }}
      </div>
      </div>
      <div class="chat__messages-container">
          {{ messages }}
      </div>
      <div class="chat__footer">
          <input placeholder="Write message..." name="message"/>
          {{ sendMessageButton }}
      </div>
        </div>`
          }
        </div>
      </div>
    `;
    return this.compile(template, { ...this.props });
  }
}
export default ChatsPage;
