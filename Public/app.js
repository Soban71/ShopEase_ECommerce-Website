const username = localStorage.getItem("username");

function logout() {
  localStorage.removeItem("username");
  location.reload(); 
}

document.addEventListener("DOMContentLoaded", () => {
  const welcomeUser = document.getElementById("welcomeUser");

  if (username) {

    welcomeUser.innerHTML = `
      👤 Welcome, <strong>${username}</strong> |
      <a href="#" onclick="logout()">Logout</a>
    `;
  } else {

    welcomeUser.innerHTML = `
      <a href="./Login.html">Login</a> | <a href="./Signup.html">Sign Up</a>
    `;
  }
});



// Reveal cards when they enter viewport
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.service-card');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});


document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  const mapContainer = document.querySelector(".map-container");
  if (mapContainer) {
    observer.observe(mapContainer);
  }
});




document.querySelectorAll(".product-card button").forEach((btn) => {
  btn.addEventListener("click", () => {
    Swal.fire({
      title: 'Coming Soon!',
      text: 'Product details page will be available shortly.',
      icon: 'info',
      confirmButtonText: 'Okay',
      confirmButtonColor: '#2dbb5f',
      background: '#fefefe',
      color: '#333',
    });
  });
});


document.getElementById('apply-filter').addEventListener('click', () => {
  const minPrice = parseFloat(document.getElementById('min-price').value) || 0;
  const maxPrice = parseFloat(document.getElementById('max-price').value) || Infinity;

  const products = document.querySelectorAll('.product');

  products.forEach(product => {
    const price = parseFloat(product.getAttribute('data-price'));
    if (price >= minPrice && price <= maxPrice) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
});
