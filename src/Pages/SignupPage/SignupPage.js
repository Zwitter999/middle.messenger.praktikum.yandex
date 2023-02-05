import Templator from '../../utils/Templator';
import './SignupPage.scss';
import Button from '../../Components/utils/Button/Button';
import Input from '../../Components/utils/Input/Input';

function SignupPage() {
  const template = `
    <div class="signup-page">
      <div class="signup-page__signup-modal">
        <div>Signup</div>
        ${Input('Name...')} 
        ${Input('Sacond name...')}
        ${Input('Login...')}
        ${Input('Email...')}
        ${Input('Password...')}
        ${Input('Repeat password...')}
        ${Button('Signup')}
      </div>
    </div>
  `;

  const signupTemplate = new Templator(template);

  const signupMarkup = signupTemplate.compile({});

  document.getElementsByTagName('main')[0].innerHTML = signupMarkup;
}

export default SignupPage;
