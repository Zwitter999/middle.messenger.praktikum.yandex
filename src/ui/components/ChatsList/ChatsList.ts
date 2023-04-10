import Block from '../../../utils/Block';
import { Chat } from '../Chat/Chat';
import { withStore } from '../../../utils/Store';
import { ChatInfo } from '../../../api/ChatsAPI';
import ChatsController from '../../../controllers/ChatsController';
import './ChatsList.scss';

interface ChatsListProps {
  chats: ChatInfo[];
  isLoaded: boolean;
}

class ChatsListBase extends Block<ChatsListProps> {
  constructor(props: ChatsListProps) {
    super({ ...props });
  }

  protected init() {
    this.children.chats = this.createChats(this.props);
  }

  protected componentDidUpdate(_oldProps: ChatsListProps, newProps: ChatsListProps): boolean {
    this.children.chats = this.createChats(newProps);

    return true;
  }

  private createChats(props: ChatsListProps) {
    return props.chats.map(data => {
      return new Chat({
        ...data,
        events: {
          click: () => {
            ChatsController.selectChat(data.id);
          },
        },
      });
    });
  }

  protected render(): DocumentFragment {
    const template = `<div class="sidebar__chats-container">{{ chats }}</div>`;
    return this.compile(template, { ...this.props });
  }
}

const withChats = withStore(state => ({ chats: [...(state.chats || [])] }));

// @ts-ignore
export const ChatsList = withChats(ChatsListBase);
