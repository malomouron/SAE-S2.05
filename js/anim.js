//animation 1
document.querySelectorAll('.flip-vertical-right').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('flip-vertical-right');
    });
});

document.querySelectorAll('.flip-vertical-right').forEach(element => {
    element.addEventListener('mouseleave', () => {
        element.classList.remove('flip-vertical-right');
        element.classList.add('flip-vertical-right-out');
    });
});



//animation 2

document.querySelectorAll('.scale-up-center').forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('scale-up-center');
    });
});

document.querySelectorAll('.scale-up-center').forEach(element => {
    element.addEventListener('mouseleave', () => {
        element.classList.remove('scale-up-center');
        element.classList.add('scale-down-center');
    });
});