import View from './view';

class DeleteItemConfirmationView extends View {
  _parentEl = document.querySelector('.confirm-delete__form');
  _message = 'Logged In Successfully';

  _window = document.querySelector('.confirm-delete-window');
  _overlay = document.querySelector('.confirm-delete-overlay');
  _btnOpen = null;
  _btnCancel = document.querySelector('.btn--confirm-delete-cancel');
  _btnConfirm = document.querySelector('.btn--confirm-delete');

  constructor() {
    super();
    this._addHandlerHideWindow();
  }

  init() {
    this._btnOpen = document.querySelectorAll('.delete-item');

    for (let i = 0; i < this._btnOpen.length; i++) {
      this._btnOpen[i].addEventListener('click', this.toogleWindow.bind(this));
    }
  }

  toogleWindow() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');
  }

  hideWindow() {
    if (!this._window.classList.contains('hidden')) {
      this._window.classList.add('hidden');
      this._overlay.classList.add('hidden');
    }
  }

  _addHandlerHideWindow() {
    const bindedToggle = this.toogleWindow.bind(this);
    this._btnCancel.addEventListener('click', function(e) {
      e.preventDefault();
      bindedToggle();
    });
  }

  addHandlerConfirm(handler) {
    this._btnConfirm.addEventListener('click', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new DeleteItemConfirmationView();
