const menuActive = document.querySelector('.menu-active'); // Находим меню
// console.log(menuActive);
const headerMenu = document.querySelector('.logo_menu_list'); // Находим кнопку бургера
let menuClose = document.querySelector('.menu-close'); // Находим кнопку крестика

function toggleMenu() {
	menuActive.classList.toggle('hidden_menu'); //Ф-ция удаляет или устанавливает класс с названием 'hidden' в div с классом .menu-active
}

headerMenu.addEventListener('click', toggleMenu); // По клику на бургер срабатывает ф-ция
menuClose.addEventListener('click', toggleMenu); // По клику на крестик срабатывает ф-ция
