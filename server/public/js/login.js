const loginForm = document.querySelector('#login-form');

const loginUser = async (username, password) => {
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    console.log(data);

    if (data.status !== 'success') throw new Error(data.message);
    
    data.user.role === 'admin'
      ? location.assign('/dashboard')
      : location.assign('/profile');

  } catch (err) {
    console.log(`An error occurred: ${err.message}`);
  }
};

loginForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = loginForm.querySelector('#username').value;
  const password = loginForm.querySelector('#password').value;
  loginUser(username, password);
});
