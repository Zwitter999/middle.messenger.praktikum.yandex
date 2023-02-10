import Templator from '../../utils/Templator';
import './ProfilePage.scss';
import Button from '../../Components/utils/Button/Button';

function ProfileInfoItem(key, value, isEditMode = false, name = '') {
  return `
    <div class="info__item">
    <span>${key}</span>
    ${isEditMode ? `<input value=${value} name=${name}/>` : `<span>${value}</span>`}
    </div>
  `;
}

function ProfilePage(isEditMode = false) {
  const template = `
    <div class="profile-page">
      <div class="profile-page__avatar">
        <input name="avatar" type="file"/>
        <span class="avatar__text">Change avatar</span>
      </div>
      <div class="profile-page__name">
        Anatoli
      </div>
      <${isEditMode ? 'form' : 'div'} class="profile-page__info">
        ${ProfileInfoItem('Email', 'test.test.yandex.ru', isEditMode, 'email')}
        ${ProfileInfoItem('Login', 'testAcc', isEditMode, 'login')}
        ${ProfileInfoItem('Name', 'Anatoli', isEditMode, 'first_name')}
        ${ProfileInfoItem('Second name', 'Kurlov', isEditMode, 'second_name')}
        ${ProfileInfoItem('Chat name', 'Bubaika', isEditMode, 'display_name')}
        ${ProfileInfoItem('Phone number', '+78005553532', isEditMode, 'phone')}
        ${
          isEditMode
            ? Button('Save changes', 'submit')
            : `<div class="info__buttons">
        ${Button('Change profile')}
        ${Button('Change password')}
        </div>
        ${Button('Logout')}`
        }
      </${isEditMode ? 'form' : 'div'}>
    </div>
  `;

  const ProfileTemplate = new Templator(template);

  const ProfileMarkup = ProfileTemplate.compile({});

  document.getElementsByTagName('main')[0].innerHTML = ProfileMarkup;
}

export default ProfilePage;
