const loginForm = document.querySelector('#login-form');
const registerForm = document.querySelector('#register-form');
const logoutBtn = document.querySelector('#logout-btn');

import { loginUser, logoutUser } from './login.js';
import { registerUser } from './register.js';

loginForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm.querySelector('#email').value;
  const password = loginForm.querySelector('#password').value;
  loginUser(email, password);
});

registerForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const fname = registerForm.querySelector('#fname').value;
  const lname = registerForm.querySelector('#lname').value;
  const email = registerForm.querySelector('#email').value;
  const password = registerForm.querySelector('#password').value;

  registerUser({ fname, lname, email, password });
});

logoutBtn?.addEventListener('click', logoutUser);
