let buttons = document.getElementsByClassName("expand");
let bios = document.getElementsByClassName("member-bio");

expand = function() {
  bios[this.id].classList.toggle("collapsed");
  if (bios[this.id].classList.contains("collapsed")) {
    this.innerHTML = "expand";
  } else {
    this.innerHTML = "collapse";
  }

}

for (var i = 0, len = buttons.length; i < len; i++) {
  buttons[i].id = i;
  buttons[i].addEventListener('click', expand);
  }

