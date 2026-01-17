let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#111';
        document.body.style.color = '#fff';

        logo.setAttribute('src', 'images/byui-logo-white.png');
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = '#111'

        logo.setAttribute('src', 'images/byui-logo.png');
    }
}