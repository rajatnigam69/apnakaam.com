const form = document.getElementById('signupForm');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Hide all error messages initially
  document.querySelectorAll('.error-msg').forEach(el => (el.style.display = 'none'));

  let valid = true;

  // Name validation
  const nameInput = form.name;
  if (nameInput.value.trim() === '') {
    document.getElementById('nameError').style.display = 'block';
    valid = false;
  }

  // Age validation
  const ageInput = form.age;
  const ageValue = Number(ageInput.value);
  if (!ageValue || ageValue < 1 || ageValue > 120) {
    document.getElementById('ageError').style.display = 'block';
    valid = false;
  }

  // Email validation
  const emailInput = form.email;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value)) {
    document.getElementById('emailError').style.display = 'block';
    valid = false;
  }

  // Password validation
  const passwordInput = form.password;
  if (passwordInput.value.length < 6) {
    document.getElementById('passwordError').style.display = 'block';
    valid = false;
  }

  if (valid) {
    // You can handle form data dynamically here
    alert('Registration successful!\nWelcome, ' + nameInput.value);
    form.reset();
  }
});
const loginBtn = document.getElementById('loginBtn');

loginBtn.addEventListener('click', () => {
  // Change 'login.html' to your actual login page filename
  window.location.href = 'login.html';
});
<div class="account-redirect">
  <p>Don't have an account?</p>
  <button id="signupBtn" type="button">Sign Up</button>
</div>
document.getElementById('loginBtn').addEventListener('click', function() {
  window.location.href = 'login.html'; // Replace 'index.html' with your actual home page URL
});
