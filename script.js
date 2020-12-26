const menuItems = document.querySelectorAll('.menu__item');
const menuCircle = document.querySelector('.menu__circle');

menuItems.forEach(menuItem => {
  menuItem.addEventListener('click', function () {
    const activeBtn = document.querySelector('.menu__item_active');
    if (activeBtn) activeBtn.classList.remove('menu__item_active');

    this.classList.add('menu__item_active');
    document.body.style.backgroundColor = this.getAttribute('data-body-color');

    const {left, width} = this.getBoundingClientRect();

    const leftPosition = Math.floor(
      left - menuCircle.closest('.menu').offsetLeft - (menuCircle.offsetWidth - width
      ) / 2);

    menuCircle.style.transform = `translate3d(${leftPosition}px, 0 , 0)`;
  })
});
