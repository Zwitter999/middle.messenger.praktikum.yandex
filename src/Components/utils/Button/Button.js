import Templator from '../../../utils/Templator';
import './Button.scss';

function Button(title, type = '') {
  const template = `<button class="button" type=${type}>{{ title }}</button>`;

  const chatsTemplate = new Templator(template);

  const chatsMarkup = chatsTemplate.compile({ title });

  return chatsMarkup;
}

export default Button;
