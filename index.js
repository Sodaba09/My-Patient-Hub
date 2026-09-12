const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach((item) => {
  item.addEventListener("click", () => {

    // رنگ قبلی را حذف می‌کند
    menuItems.forEach((item) => {
      item.classList.remove("active");
    });

    // فقط روی چیزی که کلیک کردی رنگ می‌گذارد
    item.classList.add("active");
  });
});

const hamburger = document.getElementById("hamburger");
const sidebar = document.querySelector(".sidebar");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", function () {
  sidebar.classList.toggle("collapsed");
  navbar.classList.toggle("collapsed-navbar");
});

const signin = document.getElementById("signin");

signin.addEventListener("mouseover", function () {
    signin.click();
});

signin.addEventListener("click", function () {
    alert("SIGN IN clicked!");
});


