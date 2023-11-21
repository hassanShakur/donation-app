import { showAlert } from './alert.js';

export const loginUser = async (email, password) => {
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 'success') {
      showAlert('success', data.message);

      window.setTimeout(() => {
        data.user.role === 'admin'
          ? location.assign('/dashboard')
          : location.assign('/');
      }, 1500);
    } else {
      showAlert('error', data.message);
    }
  } catch (err) {
    showAlert('error', 'Something went wrong!');
    console.log(`An error occurred: ${err.message}`);
  }
};

export const logoutUser = async () => {
  try {
    const res = await fetch('/api/auth/logout');

    const data = await res.json();
    console.log(data);

    if (data.status === 'success') location.reload(true);
  } catch (err) {
    showAlert('error', 'Something went wrong!');
    console.log(`An error occurred: ${err.message}`);
  }
};
