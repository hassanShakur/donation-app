const loginForm = document.querySelector('#login-form');
const registerForm = document.querySelector('#register-form');
const donateForm = document.querySelector('#donate-form');

const logoutBtn = document.querySelector('#logout-btn');

import { loginUser, logoutUser } from './login.js';
import { registerUser } from './register.js';
import { createDonation } from './newDonation.js';

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

donateForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = donateForm.querySelector('#donation-name').value;
  const image = donateForm.querySelector('#donation-image').value;
  const description = donateForm.querySelector('#donation-description').value;

  createDonation(name, image, description);
});

logoutBtn?.addEventListener('click', logoutUser);
