import Button from '../../Components/utils/Button/Button';
import ModalPage from '../../Components/utils/ModalPage/ModalPage';

function ServerErrorPage(errorNumber = '5**') {
  const template = `
        <div>Server bad</div>
        ${Button('Home')}
  `;
  ModalPage(errorNumber, template);
}

export default ServerErrorPage;
