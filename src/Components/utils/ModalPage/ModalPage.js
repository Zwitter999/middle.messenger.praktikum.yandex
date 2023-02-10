import './ModalPage.scss';
import Templator from '../../../utils/Templator';

function ModalPage(title, content) {
  const template = `
      <div class="modal-page">
        <div class="modal-page__modal modal-window">
          <h1>{{ title }}</h1>
          {{ content }}
        </div>
      </div>
    `;

  const modalPageTemplate = new Templator(template);

  const modalPageMarkup = modalPageTemplate.compile({ title, content });

  document.getElementsByTagName('main')[0].innerHTML = modalPageMarkup;
}

export default ModalPage;
