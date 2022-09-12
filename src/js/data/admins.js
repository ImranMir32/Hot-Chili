const admin1 = {
  username: 'Admin',
  password: 'imran',
};

const admins = [admin1];
export const initAdmins = function () {
  localStorage.setItem('admins', JSON.stringify(admins));
  localStorage.setItem('adminFlag', 'true');
};
