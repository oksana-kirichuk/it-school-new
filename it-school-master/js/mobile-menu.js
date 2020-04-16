var $selector = document.querySelector('.mobile-menu');
var $overlay = document.querySelector('.overlay');
var $menu = document.querySelector('.mobile-menu .menu');
var $menuOpen = document.querySelectorAll('[data-menu-open]');
var $menuClose = document.querySelectorAll('[data-menu-close]');

var x1 = 0;
var x2 = 0;
var action = false;
var currentPosition = 0;
var savedPosition = 0;
var menuLength = 300;

function mouseDown(e) {
    (e.touches) 
        ? x1 = e.touches[0].pageX
        : x1 = e.pageX;
    action = true;
    $selector.classList.remove('animation');
}
function mouseUp() {
    $selector.classList.add('animation');
    action = false;
    savedPosition = currentPosition;

    if (currentPosition >= (menuLength / 2)) {
        savedPosition = menuLength;
        moveMenu(menuLength);
    } else {
        savedPosition = 0;
        moveMenu(0);
    }
}
function mouseMove(e) {
    if (action) {
        (e.touches) 
            ? x2 = e.touches[0].pageX
            : x2 = e.pageX;

        currentPosition = savedPosition + (x2 - x1);

        if (currentPosition <= 300) moveMenu(currentPosition);
    }
}

function moveMenu(distance) {
    if (distance <= 0) {
        $selector.style.cssText = 'visibility: hidden'
        $overlay.style.cssText = 'opacity: 0'
        $menu.style.cssText = 'transform: translateX(0)';
    } else {
        $selector.style.cssText = 'visibility: visible';
        $overlay.style.cssText = 'opacity: ' + ((1 / menuLength) * distance);
        $menu.style.cssText = 'transform: translateX(' + distance + 'px)';
    }
}

window.addEventListener('mousedown', mouseDown);
window.addEventListener('touchstart', mouseDown);

window.addEventListener('mouseup', mouseUp);
window.addEventListener('touchend', mouseUp);

window.addEventListener('mousemove', mouseMove);
window.addEventListener('touchmove', mouseMove);

$menuOpen.forEach(function (el) {
    el.addEventListener('click', function () {
        savedPosition = menuLength;
        moveMenu(menuLength)
    });
});
$menuClose.forEach(function (el) {
    el.addEventListener('click', function () {
        savedPosition = 0;
        moveMenu(0)
    });
});
