// togle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = (e) => {
  navbarNav.classList.toggle('active');
  e.preventDefault();
};

// saat klik diluar elemens
const hm = document.querySelector('#hamburger-menu');
const sb = document.querySelector('#search-btn');
const sc = document.querySelector('#shopping-cart-btn');

document.addEventListener('click', function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove('active');
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove('active');
  }
});

// togle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

// ketika icon search di klik
document.querySelector('#search-btn').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};

// togle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');

// ketika shopping btn cart di klik
document.querySelector('#shopping-cart-btn').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
};

// modal box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailBtn = document.querySelectorAll('.item-detail-btn');

itemDetailBtn.forEach((btn) => {
  btn.onclick = (e) => {
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});

// klik tombol close modal

document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik diluar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};
