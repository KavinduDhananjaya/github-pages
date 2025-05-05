// Show message when button is clicked
document.getElementById('helloBtn').addEventListener('click', function () {
  document.getElementById('message').textContent = 'Hello from GitHub Pages!';
});

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const messageInput = document.getElementById('messageInput').value.trim();
  const formResponse = document.getElementById('formResponse');

  if (name && email && messageInput) {
    formResponse.style.color = 'green';
    formResponse.textContent = `Thank you, ${name}! Your message has been received.`;
    this.reset();
  } else {
    formResponse.style.color = 'red';
    formResponse.textContent = 'Please fill out all fields.';
  }
});
