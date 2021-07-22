function dropdown(){
    var x = document.getElementById('menuList');
    if (x.className === "menu-list") {
        x.className += " responsive-menu-list";
      } else {
        x.className = "menu-list";
      }
}