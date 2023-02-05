import Templator from '../../utils/Templator';
import './ChatsPage.scss';

function SideBarButton(text) {
  return `<button class="sidebar__button chat-page__button">${text}</button>`;
}

function Chat(name, message = '', notification = 0) {
  return `
    <div class="chat">
      <div class="chat__avatar"></div>
      <div class="chat__content">
        <div class="content__name">${name}</div>
        <div class="content__message">${message}</div>
      </div>
      ${notification > 0 ? `<div class="chat__notification">${notification}</div>` : '<div style="width: 2em"></div>'}
    </div>
  `;
}

function Message(text, author) {
  return `
    <div class="message">
      <div class="message__avatar"></div>
      <div class="message__text" style="background-color: #${author === 'YOU' ? '545353' : '3a3939'}">${text}</div>
    </div>
  `;
}

function HeaderMenuButton(text) {
  return `
    <div class="menu_button chat-page__button">${text}</div>
  `;
}

function ChatsPage(plug = false) {
  const template = `
    <div class="chats-page">
      <div class="chats-page__sidebar">
        ${SideBarButton('Edit profile')} ${SideBarButton('+ Add chat')}
        <div class="sidebar__chats-container">
          ${Chat('Ivan', 'Hello', 12)} ${Chat('Koly', 'Those blunt sentences come from ', 12)}
          ${Chat('Djon', 'oblem the PM may be')} ${Chat('Smith', 'er time in charge was a disaster.')}
          ${Chat('Scoth', 'al markets melted. The she')} ${Chat('Uluo', 'een to draw on more than a')}
          ${Chat('Giga', 'tional and international debates on', 5)}
          ${Chat('Hafd', 'So far, so vanilla. Why shouldnt a forme', 6)}
          ${Chat('Loks', 'Like many in her tribe, Ms Truss has', 17)}
          ${Chat('Obivan', 'in the party see as one of', 19)}
          ${Chat('Skyhz', 'l reigns in history, she is expected to ar')}
          ${Chat('Kilaja', 'Will her attempted comeback matter?')} ${Chat('Polka', 'You might agree with a different')}
          ${Chat('Anna', 'https://www.bbc.co.uk/news/uk-politics-64523277', 99)}
          ${Chat('Kira', 'Political parties tend to dislike even ', 99)}
          ${Chat('Miron', 'In other words - Liz, not now!', 3)}
        </div>
      </div>
      <div class="chats-page__chat">
      ${
        plug
          ? '<div>Choose who you want to write to</div>'
          : `<div class="chat__header">
        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.4868 2H10.031C7.71486 2 6.13757 2.00387 4.95701 2.19375C3.82304 2.37975 3.29781 2.70331 2.94123 3.13537C2.58305 3.5655 2.31482 4.201 2.16223 5.56694C2.00321 6.991 2 8.89362 2 11.6875V23.3125C2 26.1064 2.00321 28.009 2.16062 29.4331C2.31482 30.8009 2.58305 31.4345 2.94123 31.8646C3.29781 32.2967 3.82464 32.6203 4.95701 32.8043C6.13757 32.9961 7.71486 33 10.031 33H24.4868C26.8029 33 28.3802 32.9961 29.5608 32.8062C30.6948 32.6202 31.22 32.2967 31.5766 31.8646C31.9348 31.4345 32.203 30.799 32.3556 29.4331C32.5146 28.009 32.5178 26.1083 32.5178 23.3125V11.6875C32.5178 8.89362 32.5146 6.991 32.3572 5.56694C32.203 4.19906 31.9348 3.5655 31.5766 3.13537C31.22 2.70331 30.6932 2.37975 29.5608 2.19569C28.3802 2.00387 26.8046 2 24.4868 2Z" stroke="#2D2D2D" stroke-width="3"/>
          <path d="M13.2434 2V33" stroke="#2D2D2D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M8.4248 13.625H6.8186M8.4248 19.4375H6.8186M8.4248 7.8125H6.8186" stroke="#2D2D2D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div class="header__menu">
            ${HeaderMenuButton('Change avatar')}
            ${HeaderMenuButton('+ Add user')}
            ${HeaderMenuButton('- Delete user')}
            ${HeaderMenuButton('Delete chat')}
        </div>
        </div>
        <div class="chat__messages-container">
          ${Message('Hello', 'YOU')}
          ${Message('Как у тебя дела', 'ANONUMUS')}
          ${Message('У меня все хорошо это странно', 'ANONUMUS')}
          ${Message('Что странно?', 'ANONUMUS')}
          ${Message('Что мы общаемся на русском, а все приложение на английском', 'YOU')}
          ${Message('Ну да , просто автору было лень загонять этот текст в переводчик)', 'YOU')}
        </div>
        <div class="chat__footer">
          <input placeholder="Write message..." />
          <svg className="ion__svg lock-icon" xmlns="http://www.w3.org/2000/svg" width="1.6em" height="1.6em" viewBox="0 0 24 24" fill="#2d2d2d"><path d="M2 24v-24l20 12-20 12z" /></svg>
        </div>
      </div>`
      }
    </div>
  `;

  const chatsTemplate = new Templator(template);

  const chatsMarkup = chatsTemplate.compile({});

  document.getElementsByTagName('main')[0].innerHTML = chatsMarkup;
}

export default ChatsPage;
// document.getElementsByTagName('main')[0].innerHTML = chatsMarkup;
