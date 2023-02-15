import { html } from 'lit';
import Templator from '../../../utils/Templator';
import './Input.scss';

function Input(placeholder: string, name = '', type = '') {
  const template = html` <input class="input" placeholder="{{ placeholder }}" name="{{ name }}" type="{{ type }}" /> `
    .strings[0];

  const chatsTemplate = new Templator(template);

  const chatsMarkup = chatsTemplate.compile({ placeholder, name, type });

  return chatsMarkup;
}

export default Input;
