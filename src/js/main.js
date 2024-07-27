// Fix this Damisa: the toggle doesn't doesn't work properly, ask me
// to show you what is wrong with this toggle
const dropDownButton = document.getElementById('test')
const dropDownMenu = document.getElementById('dropdown-menu-bar-2');
const dropDownContainer = document.getElementById('dropdown-menu-bar-2-button');

dropDownButton.addEventListener('click', () => {
  dropDownMenu.classList.toggle('hidden');
});

dropDownMenu.addEventListener("mouseleave", () => {
  dropDownMenu.classList.toggle("hidden");
})