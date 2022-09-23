import View from './view';

class ConfirmationView extends View {
  _message = 'Logged In Successfully';

  call() {
    this._parentEl = document.querySelector('.confirmation__form');
    this._window = document.querySelector('.confirmation-window');
    this._overlay = document.querySelector('.confirmation-overlay');
    this._btnOpen = null;
    this._btnCancel = document.querySelector('.btn--cancel');
    this._btnConfirm = document.querySelector('.btn--confirm');
    this._addHandlerHideWindow();
  }

  init() {
    this._btnOpen = document.querySelector('.btn--change-time');
    this._addHandlerShowWindow();
  }

  toogleWindow() {
    this._window.classList.toggle('hidden');
    this._overlay.classList.toggle('hidden');

    const elements = Array.from(this._parentEl.elements);
    elements.forEach(el => (el.value = ''));
  }

  _addHandlerShowWindow() {
    this._btnOpen.addEventListener('click', this.toogleWindow.bind(this));
  }

  _addHandlerHideWindow() {
    const bindedToggle = this.toogleWindow.bind(this);
    this._btnCancel.addEventListener('click', function (e) {
      e.preventDefault();
      bindedToggle();
    });
  }

  addHandlerConfirm(handler) {
    if (this.calledAddHandlerConfirm === undefined) {
      this._btnConfirm.addEventListener('click', function (e) {
        e.preventDefault();
        const data = document.querySelector('.confirmation__input').value;
        if (data === '') {
          window.alert('Input field is empty');
          return;
        }
        handler(data);
      });
      this.calledAddHandlerConfirm = true;
    }
  }
}

export default new ConfirmationView();
