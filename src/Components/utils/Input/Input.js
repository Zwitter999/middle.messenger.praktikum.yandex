import { html } from 'lit-element';
import Templator from '../../../utils/Templator';
import './Input.scss';

function Input(placeholder) {
  const template = html` <input class="input" placeholder="{{ placeholder }}" /> `.strings[0];

  const chatsTemplate = new Templator(template);

  const chatsMarkup = chatsTemplate.compile({ placeholder });

  return chatsMarkup;
}

export default Input;
