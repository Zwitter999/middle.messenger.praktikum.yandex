import Templator from '../../utils/Templator';
import './Header.scss';

function Header() {
  const template = `
    <div class="header">
      <nav>
        <button onclick="ChatsPage()">Page</button>
        <button onclick="ChatsPage(true)">Page</button>
        <button onclick="ProfilePage();">Page</button>
        <button onclick="ProfilePage(true);">Page</button>
        <button onclick="LoginPage()">Page</button>
        <button onclick="LoginPage(true)">Page</button>
        <button onclick=" SignupPage()">Page</button>
        <button onclick="NotFoundPage()">Page</button>
        <button onclick="ServerErrorPage()">Page</button>
        <button onclick="ChangeAvatarModal('Upload file', 'upload file from computer')">Modal</button>
        <button onclick="ChangeAvatarModal('File downloaded', 'test.png')">Modal</button>
        <button onclick="ChangeAvatarModal('Upload file', 'upload file from computer', 'need select file')">Modal</button>
        <button onclick="ChangeAvatarModal('Upload file', 'upload file from computer', 'error try again')">Modal</button>
        <button onclick="AddDeleteUserModal(true)">Modal</button>
        <button onclick="AddDeleteUserModal(false)">Modal</button>
      </nav>
    </div>
    `;

  const chatsTemplate = new Templator(template);

  const chatsMarkup = chatsTemplate.compile({});

  document.getElementsByTagName('header')[0].innerHTML = chatsMarkup;
}

export default Header;
