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

const map = L.map("map").setView([34.5553, 69.2075], 13);

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors"
}).addTo(map);

const marker = L.marker([34.5553, 69.2075]).addTo(map);

marker
  .bindPopup("<b>My-Patient-Hub Clinic</b><br>Kabul, Afghanistan")
  .openPopup();

  function goToFindClinic() {
    window.location.href = "find-clinic.html";
}