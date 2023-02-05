import Templator from '../../utils/Templator';
import './ServerErrorPage.scss';
import Button from '../../Components/utils/Button/Button';

function ServerErrorPage(errorNumber = '5**') {
  const template = `
    <div class="server-error-page">
      <div class="server-error-page__server-error-modal">
        <div>${errorNumber}</div>
        <div>Server bad</div>
        ${Button('Home')}
      </div>
    </div>
  `;

  const serverErrorTemplate = new Templator(template);

  const serverErrorMarkup = serverErrorTemplate.compile({});

  document.getElementsByTagName('main')[0].innerHTML = serverErrorMarkup;
}

export default ServerErrorPage;
