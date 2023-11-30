import { showAlert } from './alert.js';

export const createOrganization = async (
  name,
  image,
  description
) => {
  console.log(name, image, description);
  const res = await fetch('/api/organizations', {
    method: 'POST',
    body: JSON.stringify({ name, image, description }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await res.json();

  if (data.status === 'success') {
    showAlert('success', data.message);

    window.setTimeout(() => {
      location.assign('/organizations');
    }, 1500);
  } else {
    showAlert('error', data.message);
  }
};
