const nav = document.querySelector('#nav')
const navBtn = document.querySelector('#nav-btn')
const navBtnImg = document.querySelector('#nav-btn-img')

/* Меняет или добавляет при запросах бургер иконку */
/* Почему убрав class="open" он появляеться при адаптации?
Почему у else одиннарные кавычки?*/

navBtn.onclick = () => {
	if (nav.classList.toggle('open')) {
		navBtnImg.src = "./img/icons/NAV CLOSE.svg";
	}
	else {
		navBtnImg.src = './img/icons/nav-open.svg';
	}
}