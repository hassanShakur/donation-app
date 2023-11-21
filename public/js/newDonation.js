import { showAlert } from './alert';

export const createDonation = async (name, image, description) => {
  try {
    const res = await fetch('/api/donations', {
      method: 'POST',
      body: JSON.stringify({ name, image, description }),
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await res.json();
    console.log(data);

    if (data.status === 'success') {
      showAlert('success', data.message);

      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    } else {
      showAlert('error', data.message);
    }
  } catch (err) {
    showAlert('error', 'Something went wrong!');
    console.log(`An error occurred: ${err.message}`);
  }
};
