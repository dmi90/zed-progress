const popup = document.getElementById('popup');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');

let currentBtn = null;

btn1.addEventListener('click', () => {
    currentBtn = 1;
    popup.style.display = 'flex';
});

btn2.addEventListener('click', () => {
    currentBtn = 2;
    popup.style.display = 'flex';
});

btn3.addEventListener('click', () => {
    currentBtn = 3;
    popup.style.display = 'flex';
});

function closePopup() {
    popup.style.display = 'none';
}

function redirect(choice) {
    if (currentBtn === 1) {
        if (choice === 'graph') {
            window.location.href = 'c1.html';
        } else if (choice === 'map') {
            window.location.href = 'map1.html';
        }
    } 
    if (currentBtn === 2) {
        if (choice === 'graph') {
            window.location.href = 'c2.html';
        } else if (choice === 'map') {
            window.location.href = 'map2.html';
        }
    } 
    if (currentBtn === 3) {
        if (choice === 'graph') {
            window.location.href = 'c3.html';
        } else if (choice === 'map') {
            window.location.href = 'map3.html';
        }
    }
}
