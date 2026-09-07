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