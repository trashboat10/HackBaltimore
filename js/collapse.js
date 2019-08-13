let buttons = document.getElementsByClassName("expand");
let bios = document.getElementsByClassName("member-bio");

expand = function() {
  bios[this.id].classList.remove("collapsed");
}

for (var i = 0, len = buttons.length; i < len; i++) {
  buttons[i].id = i;
  buttons[i].addEventListener('click', expand);
  }

