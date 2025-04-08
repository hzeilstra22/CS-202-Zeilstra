
function toggleMenu() {
  var menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
  const button=document.getElementById('menubutton');
  button.classList.toggle('open');
  if (button.classList.contains('open')) {
    button.innerHTML = "Menu &#9652";
  } else {
    button.innerHTML = "Menu &#9662";
  }
}
