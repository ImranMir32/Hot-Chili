import loginView from './views/loginView';
import icons from '../img/icons.svg';

import { state } from './model';
import { MSG_LOAD_TIME } from './config';

export const addloginBtn = function () {
  const parentEl = document.querySelector('.nav__list');

  const html = `
  <li class="nav__item">
    <button class="nav__btn nav__btn--login">
      <svg class="nav__icon">
        <use href="${icons}#icon-user"></use>
      </svg>
      <span>Sign In</span>
    </button>
  </li>`;

  parentEl.insertAdjacentHTML('beforeend', html);
};

export const addRegistrationpBtn = function () {
  const parentEl = document.querySelector('.nav__list');

  const html = `
    <li class="nav__item">
      <button class="nav__btn nav__btn--registration">
         <svg class="nav__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
        <span>Join Now</span>
     </button>
    </li>`;

  parentEl.insertAdjacentHTML('beforeend', html);
};

export const addCustomRecipeBtn = function () {
  const parentEl = document.querySelector('.nav__list');

  const html = `
  <li class="nav__item">
    <button class="nav__btn nav__btn--add-recipe">
    <svg class="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M200 344V280H136C122.7 280 112 269.3 112 256C112 242.7 122.7 232 136 232H200V168C200 154.7 210.7 144 224 144C237.3 144 248 154.7 248 168V232H312C325.3 232 336 242.7 336 256C336 269.3 325.3 280 312 280H248V344C248 357.3 237.3 368 224 368C210.7 368 200 357.3 200 344zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"/></svg>
    <span>Add recipe</span>
    </button>
  </li>`;

  parentEl.insertAdjacentHTML('beforeend', html);
};

export const addBookmarksBtn = function () {
  const parentEl = document.querySelector('.nav__list');

  const html = `
  <li class="nav__item">
    <button class="nav__btn nav__btn--bookmarks">
      <svg class="nav__icon">
        <use href="${icons}#icon-bookmark"></use>
      </svg>
      <span>Bookmarks</span>
    </button>
    <div class="bookmarks">
      <ul class="bookmarks__list">
        <div class="message">
          <div>
            <svg>
              <use href="src/img/icons.svg#icon-smile"></use>
            </svg>
          </div>
          <p>
            No bookmarks yet !!
          </p>
        </div>
      </ul>
    </div>
  </li>`;

  parentEl.insertAdjacentHTML('beforeend', html);
};

export const addSessionUserName = function () {
  const parentEl = document.querySelector('.nav__list');
  const html = `
  <li class="nav__item">
    <span class = "userName">Hello, ${state.username}</span>
  </li>`;
  parentEl.insertAdjacentHTML('afterbegin', html);
};

export const addLogoutBtn = function () {
  const parentEl = document.querySelector('.nav__list');
  const html = `
    <li class="nav__item">
    <button class="nav__btn nav__btn--logout">
    <svg class="nav__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z"/></svg>
      <span>Logout</span>
    </button>
    `;
  parentEl.insertAdjacentHTML('beforeend', html);
};

export const clearNav = function () {
  parentEl = document.querySelector('.nav__list');
  parentEl.innerHTML = '';
};

export const hideButtonsAndModal = function () {
  clearNav();

  setTimeout(loginView.renderMessage.bind(loginView), MSG_LOAD_TIME * 1000);
  setTimeout(() => {
    loginView.renderMessage();
    setTimeout(loginView.toogleWindow.bind(loginView), MSG_LOAD_TIME * 220);
  }, MSG_LOAD_TIME * 1000);
};

export const addlogoutEvListner = function (handler) {
  const parentEl = document.querySelector('.nav__btn--logout');
  parentEl.addEventListener('click', function (e) {
    handler();
  });
};

export const clearHash = function () {
  window.location.hash = '';
};

export const hideMessage = function () {
  parentEl = document.querySelector('.search-message');
  if (!parentEl.classList.contains('hidden')) parentEl.classList.add('hidden');
};

export const showMessage = function () {
  parentEl = document.querySelector('.search-message');
  if (parentEl.classList.contains('hidden'))
    parentEl.classList.remove('hidden');
};

export const getFraction = decimal => {
  if (decimal % 1 === 0) return decimal.toString();
  const gcd = function (a, b) {
    if (!b) return a;

    return gcd(b, a % b);
  };

  decimal = decimal.toFixed(2);
  let denominator = 100;
  let numerator = decimal * denominator;

  const divisor = gcd(numerator, denominator);

  numerator /= divisor;
  denominator /= divisor;
  const result = numerator.toString() + '/' + denominator.toString();
  return result;
};

export const hideBookmark = function () {
  parentEl = document.querySelector('.btn--bookmark');
  if (!parentEl.classList.contains('hidden')) parentEl.classList.add('hidden');
};
