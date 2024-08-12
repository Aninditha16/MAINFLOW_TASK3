
document.getElementById('menu-toggle').addEventListener('click', function() {
  const navList = document.getElementById('nav-list');
  if (navList.style.display === 'flex') {
      navList.style.display = 'none';
  } else {
      navList.style.display = 'flex';
  }
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); 

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('form-message');

  
  if (name === '' || email === '' || message === '') {
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.style.color = 'red';
      return;
  }

  if (!validateEmail(email)) {
      formMessage.textContent = 'Please enter a valid email address.';
      formMessage.style.color = 'red';
      return;
  }

  
  formMessage.textContent = 'Thank you for your message. We will get back to you soon!';
  formMessage.style.color = 'green';

  
  this.reset();
});


function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}
