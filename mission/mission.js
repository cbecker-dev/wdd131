let selectElem = document.querySelector('select');
let logo = document.querySelector('img');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = 'white';

        document.querySelector('#school').style.color = '#6fa8dc';

        logo.setAttribute('src', 'images/byui-logo-white.png');
    } else {
        document.body.style.backgroundColor = "#fff";
        document.body.style.color = '#111'

        document.querySelector('#school').style.color = '#00008B';

        logo.setAttribute('src', 'images/byui-logo.png');
    }
}