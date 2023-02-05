import Templator from '../../utils/Templator';
import './LoginPage.scss';
import Button from '../../Components/utils/Button/Button';
import Input from '../../Components/utils/Input/Input';
import ErrorText from '../../Components/utils/ErrorText/ErrorText';

function LoginPage(isErrors = false) {
  const template = `
    <div class="login-page">
      <div class="login-page__login-modal">
        <div>Login</div>
        ${Input('Login...')}
        ${isErrors ? ErrorText('invalid login') : ''}
        ${Input('Password...')}
        ${isErrors ? ErrorText('invalid password') : ''}
        ${Button('Login')}
      </div>
    </div>
  `;

  const loginTemplate = new Templator(template);

  const loginMarkup = loginTemplate.compile({});

  document.getElementsByTagName('main')[0].innerHTML = loginMarkup;
}

export default LoginPage;
