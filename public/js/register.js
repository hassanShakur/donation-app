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
      data.user.role === 'admin'
        ? location.assign('/dashboard')
        : location.assign('/home');
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    console.log(`An error occurred: ${err.message}`);
  }
};
