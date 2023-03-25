import Block from '../../../utils/Block';
import { Message } from '../Message/Message';
import Input from '../Input/Input';
import MessagesController, { Message as MessageInfo } from './../../../controllers/MessagesController';
import store, { withStore } from '../../../utils/Store';
import ValidateFormsController from '../../../controllers/validateFormsController';

interface HeaderMenuButtonProps {
  text: string;
  events?: {
    click: () => void;
  };
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

const headerMenuButtonsList: HeaderMenuButtonProps[] = [
  { text: 'Change avatar' },
  { text: '+ Add user', events: { click: () => store.set('addUserModalisOpen', true) } },
  { text: '- Delete user', events: { click: () => store.set('deleteUserModalisOpen', true) } },
  { text: 'Delete chat' },
];

interface MessengerProps {
  selectedChat: number | undefined;
  messages: MessageInfo[];
  userId: number;
  chatMenuIsOpen: boolean;
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

interface ChatMenuButtonProps {
  events: {
    click: () => void;
  };
}

class ChatMenuButton extends Block<ChatMenuButtonProps> {
  constructor(props: ChatMenuButtonProps) {
    super({ ...props });
  }

  render() {
    const template = `
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
  `;
    return this.compile(template, { ...this.props });
  }
}

class MessengerBase extends Block<MessengerProps> {
  constructor(props: MessengerProps) {
    super(props);
  }
  protected init() {
    this.children.messages = this.createMessages(this.props);

    this.children.input = new Input({
      type: 'text',
      placeholder: 'Write message...',
      name: 'message',
    });

    this.children.headerMenuButtons = headerMenuButtonsList.map(headerMenuButton => {
      return new HeaderMenuButton(headerMenuButton);
    });

    this.children.sendMessageButton = new SendMessageButton({
      events: {
        click: (event: any) => {
          if (!ValidateFormsController.onBlurFocus(this, event.target.parentNode.children[0].value, 'message')) {
            return;
          }
          const input = this.children.input as Input;
          const message = input.getValue();

          input.setValue('');

          MessagesController.sendMessage(this.props.selectedChat!, message);
        },
      },
    });

    this.children.chatMenuButton = new ChatMenuButton({
      events: {
        click: () => {
          store.set('ChatMenuIsOpen', !store.getState().ChatMenuIsOpen);
        },
      },
    });
  }

  protected componentDidUpdate(oldProps: MessengerProps, newProps: MessengerProps): boolean {
    this.children.messages = this.createMessages(newProps);

    return true;
  }

  private createMessages(props: MessengerProps) {
    return props.messages.map(data => {
      return new Message({ ...data, isMine: props.userId === data.user_id });
    });
  }

  protected render(): DocumentFragment {
    const template = `
    <div class="chats-page__chat">
        <div class="chat__header">
            {{chatMenuButton}}
            ${this.props.chatMenuIsOpen ? `<div class="header__menu">{{ headerMenuButtons }}</div>` : ''}
        </div>
        <div class="chat__messages-container">
            {{ messages }}
        </div>
            <div class="chat__footer">
                {{input}}
                {{ sendMessageButton }}
            </div>
        </div>
    </div>`;
    return this.compile(template, { ...this.props });
  }
}

const withSelectedChatMessages = withStore(state => {
  const selectedChatId = state.selectedChat;

  if (!selectedChatId) {
    return {
      messages: [],
      selectedChat: undefined,
      userId: state.user.id,
    };
  }

  return {
    messages: (state.messages || {})[selectedChatId] || [],
    selectedChat: state.selectedChat,
    userId: state.user.id,
    chatMenuIsOpen: state.ChatMenuIsOpen,
  };
});

export const Messenger = withSelectedChatMessages(MessengerBase);
