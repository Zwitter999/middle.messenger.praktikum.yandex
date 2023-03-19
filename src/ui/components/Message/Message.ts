import Block from '../../../utils/Block';

interface MessageProps {
  content: string;
  isMine: boolean;
}

export class Message extends Block<MessageProps> {
  constructor(props: MessageProps) {
    super(props);
  }

  protected render(): DocumentFragment {
    const template: any = `
    <div class="message">
      <div class="message__avatar"></div>
      <div class="message__text" style="background-color: #${
        this.props.isMine ? '545353' : '3a3939'
      }">{{ content }}</div>
    </div>
    `;
    return this.compile(template, { ...this.props });
  }
}
