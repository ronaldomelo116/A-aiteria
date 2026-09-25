/* menu hunbúrguer */
const btnHamburguer = document.getElementById('btnHamburguer');
const menuNabegacao = document.getElementById('menuNabegacao');
const linkMenu = menuNabegacao.querySelectorAll('a');

btnHamburguer.addEventListener('click', () => {
    const openMenu = menuNabegacao.classList.toggle('ativo');
    btnHamburguer.classList.toggle('ativo');
    btnHamburguer.setAttribute('aria-expanded', openMenu);
});

linkMenu.forEach(link => {
    link.addEventListener('click', () => {
        menuNabegacao.classList.remove('ativo');
        btnHamburguer.classList.remove('ativo');
        btnHamburguer.setAttribute('aria-expanded', 'false');
    });
});


if (self !== top) {
    top.location = self.location;
}

/* carrossel */

const carouselContainer = document.querySelector('#product-slider');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

if (carouselContainer && leftArrow && rightArrow) {
    
    const scrollAmount = 324;

    leftArrow.addEventListener('click', () => {
        carouselContainer.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    rightArrow.addEventListener('click', () => {
        carouselContainer.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

}