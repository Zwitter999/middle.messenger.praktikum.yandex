import Templator from '../../utils/Templator';
import './ProfilePage.scss';
import Button from '../../Components/utils/Button/Button';

function ProfileInfoItem(key, value) {
  return `
    <div class="info__item">
    <span>${key}</span>
    <span>${value}</span>
    </div>
  `;
}

function ProfilePage(isEditMode = false) {
  const template = `
    <div class="profile-page">
      <div class="profile-page__avatar">
        <span class="avatar__text">Change avatar</span>
      </div>
      <div class="profile-page__name">
        Anatoli
      </div>
      <div class="profile-page__info">
        ${ProfileInfoItem('Email', 'test.test.yandex.ru')}
        ${ProfileInfoItem('Login', 'testAcc')}
        ${ProfileInfoItem('Name', 'Anatoli')}
        ${ProfileInfoItem('Second name', 'Kurlov')}
        ${ProfileInfoItem('Chat name', 'Bubaika')}
        ${ProfileInfoItem('Phone number', '+78005553532')}
        ${
          isEditMode
            ? Button('Save changes')
            : `<div class="info__buttons">
        ${Button('Change profile')}
        ${Button('Change password')}
        </div>
        ${Button('Logout')}`
        }
      </div>
    </div>
  `;

  const ProfileTemplate = new Templator(template);

  const ProfileMarkup = ProfileTemplate.compile({});

  document.getElementsByTagName('main')[0].innerHTML = ProfileMarkup;
}

export default ProfilePage;
