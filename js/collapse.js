let buttons = document.getElementsByClassName("expand");
let bios = document.getElementsByClassName("member-bio");

expand = function() {
  for (var i = 0; i < bios.length; i++){
    bios[i].classList.toggle("collapsed");
    if (bios[i].classList.contains("collapsed")) {
      buttons[i].innerHTML = "expand";
    } else {
      buttons[i].innerHTML = "collapse";
    }
  }
}

for (var i = 0, len = buttons.length; i < len; i++) {
  buttons[i].id = i;
  buttons[i].addEventListener('click', expand);
  }

