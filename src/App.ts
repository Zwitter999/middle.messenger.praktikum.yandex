import Router from './utils/Router';
import LoginPage from './ui/pages/LoginPage/LoginPage';
import SignupPage from './ui/pages/SignupPage/SignupPage';
import ProfilePage from './ui/pages/ProfilePage/ProfilePage';
import ChatsPage from './ui/pages/ChatsPage/ChatsPage';
import AuthController from './controllers/AuthController';

export enum Routes {
  Index = '/',
  Signup = '/sign-up',
  Profile = '/settings',
  Messenger = '/messenger',
}

async function App() {
  Router.use(Routes.Index, LoginPage)
    .use(Routes.Signup, SignupPage)
    .use(Routes.Profile, ProfilePage)
    .use(Routes.Messenger, ChatsPage);

  let isProtectedRoute = true;

  switch (window.location.pathname) {
    case Routes.Index:
    case Routes.Signup:
      isProtectedRoute = false;
      break;
  }

  try {
    await AuthController.fetchUser();

    Router.start();

    if (!isProtectedRoute) {
      Router.go(Routes.Messenger);
    }
  } catch (e) {
    Router.start();

    if (isProtectedRoute) {
      Router.go(Routes.Index);
    }
  }
}

export default App;
