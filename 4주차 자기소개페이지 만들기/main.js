var menu = document.getElementById("menu_pg");

function open_menu() {
  menu.style.transform = "scale(1)";


}
function cls_menu() {
  menu.style.transform = "scale(0)";


}
document.getElementById("menu_btn").addEventListener('click', open_menu);
document.getElementById("close_btn").addEventListener('click', cls_menu);
