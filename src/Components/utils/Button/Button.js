import Templator from '../../../utils/Templator';
import { html } from 'lit-element';
import './Button.scss';

function Button(title) {
  const template = html`<button class="button">{{ title }}</button>`.strings[0];

  const chatsTemplate = new Templator(template);

  const chatsMarkup = chatsTemplate.compile({ title });

  return chatsMarkup;
}

export default Button;
