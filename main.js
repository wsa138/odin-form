const email = document.getElementById('email');
const country = document.getElementById('country');
const zip = document.getElementById('zip');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const error = document.getElementById('error');

// Checks that user inputs an email address and gives custom error if not.
email.addEventListener('input', (e) => {
  if (email.validity.valid) {
    error.textContent = '';
  } else {
    errorMessage();
  }
});

// Checks that the user enters input with letters only.
country.addEventListener('input', (e) => {
  if (country.validity.valid) {
    error.textContent = '';
  } else {
    errorMessage();
  }
});

// Checks that the user enters numbers only and a length appropriate for zip codes.
zip.addEventListener('input', (e) => {
  if (zip.validity.valid) {
    error.textContent = '';
  } else {
    errorMessage();
  }
});

// Checks input for at least one upper and lower case letter, number, and one symbol.
// Checks that password matches input in confirm password.
password.addEventListener('input', (e) => {
  if (!passwordMatch()) {
    errorMessage();
  } else if (password.validity.valid) {
    error.textContent = '';
  } else {
    errorMessage();
  }
});

// Checks taht confirm password matches password.
confirmPassword.addEventListener('input', (e) => {
  if (passwordMatch()) {
    error.textContent = '';
  } else {
    errorMessage();
  }
});

// Checks that both entered passwords match.
function passwordMatch() {
  if (password.value === confirmPassword.value) {
    return true;
  } else {
    return false;
  }
}

// Displays correct validity message
function errorMessage() {
  if (email.validity.typeMismatch) {
    error.textContent = 'Please enter an email address.';
  } else if (country.validity.patternMismatch) {
    error.textContent = 'Please enter country names only.';
  } else if (zip.validity.patternMismatch) {
    error.textContent = 'Please enter a valid zip code.';
  } else if (password.validity.patternMismatch) {
    error.textContent =
      'Please enter at least one letter(uppercase and lowercase), one number and one symbol';
  } else if (!passwordMatch()) {
    error.textContent = 'Passwords do not match.';
  }
}
