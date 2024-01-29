// Toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hamburger menu diklik
document.querySelector("#hamburger-menu").onclick = function () {
  navbarNav.classList.toggle("active");
};

// Toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-button").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

// Toggle kelas active untuk shopping cart
const shoppingCart = document.querySelector(".shopping-cart");
document.querySelector("#shopping-cart-button").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// klik diluar sidebar untuk keluar dr sidebar
const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-button");
const sc = document.querySelector("#shopping-cart-button");

document.addEventListener("click", (e) => {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!sc.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
});

// Modal Box
const itemDetailModal01 = document.querySelector("#item-detail-modal01");
const itemDetailButton01 = document.querySelector(".item-detail-button01");
const itemDetailModal02 = document.querySelector("#item-detail-modal02");
const itemDetailButton02 = document.querySelector(".item-detail-button02");
const itemDetailModal03 = document.querySelector("#item-detail-modal03");
const itemDetailButton03 = document.querySelector(".item-detail-button03");

itemDetailButton01.onclick = (e) => {
  itemDetailModal01.style.display = "flex";
  e.preventDefault();
};
itemDetailButton02.onclick = (e) => {
  itemDetailModal02.style.display = "flex";
  e.preventDefault();
};
itemDetailButton03.onclick = (e) => {
  itemDetailModal03.style.display = "flex";
  e.preventDefault();
};

// klik tombol close
document.querySelector(".modal .close-icon-01").onclick = (e) => {
  itemDetailModal01.style.display = "none";
  e.preventDefault();
};
document.querySelector(".modal .close-icon-02").onclick = (e) => {
  itemDetailModal02.style.display = "none";
  e.preventDefault();
};

// klik diluar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal01) {
    itemDetailModal01.style.display = "none";
  }
  if (e.target === itemDetailModal02) {
    itemDetailModal02.style.display = "none";
  }
};

// slider
let slider = document.querySelector(".slider .list");
let items = document.querySelectorAll(".slider .list .item");
let next = document.getElementById("next");
let prev = document.getElementById("prev");
let dots = document.querySelectorAll(".slider .dots li");

let lengthItems = items.length - 1;
let active = 0;
next.onclick = function () {
  active = active + 1 <= lengthItems ? active + 1 : 0;
  reloadSlider();
};
prev.onclick = function () {
  active = active - 1 >= 0 ? active - 1 : lengthItems;
  reloadSlider();
};
let refreshInterval = setInterval(() => {
  next.click();
}, 3000);
function reloadSlider() {
  slider.style.left = -items[active].offsetLeft + "px";
  //
  let last_active_dot = document.querySelector(".slider .dots li.active");
  last_active_dot.classList.remove("active");
  dots[active].classList.add("active");

  clearInterval(refreshInterval);
  refreshInterval = setInterval(() => {
    next.click();
  }, 3000);
}

dots.forEach((li, key) => {
  li.addEventListener("click", () => {
    active = key;
    reloadSlider();
  });
});
window.onresize = function (event) {
  reloadSlider();
};
