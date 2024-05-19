const menuIcon = document.getElementById("menu-icon");
const menuList = document.getElementById("menu-list");

menuIcon.addEventListener("click", () => {
  menuList.classList.toggle("hidden");
});

window.onbeforeunload = () => {
  for (const form of document.getElementsByTagName("form")) {
    form.reset();
  }
};
