const user1 = {
  username: 'oacm',
  password: '1234',
  email: 'imranmir@gmail.com',
  bookmarks: [],
};

const users = [user1];
export const initUsers = function () {
  localStorage.setItem('users', JSON.stringify(users));
  localStorage.setItem('userFlag', 'true');
};
