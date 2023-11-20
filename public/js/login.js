import axios from 'axios';

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

    res.data.user.role === 'admin'
      ? location.assign('/dashboard')
      : location.assign('/home');
  } catch (err) {
    console.log(`An error occurred: ${err.message}`);
  }
};
