const appElement = document.querySelector('.app');

window.appState = {
    difficulty: null,
    time: {
        min: 0,
        sec: 0
    }
}

window.timer = new Timer();

renderFirstScreen (appElement);

function clearElement(element) {
    element.textContent = '';
}