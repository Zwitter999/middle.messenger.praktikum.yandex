import Button from '../../Components/utils/Button/Button';
import Input from '../../Components/utils/Input/Input';
import ErrorText from '../../Components/utils/ErrorText/ErrorText';
import ModalPage from '../../Components/utils/ModalPage/ModalPage';

function LoginPage(isErrors = false) {
  const template = `
        ${Input('Login...')}
        ${isErrors ? ErrorText('invalid login') : ''}
        ${Input('Password...')}
        ${isErrors ? ErrorText('invalid password') : ''}
        ${Button('Login')}
  `;

  ModalPage('Login', template);
}

export default LoginPage;
