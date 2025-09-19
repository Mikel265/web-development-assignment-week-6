//  Part 1: Event Handling - Light/Dark Mode Toggle
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

//  Part 2: Interactive Element - Counter
let count = 0;
const counterBtn = document.getElementById('counterBtn');
const counterValue = document.getElementById('counterValue');

counterBtn.addEventListener('click', () => {
  count++;
  counterValue.textContent = count;
});

//  Part 3: Form Validation
const form = document.getElementById('signupForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // stop default form submission

  let name = document.getElementById('name').value.trim();
  let email = document.getElementById('email').value.trim();
  let password = document.getElementById('password').value.trim();
  let errors = [];

  // Validate Name
  if (name === "") {
    errors.push("Name cannot be empty");
  }

  // Validate Email with regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    errors.push("Please enter a valid email address");
  }

  // Validate Password length
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters long");
  }

  if (errors.length > 0) {
    formMessage.style.color = "red";
    formMessage.textContent = errors.join(", ");
  } else {
    formMessage.style.color = "green";
    formMessage.textContent = "✅ Form submitted successfully!";
    form.reset();
  }
});
