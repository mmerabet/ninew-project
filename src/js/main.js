const dropDownButton = document.getElementById('test')
const dropDownMenu = document.getElementById('dropdown-menu-bar-2');
const dropDownContainer = document.getElementById('dropdown-menu-bar-2-button');

dropDownButton.addEventListener('click', () => {
  dropDownMenu.classList.toggle('hidden');
});

dropDownMenu.addEventListener("mouseleave", () => {
  dropDownMenu.classList.toggle("hidden");
})