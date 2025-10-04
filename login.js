<form id="loginForm">
  <label for="email">Email:</label>
  <input type="email" id="email" required autocomplete="email" />

  <label for="password">Password:
    <button type="button" id="togglePassword" class="toggle-password" aria-label="Show password">Show</button>
  </label>
  <input type="password" id="password" required autocomplete="current-password" />

  <label><input type="checkbox" id="rememberMe" /> Remember me</label>

  <button type="submit" id="loginBtn">Login</button>

  <p id="message" class="error hidden"></p>
  <p id="successMsg" class="success hidden"></p>
</form>
if(email === MOCK_EMAIL && password === MOCK_PASSWORD) {
  successMsg.textContent = 'Login successful! Redirecting...';
  successMsg.classList.remove('hidden');
  message.classList.add('hidden');
  attempts = 0;

  if(rememberMeCheckbox.checked) {
    localStorage.setItem('rememberedEmail', email);
  } else {
    localStorage.removeItem('rememberedEmail');
  }

  // Fade out form before redirecting
  const formElement = document.getElementById('loginForm');
  formElement.style.transition = 'opacity 1s ease';
  formElement.style.opacity = 0;

  setTimeout(() => {
    window.location.href = 'index.html';  // Redirect to home page
  }, 1000);  // Wait for 1 second to complete fade out
}
document.getElementById('registerBtn').addEventListener('click', function() {
  window.location.href = 'form.html'; // Redirects to form.html page
});
