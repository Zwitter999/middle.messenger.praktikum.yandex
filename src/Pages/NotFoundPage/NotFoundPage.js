import Templator from '../../utils/Templator';
import './NotFoundPage.scss';
import Button from '../../Components/utils/Button/Button';

function NotFoundPage() {
  const template = `
    <div class="not-found-page">
      <div class="not-found-page__not-found-modal">
        <div>404</div>
        <div>Not found</div>
        ${Button('Home')}
      </div>
    </div>
  `;

  const notFoundTemplate = new Templator(template);

  const notFoundMarkup = notFoundTemplate.compile({});

  document.getElementsByTagName('main')[0].innerHTML = notFoundMarkup;
}

export default NotFoundPage;
