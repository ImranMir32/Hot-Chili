import View from './view.js';
import { REFRESH } from '../config.js';

class AddUserView extends View {
  _parentEl = document.querySelector('.registration__form');
  _message = 'Profile was successfully uploaded';
  _errorMessage = 'Something occured. Please try again!';

  _window = document.querySelector('.registration-window');
  _overlay = document.querySelector('.registration-overlay');
  _btnOpen = document.querySelector('.nav__btn--registration');
  _btnClose = document.querySelector('.registration-btn--close-modal');

  constructor() {
    super();
    this._addHandlerShowWindow();
    this._addHandlerHideWindow();
  }

  refreshBtn() {
    this._btnOpen = document.querySelector('.nav__btn--registration');
    this._addHandlerShowWindow();
  }

  toogleWindow() {
    const hasMessage = this._parentEl.lastChild.classList?.contains('message');
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');

    const elements = Array.from(this._parentEl.elements);
    elements.forEach(el => (el.value = ''));

    if (hasMessage) {
      setTimeout(() => {
        this._clear();
        this._parentEl.innerHTML = this._generateMarkup();
      }, REFRESH);
    }
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toogleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    this._btnClose.addEventListener('click', this.toogleWindow.bind(this));
  }

  addHandlerUploadUser(handler) {
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      const dataArr = [...new FormData(this)];
      const data = Object.fromEntries(dataArr);
      handler(data);
    });
  }

  _generateMarkup() {
    return ` 
    <label>Username</label>
    <input type="text" required placeholder="User Name" name="username" />
    <label>Password</label>
    <input type="password" required placeholder="Password" name="password" />
    <label>Email Address</label>
    <input type="email" required placeholder="Email Address" name="email"/>
    <button class="btn">Register &rarr;</button>`;
  }
}

export default new AddUserView();
