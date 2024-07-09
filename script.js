// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// Ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Show the notification
  var notification = document.getElementById('notification');
  notification.classList.add('show');

  // Hide the notification after 3 seconds
  setTimeout(function() {
    notification.classList.remove('show');
  }, 10000);

  // Reset the form fields
  this.reset();
});

document.addEventListener('DOMContentLoaded', function() {
  const menuCards = document.querySelectorAll('.menu-card');
  const overlay = document.querySelector('.overlay');
  const closeBtn = document.querySelector('.close-btn');

  // Tambahkan event listener untuk setiap menu card
  menuCards.forEach(menuCard => {
    menuCard.addEventListener('click', function() {
      const menuTitle = menuCard.querySelector('.menu-card-title').innerText;
      const menuPrice = menuCard.querySelector('.menu-card-price').innerText;

      const menuDescription = `
        <div class="menu-description fade-in">
          <span class="close-btn">&times;</span>
          <img src="${menuCard.querySelector('.menu-card-img').src}" alt="${menuTitle}" />
          <h2>${menuTitle}</h2>
          <p>${menuPrice}</p>
          <p>
            Deskripsi menu di sini. Anda bisa menambahkan informasi tambahan
            mengenai menu yang dipilih.
          </p>
        </div>
      `;

      // Tampilkan overlay dan deskripsi menu
      overlay.innerHTML = menuDescription;
      overlay.style.display = 'block';

      // Tambahkan event listener untuk tombol close
      closeBtn.addEventListener('click', function() {
        overlay.style.display = 'none';
      });
    });
  });
});
