import { showAlert } from './alert.js';

export const loginUser = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '/api/auth/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status !== 'success')
      throw new Error(res.data.message);

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
