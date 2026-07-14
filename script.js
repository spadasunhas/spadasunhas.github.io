const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


menuOpenButton.addEventListener("click", () => {
    // Abrir menu mobile
    document.body.classList.toggle("show-mobile-menu")
});

    // Fechar Menu mobile
menuCloseButton.addEventListener("click", () => menuOpenButton.click ());


// Fechar menu quando clicar no link
navLinks.forEach(Link => {
    Link.addEventListener("click", () => menuOpenButton.click())
});

// Inicializando Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 25,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView :1
        },
        768: {
            slidesPerView :2
        },
        1024: {
            slidesPerView :3
        },
    }
});

// Alerta de mensagem enviada
document.addEventListener("DOMContentLoaded", function() {

    const form = document.getElementById("contato-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const formData = new FormData(form);

        fetch(form.action, {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                alert("Mensagem enviada com sucesso!");
                form.reset();
            } else {
                alert("Erro ao enviar. Tente novamente.");
            }
        })
        .catch(() => {
            alert("Erro de conexão.");
        });
    });

});