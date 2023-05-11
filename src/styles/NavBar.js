const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.createElement('div');
dropdownMenu.classList.add('dropdown-menu');
dropdownMenu.innerHTML = `
  <a href="mailto:contact@example.com">Email</a>
  <a href="tel:+1234567890">Phone</a>
  <a href="/form/">Contact Form</a>
`;
dropdown.appendChild(dropdownMenu);
