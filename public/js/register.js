import { showAlert } from './alert.js';

export const registerUser = async ({
  fname,
  lname,
  email,
  password,
}) => {
  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ fname, lname, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 'success') {
      showAlert('success', data.message);

      window.setTimeout(() => {
        location.assign('/home');
      }, 1500);
    } else {
      showAlert('error', data.message);
    }
  } catch (err) {
    showAlert('error', 'Something went wrong!');
    console.log(`An error occurred: ${err.message}`);
  }
};
