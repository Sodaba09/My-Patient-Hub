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


const signin = document.querySelector("#signin");

signin.addEventListener("click", function () {

    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    if (email === "") {
        alert("Email is required");
        return;
    }

    if (password === "") {
        alert("Password is required");
        return;
    }

    window.location.href = "thank you.html";
});
```
