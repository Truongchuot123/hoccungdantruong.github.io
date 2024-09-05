document.addEventListener('DOMContentLoaded', function () {
    const mobileMenu = document.getElementById('mobile-menu');
    const sideNav = document.getElementById('side-nav');

    mobileMenu.addEventListener('click', function () {
        // Kiểm tra trạng thái của thanh điều hướng
        if (sideNav.style.width === '250px') {
            sideNav.style.width = '0';
        } else {
            sideNav.style.width = '250px';
        }
    });
});
