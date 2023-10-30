const registerForm = document.querySelector('#register-form');

const registerUser = async (username, password) => {
  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 'success') {
      location.assign('/dashboard');
    } else {
      throw new Error(data.message);
    }
  } catch (err) {
    console.log(`An error occurred: ${err.message}`);
  }
};

registerForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = registerForm.querySelector('#username').value;
  const password = registerForm.querySelector('#password').value;
  console.log({ username, password });

  registerUser(username, password);
});
