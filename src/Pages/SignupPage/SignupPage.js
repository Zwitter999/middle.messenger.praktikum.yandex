import Button from '../../Components/utils/Button/Button';
import Input from '../../Components/utils/Input/Input';
import ModalPage from '../../Components/utils/ModalPage/ModalPage';

function SignupPage() {
  const template = `
        ${Input('Name...')} 
        ${Input('Sacond name...')}
        ${Input('Login...')}
        ${Input('Email...')}
        ${Input('Password...')}
        ${Input('Repeat password...')}
        ${Button('Signup')}
  `;

  ModalPage('Signup', template);
}

export default SignupPage;
