// Базовый JavaScript файл для учебного проекта
console.log('Сайт загружен!');

// Простая функция для меню
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM готов');
    
    // Можно добавить простую функциональность
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            console.log('Нажата ссылка: ' + this.textContent);
        });
    });
});