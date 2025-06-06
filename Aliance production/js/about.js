var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,  
    margin: 25,
    startPosition: 0,
    items: 2.3,
    responsive : {
    320 : {
        startPosition: 1,
        items: 1,
    },   

    600 : {
        startPosition: 1,
        items: 1.2,
    },   


    800 : {
        startPosition: 1,
        items: 1.5,
    },   


    1000 : {
        startPosition: 1,
        items: 2,
    },    
   
    1100: {
        items:2,
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
