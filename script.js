const nameBtn = document.getElementById('generate-name-btn');
const addressBtn = document.getElementById('generate-address-btn');
const phoneBtn = document.getElementById('generate-phone-btn');
const emailBtn = document.getElementById('generate-email-btn');
const bankAccountBtn = document.getElementById('generate-bank-account-btn');
const fullProfileBtn = document.getElementById('generate-full-profile-btn');

const nameOutput = document.getElementById('name-output');
const addressOutput = document.getElementById('address-output');
const phoneOutput = document.getElementById('phone-output');
const emailOutput = document.getElementById('email-output');
const bankAccountOutput = document.getElementById('bank-account-output');
const fullProfileOutput = document.getElementById('full-profile-output');

nameBtn.addEventListener('click', () => {
  fetch('/api/name')
   .then(response => response.json())
   .then(data => {
      nameOutput.innerText = JSON.stringify(data, null, 2);
    });
});

addressBtn.addEventListener('click', () => {
  fetch('/api/address')
   .then(response => response.json())
   .then(data => {
      addressOutput.innerText = JSON.stringify(data, null, 2);
    });
});

phoneBtn.addEventListener('click', () => {
  fetch('/api/phone')
   .then(response => response.json())
   .then(data => {
      phoneOutput.innerText = JSON.stringify(data, null, 2);
    });
});

emailBtn.addEventListener('click', () => {
  fetch('/api/email')
   .then(response => response.json())
   .then(data => {
      emailOutput.innerText = JSON.stringify(data, null, 2);
    });
});

bankAccountBtn.addEventListener('click', () => {
  fetch('/api/bank-account')
  .then(response => response.json())
  .then(data => {
      bankAccountOutput.innerText = JSON.stringify(data, null, 2);
    });
});

fullProfileBtn.addEventListener('click', () => {
  fetch('/api/full-profile')
  .then(response => response.json())
  .then(data => {
      fullProfileOutput.innerText = JSON.stringify(data, null, 2);
    });
});