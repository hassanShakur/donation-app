const loginForm = document.querySelector('#login-form');

const loginUser = async (email, password) => {
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    console.log(data);

    if (data.status !== 'success') throw new Error(data.message);

    data.user.role === 'admin'
    ? location.assign('/dashboard')
    : location.assign('/home');
  } catch (err) {
    console.log(`An error occurred: ${err.message}`);
  }
};

loginForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm.querySelector('#email').value;
  const password = loginForm.querySelector('#password').value;
  loginUser(email, password);
});
