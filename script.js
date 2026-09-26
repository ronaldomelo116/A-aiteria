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


/* formulario */

const orderForm = document.getElementById('order-form');

if (orderForm) {

    orderForm.addEventListener('submit', function (event) {

        event.preventDefault();

        const nameValue = document.getElementById('customer-name').value;

        const phoneValue = document.getElementById('customer-phone').value;

        const orderValue = document.getElementById('customer-order').value;

        const shopWhatsAppNumber = "5584999999999";

        const rawMessage = `Olá! Meu nome é ${nameValue}. \nMeu contato é ${phoneValue}\n\nGostaria de fazer o seguinte pedido:\n${orderValue}`;

        const safeMessage = encodeURIComponent(rawMessage);

        const whatsappUrl =`https://wa.me/${shopWhatsAppNumber}?text=${safeMessage}`;

        window.open(whatsappUrl, '_blank');

        orderForm.reset();

    });
}