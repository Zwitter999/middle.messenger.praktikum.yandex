import Button from '../../Components/utils/Button/Button';
import Input from '../../Components/utils/Input/Input';
import ErrorText from '../../Components/utils/ErrorText/ErrorText';
import ModalPage from '../../Components/utils/ModalPage/ModalPage';

function LoginPage(isErrors = false) {
  const template = `
      <form class="modal-form">
        ${Input('Login...', 'login')}
        ${isErrors ? ErrorText('invalid login') : ''}
        ${Input('Password...', 'password')}
        ${isErrors ? ErrorText('invalid password') : ''}
        ${Button('Login', 'submit')}
      </form>
  `;

  ModalPage('Login', template);
}

export default LoginPage;
