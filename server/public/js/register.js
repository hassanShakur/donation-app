const registerForm = document.querySelector('#register-form');

const registerUser = async ({fname, lname, email, password}) => {
  try {
    const res = await fetch('/api/auth/register', {
      method: 'POST',
      body: JSON.stringify({ fname, lname, email, password }),
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

  const fname = registerForm.querySelector('#fname').value;
  const lname = registerForm.querySelector('#lname').value;
  const email = registerForm.querySelector('#email').value;
  const password = registerForm.querySelector('#password').value;

  registerUser({fname, lname, email, password});
});
