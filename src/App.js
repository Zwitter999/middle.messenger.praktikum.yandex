import ChangeAvatarModal from './Components/utils/ChangeAvatarModal/ChangeAvatarModal';
import Header from './Components/Header/Header';
import ChatsPage from './Pages/ChatsPage/ChatsPage';
import AddDeleteUserModal from './Components/AddDeleteUserModal/AddDeleteUserModal';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import ChangePasswordModal from './Components/ChangePasswordModal/ChangePasswordModal';
import LoginPage from './Pages/LoginPage/LoginPage';
import SignupPage from './Pages/SignupPage/SignupPage';
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage';
import ServerErrorPage from './Pages/ServerErrorPage/ServerErrorPage';

window.ChangeAvatarModal = ChangeAvatarModal;
window.ChatsPage = ChatsPage;
window.AddDeleteUserModal = AddDeleteUserModal;
window.ProfilePage = ProfilePage;
window.LoginPage = LoginPage;
window.SignupPage = SignupPage;
window.NotFoundPage = NotFoundPage;
window.ServerErrorPage = ServerErrorPage;

function App() {
  // Header для удобства просмотра страниц при code review,
  // после сдачи первого спринта будет удален
  Header();
}

export default App;
