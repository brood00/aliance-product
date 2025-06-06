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