import ChatsPage from '../ui/pages/ChatsPage/ChatsPage';
import LoginPage from '../ui/pages/LoginPage/LoginPage';
import NotFoundPage from '../ui/pages/NotFoundPage/NotFoundPage';
import ProfilePage from '../ui/pages/ProfilePage/ProfilePage';
import ServerErrorPage from '../ui/pages/ServerErrorPage/ServerErrorPage';
import SignupPage from '../ui/pages/SignupPage/SignupPage';

const ROUTES = {
  login: LoginPage,
  chats: ChatsPage,
  signup: SignupPage,
  profile: ProfilePage,
  notFound: NotFoundPage,
  serverError: ServerErrorPage,
};

function renderDOM(route: keyof typeof ROUTES) {
  const root = document.querySelector('#root')!;

  root.innerHTML = '';

  const PageComponent = ROUTES[route];
  const page = new PageComponent({});

  root.appendChild(page.element!);

  page.dispatchComponentDidMount();
}

export default renderDOM;
