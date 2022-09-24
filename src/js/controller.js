import * as model from './model.js';
import * as helpers from './helpers.js';
import addRecipeView from './views/addRecipeView.js';
import addUserView from './views/addUserView.js';
import loginView from './views/loginView.js';
import bookmarksView from './views/bookmarksView.js';
import searchView from './views/searchView.js';
import resultsView from './views/resultsView.js';
import paginationView from './views/paginationView.js';
import recipeView from '../js/views/recipeView.js';
import confirmationView from '../js/views/confirmationView.js';
import deleteItemConfimationView from './views/deleteItemConfimationView.js';

import { MSG_LOAD_TIME, REFRESH } from './config.js';

const controlSearchResults = async function () {
  try {
    resultsView.renderSpinner();

    const query = searchView.getQuery();
    if (query === '') {
      paginationView.refresh();
      throw Error('Invalid Token');
    }
    if (!query) return;

    await model.loadSearchResults(query);

    setTimeout(function () {
      resultsView.render(model.getSearchResultsPage());
      paginationView.render(model.state.search);
      if (model.state.isAdmin) {
        deleteItemConfimationView.init();
      }
    }, REFRESH);
  } catch (err) {
    resultsView.renderError(err.message);
    console.log(err);
  }
};

const controlRecipes = async function () {
  try {
    model.persistLogin();
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    resultsView.update(model.getSearchResultsPage());

    if (model.state.isUser) bookmarksView.update(model.state.bookmarks);

    await model.loadRecipe(id);
    const { recipe } = model.state;

    recipeView.render(model.state.recipe);
    if (model.state.isAdmin) {
      confirmationView.addHandlerConfirm(controlChangeCookingTime);
      confirmationView.init();
    }
    if (!model.state.isUser) helpers.hideBookmark();
  } catch (error) {
    recipeView.renderError();
    console.error(err);
  }
};

const controlAddRecipe = async function (newRecipe) {
  try {
    addRecipeView.renderSpinner();

    await model.uploadRecipe(newRecipe);

    setTimeout(function () {
      addRecipeView.renderMessage();
      model.state.recipe.isAdmin = true;
      recipeView.render(model.state.recipe);
      confirmationView.addHandlerConfirm(controlChangeCookingTime);
      confirmationView.init();
      helpers.hideBookmark();
      window.history.pushState(null, '', `#${model.state.recipe.id}`);
    }, MSG_LOAD_TIME * 1200);
  } catch (err) {
    console.error(err);
    addRecipeView.renderError(err.message);
  }
};

const controlAddUser = async function (newUser) {
  try {
    model.uploadedUser(newUser);
    addUserView.renderSpinner();
    setTimeout(
      addUserView.renderMessage.bind(addUserView),
      MSG_LOAD_TIME * 1000
    );
  } catch (err) {
    addUserView.renderError(err.message);
    console.error(err);
  }
};

const controlUserLogin = async function (userData) {
  try {
    model.isAuthenticated(userData);
    loginView.renderSpinner();
    if (model.state.isAdmin) {
      helpers.hideButtonsAndModal();
      helpers.addSessionUserName();
      helpers.addCustomRecipeBtn();
      helpers.addLogoutBtn();
      helpers.addlogoutEvListner(controlLogoutBtn);
      addRecipeView.addHandlerUpload(controlAddRecipe);
      addRecipeView.init();
      model.setLoginHash(userData);
      recipeView.refresh();
      resultsView.refresh();
      paginationView.refresh();
    } else if (model.state.isUser) {
      helpers.hideButtonsAndModal();
      helpers.addSessionUserName();
      helpers.addBookmarksBtn();
      helpers.addLogoutBtn();
      helpers.addlogoutEvListner(controlLogoutBtn);
      bookmarksView.addHandlerRender(controlBookmarks);
      model.setLoginHash(userData);
      model.setBookmarks();
      bookmarksView.render(model.state.bookmarks);
      recipeView.refresh();
      resultsView.refresh();
      paginationView.refresh();
    } else {
      setTimeout(() => {
        loginView.renderError();
      }, MSG_LOAD_TIME * 600);
    }
  } catch (err) {
    console.error(err);
  }
};

const controlPersistLogin = function () {
  model.persistLogin();

  if (model.state.isAdmin) {
    helpers.clearNav();
    helpers.addSessionUserName();
    helpers.addCustomRecipeBtn();
    helpers.addLogoutBtn();
    helpers.addlogoutEvListner(controlLogoutBtn);
    addRecipeView.addHandlerUpload(controlAddRecipe);
    addRecipeView.init();
  } else if (model.state.isUser) {
    helpers.clearNav();
    helpers.addSessionUserName();
    helpers.addBookmarksBtn();
    helpers.addLogoutBtn();
    helpers.addlogoutEvListner(controlLogoutBtn);
    bookmarksView.addHandlerRender(controlBookmarks);
    bookmarksView.render(model.state.bookmarks);
  }
};

const controlBookmarks = function () {
  bookmarksView.render(model.state.bookmarks);
};

const controlPagination = function (goToPage) {
  resultsView.render(model.getSearchResultsPage(goToPage));
  paginationView.render(model.state.search);
  deleteItemConfimationView.init();
};

const controlLogoutBtn = function () {
  try {
    helpers.clearHash();
    window.location.href = 'index.html';
    model.refreshSession();
    resultsView.refresh();
    paginationView.refresh();
    recipeView.refresh();
  } catch (err) {
    console.error(err);
  }
};

const controlChangeCookingTime = function (data) {
  confirmationView.toogleWindow();
  model.setCookingTime(data);
  model.state.recipe.isAdmin = true;
  recipeView.render(model.state.recipe);
  confirmationView.addHandlerConfirm(controlChangeCookingTime);
  confirmationView.init();
  helpers.hideBookmark();
};

const controlDeleteRecipe = function () {
  try {
    deleteItemConfimationView.toogleWindow();
    model.deleteCurrentRecipe();
    recipeView.refresh();
    resultsView.update(model.getSearchResultsPage());
  } catch (err) {
    paginationView.refresh();
    resultsView.renderError(err.message);
  }
};

const controlServings = function (newServings) {
  model.updateServings(newServings);

  recipeView.update(model.state.recipe);
  if (!model.state.isUser) helpers.hideBookmark();
};

const controlAddBookmark = function () {
  if (!model.state.recipe.bookmarked) model.addBookmark(model.state.recipe);
  else model.deleteBookmark(model.state.recipe.id);

  recipeView.update(model.state.recipe);

  bookmarksView.render(model.state.bookmarks);
};

const init = function () {
  setTimeout(function () {
    const hash = localStorage.getItem('loginHash');
    if (hash === null) {
      loginView.call();
      addUserView.call();
      loginView.addHandlerLoginUser(controlUserLogin);
      addUserView.addHandlerUploadUser(controlAddUser);
    }
    searchView.call();
    resultsView.call();
    recipeView.call();
    paginationView.call();
    deleteItemConfimationView.call();
    confirmationView.call();
    bookmarksView.call();
    addRecipeView.call();
    searchView.addHandlerSearch(controlSearchResults);
    recipeView.addHandlerRender(controlRecipes);
    recipeView.addHandlerUpdateServings(controlServings);
    recipeView.addHandlerAddBookmark(controlAddBookmark);
    paginationView.addHandlerClick(controlPagination);
    deleteItemConfimationView.addHandlerConfirm(controlDeleteRecipe);
    model.setLocalStorage();
    controlPersistLogin();
  }, 700);
};

init();
