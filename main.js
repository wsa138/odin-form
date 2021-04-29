const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');

// Checks that user inputs an email address and gives custom error if not.
email.addEventListener('input', (e) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity('Please enter an email address.');
  } else {
    email.setCustomValidity('');
  }
});

// Checks that the user enters input with letters only.
country.addEventListener('input', (e) => {
  if (country.validity.patternMismatch) {
    country.setCustomValidity('Please enter country names only.');
  } else {
    country.setCustomValidity('');
  }
});

// Checks that the user enters numbers only and a length appropriate for zip codes.
zip.addEventListener('input', (e) => {
  if (zip.validity.patternMismatch) {
    zip.setCustomValidity('Please enter a valid zip code.');
  } else {
    zip.setCustomValidity('');
  }
});

// Checks input for at least one upper and lower case letter, number, and one symbol
password.addEventListener('input', (e) => {
  if (password.validity.patternMismatch) {
    password.setCustomValidity(
      'Please enter at least one letter(uppercase and lowercase), one number and one symbol'
    );
  } else {
    password.setCustomValidity('');
  }
});

// Checks that both input passwords match.
confirmPassword.addEventListener('input', (e) => {
  let firstPass = password.value;
  if (firstPass === confirmPassword.value) {
    console.log(firstPass.value, confirmPassword.value);
    confirmPassword.setCustomValidity('');
  } else {
    confirmPassword.setCustomValidity('Passwords do not match.');
  }
});
