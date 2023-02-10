import Templator from '../../../utils/Templator';
import './ErrorText.scss';
import { html } from 'lit';

function ErrorText(text) {
  const template = html`<div class="error-text">{{ text }}</div>`.strings[0];

  const chatsTemplate = new Templator(template);

  const chatsMarkup = chatsTemplate.compile({ text });

  return chatsMarkup;
}

export default ErrorText;
