import View from './view.js';
import previewView from './previewView.js';

class BookmarksView extends View {
  _parentEl = document.querySelector('.bookmarks__list');
  _btnOpen = document.querySelector('.nav__btn--bookmarks');
  _errorMessage = 'No bookmarks yet. Find a nice recipe and bookmark it ;)';
  _message = '';

  addHandlerRender(handler) {
    this._parentEl = document.querySelector('.bookmarks__list');
    window.addEventListener('load', handler);
  }

  showButton() {
    this._btnOpen.classList.remove('hidden');
  }

  hideButton() {
    this._btnOpen.classList.add('hidden');
  }

  _generateMarkup() {
    return this._data
      .map(bookmark => previewView.render(bookmark, false))
      .join('');
  }
}

export default new BookmarksView();
