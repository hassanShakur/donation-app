import { showAlert } from './alert';

export const assignDonation = async (organizationId, donationId) => {
  try {
    const res = await fetch(
      `/api/donations/${donationId}/assignDonation`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ organizationId }),
      }
    );

    const data = await res.json();

    if (data.status === 'success') {
      showAlert('success', data.message);

      window.setTimeout(() => {
        location.reload(true);
      }, 1500);
    } else {
      showAlert('error', data.message);
    }
  } catch (err) {
    showAlert('error', 'Something went wrong!');
    console.log(`An error occurred: ${err.message}`);
  }
};
