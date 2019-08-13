let buttons = document.getElementsByClassName("expand");
let bios = document.getElementsByClassName("member-bio");

expand = function() {
  bios[this.id].classList.toggle("collapsed");
}

for (var i = 0, len = buttons.length; i < len; i++) {
  buttons[i].isCollapsed = true;
  buttons[i].id = i;
  buttons[i].addEventListener('click', expand);
  }

