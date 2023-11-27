const loginForm = document.querySelector('#login-form');
const registerForm = document.querySelector('#register-form');
const donateForm = document.querySelector('#donate-form');
const createOrganizationForm = document.querySelector(
  '#organization-form'
);
const assignDonationForm = document.querySelector(
  '#assign-donation-form'
);

const logoutBtn = document.querySelector('#logout-btn');

import { loginUser, logoutUser } from './login.js';
import { registerUser } from './register.js';
import { createDonation } from './newDonation.js';
import { createOrganization } from './newOrganization.js';
import { assignDonation } from './assignDonation.js';

loginForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = loginForm.querySelector('#email').value;
  const password = loginForm.querySelector('#password').value;
  loginUser(email, password);
});

registerForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const fname = registerForm.querySelector('#fname').value;
  const lname = registerForm.querySelector('#lname').value;
  const email = registerForm.querySelector('#email').value;
  const password = registerForm.querySelector('#password').value;

  registerUser({ fname, lname, email, password });
});

donateForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = donateForm.querySelector('#donation-name').value;
  const image = donateForm.querySelector('#donation-image').value;
  const description = donateForm.querySelector(
    '#donation-description'
  ).value;

  createDonation(name, image, description);
});

createOrganizationForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = createOrganizationForm.querySelector('#name').value;
  const image = createOrganizationForm.querySelector('#image').value;
  const description =
    createOrganizationForm.querySelector('#description').value;

  createOrganization(name, image, description);
});

assignDonationForm?.addEventListener('submit', (e) => {
  e.preventDefault();

  const organizationId =
    assignDonationForm.querySelector('#organization').value;
    const donationId = assignDonationForm.querySelector('#donation-id').value;

  assignDonation(organizationId, donationId);
});

logoutBtn?.addEventListener('click', logoutUser);


// Donation details page
// extends layout

// block content
//     div#donation
//         div#donation-image
//             img(src=donation.image, alt=donation.name)
//         div#donation-info
//             h2= donation.name
//             p= donation.description

//             - const date = new Date(donation.createdAt)
//             - const formattedDate = date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
//             p= `Created on ${formattedDate}`
//             p= `Donated by ${donation.user.fname} ${donation.user.lname}`

//             if !donation.isAssigned
//                 form#assign-donation-form
//                         div.form-group
//                             //- hidden input to store the donation id
                               // input#donation-id(type='hidden', name='donationId', value=donation._id)
//                             select#organization.form-control(name='organization')
//                                 option(value='') Select an organization
//                                 each organization in organizations
//                                     option(value=organization._id)= organization.name
//                         button#assign-donation-submit-btn.btn.btn-primary(type='submit') Assign Donation
//             else
//                 p= `This donation is assigned to ${donation.organization.name}`