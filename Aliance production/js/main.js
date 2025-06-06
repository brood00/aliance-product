const closeThankModal = document.getElementById('closeThankModal');
const returnHome = document.getElementById('returnHome');

// Открытие модального окна для заявки
openModal.onclick = function() {
    modal.style.display = "block";
}

// Закрытие модального окна для заявки
closeModal.onclick = function() {
    modal.style.display = "none";
}

// Закрытие модального окна благодарности
closeThankModal.onclick = function() {
    thankModal.style.display = "none";
}

// Закрытие модального окна при клике вне него
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    } else if (event.target === thankModal) {
        thankModal.style.display = "none";
    }
}

// Обработка отправки формы
document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы
    modal.style.display = "none"; // Скрываем модальное окно заявки
    thankModal.style.display = "block"; // Открываем модальное окно благодарности
}

// Возврат на главную (можно добавить функционал по желанию)
returnHome.onclick = function() {
    thankModal.style.display = "none"; // Закрываем окно благодарности
}

var owl = $('.owl-carousel');
owl.owlCarousel({
    left: true,
    loop: true,  
    margin: 20,
    startPosition: 0,
    items: 1,
    responsive : {

    780: {
        items:1,
        startPosition:1,
    },

    790 : {
        startPosition: 1,
        items: 1,
    },    
   
    800: {
        items:2,
        margin: 30,
    },

}

});

$('.slider-btn-prev').click(function() {

    owl.trigger('prev.owl.carousel');
})

$('.slider-btn-next').click(function() {
    owl.trigger('next.owl.carousel');
})

const menuButton = document.getElementById('menuButton');
const sidebar = document.getElementById('sidebar');
const closeButton = document.getElementById('closeButton');

menuButton.onclick = function() {
    sidebar.style.left = '0'; // Показываем боковое меню
}

closeButton.onclick = function() {
    sidebar.style.left = '-250px'; // Скрываем боковое меню
}

menuButton.onclick = function() {
    sidebar.classList.add('open'); // Добавляем класс при открытии
}

closeButton.onclick = function() {
    sidebar.classList.remove('open'); // Убираем класс при закрытии
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        sidebar.classList.remove('open'); // Закрываем меню, если нажата клавиша Escape
    }
});