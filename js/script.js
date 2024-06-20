const menu = document.querySelector('.header__menu-body')
const menuBtn = document.querySelector('.mobile-menu')

const body = document.body;

if (menu && menuBtn) {
   menuBtn.addEventListener('click', () => {
      menu.classList.toggle('active')
      menuBtn.classList.toggle('active')
      body.classList.toggle('lock')
   })
}