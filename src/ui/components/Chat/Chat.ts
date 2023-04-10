import Block from '../../../utils/Block';
import './Chat.scss';
import { withStore } from '../../../utils/Store';
import { ChatInfo } from '../../../api/ChatsAPI';

interface ChatProps {
  id: number;
  title: string;
  unread_count: number;
  selectedChat: ChatInfo;
  events: {
    click: () => void;
  };
  last_message: null | string;
}

class ChatBase extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }

  render() {
    const template: string = `
    <div class="chat ${this.props.selectedChat ? 'chat_active' : ''}">
    <div class="chat__avatar"></div>
    <div class="chat__content">
      <div class="content__name">{{ title }}</div>
      ${this.props.last_message ? `<div class="content__message">{{ last_message.content }}</div>` : ''}
    </div>
    ${
      this.props.unread_count > 0
        ? `<div class="chat__notification">{{ unread_count }}</div>`
        : '<div style="width: 2em"></div>'
    }
  </div>
    `;
    return this.compile(template, { ...this.props, isSelected: this.props.id === this.props.selectedChat?.id });
  }
}

export const withSelectedChat = withStore(state => ({
  // @ts-ignore
  selectedChat: (state.chats || []).find(({ id }) => id === state.selectedChat),
}));

// @ts-ignore
export const Chat = withSelectedChat(ChatBase);
