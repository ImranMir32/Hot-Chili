const hash = localStorage.getItem('loginHash');

const container_ = document.querySelector('.container');
async function fetchHeader() {
  const data = await fetch('header.html');
  const text = await data.text();
  container_.innerHTML += text;
}
fetchHeader();

if (hash === null) {
  async function fetchSignInSignUp() {
    const navItem_ = document.querySelector('.nav__list');
    const data = await fetch('SignIn_SignUp.html');
    const text = await data.text();
    navItem_.innerHTML += text;
  }
  setTimeout(fetchSignInSignUp, 300);
}

async function fetchReg() {
  const data = await fetch('registration.html');
  const text = await data.text();
  container_.innerHTML += text;
}
fetchReg();

async function fetchlog() {
  const data = await fetch('login.html');
  const text = await data.text();
  container_.innerHTML += text;
}
fetchlog();

const body_ = document.querySelector('body');
async function fetchRecipe() {
  const data = await fetch('add-recipe.html');
  const text = await data.text();
  body_.innerHTML += text;
}
fetchRecipe();

async function fetchConfirm() {
  const data = await fetch('confirm-window.html');
  const text = await data.text();
  body_.innerHTML += text;
}
fetchConfirm();

async function fetchDelete() {
  const data = await fetch('delete-window.html');
  const text = await data.text();
  body_.innerHTML += text;
}
fetchDelete();
