import Templator from '../../utils/Templator';
import './Header.scss';

function Header() {
  const template = `
    <div class="header">
      <nav>
        <button onclick="ChatsPage()">1</button>
        <button onclick="ChatsPage(true)">2</button>
        <button onclick="ChangeAvatarModal('Upload file', 'upload file from computer')">3</button>
        <button onclick="ChangeAvatarModal('File downloaded', 'test.png')">4</button>
        <button onclick="ChangeAvatarModal('Upload file', 'upload file from computer', 'need select file')">5</button>
        <button onclick="ChangeAvatarModal('Upload file', 'upload file from computer', 'error try again')">6</button>
        <button onclick="AddDeleteUserModal(true)">7</button>
        <button onclick="AddDeleteUserModal(false)">8</button>
        <button onclick="ProfilePage();">9</button>
        <button onclick="ProfilePage(true);">10</button>
        <button onclick="LoginPage()">11</button>
        <button onclick="LoginPage(true)">12</button>
        <button onclick=" SignupPage()">13</button>
        <button onclick="NotFoundPage()">14</button>
        <button onclick="ServerErrorPage()">15</button>
      </nav>
    </div>
    `;

  const chatsTemplate = new Templator(template);

  const chatsMarkup = chatsTemplate.compile({});

  document.getElementsByTagName('header')[0].innerHTML = chatsMarkup;
}

export default Header;
