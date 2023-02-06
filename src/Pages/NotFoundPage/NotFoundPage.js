import Button from '../../Components/utils/Button/Button';
import ModalPage from '../../Components/utils/ModalPage/ModalPage';

function NotFoundPage() {
  const template = `
        <div>Not found</div>
        ${Button('Home')}
  `;

  ModalPage('404', template);
}

export default NotFoundPage;
