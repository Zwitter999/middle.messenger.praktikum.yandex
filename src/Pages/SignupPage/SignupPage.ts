import Button from '../../Components/utils/Button/Button';
import Input from '../../Components/utils/Input/Input';
import ModalPage from '../../Components/utils/ModalPage/ModalPage';

function SignupPage() {
  const template = `
    <form class="modal-form">
      ${Input('Name...', 'first_name')} 
      ${Input('Sacond name...', 'second_name')}
      ${Input('Login...', 'login')}
      ${Input('Email...', 'email')}
      ${Input('Password...', 'password')}
      ${Input('Phone number', 'phone')}
      ${Button('Signup', 'submit')}
    </form>
  `;

  ModalPage('Signup', template);
}

export default SignupPage;
