const appElement = document.querySelector('.app');

window.appState = {
    difficulty: null,
    time: {
        min: 0,
        sec: 0
    }
}

window.timer = new Timer();

window.DIFFICULTY = [6,12,18];
window.GRIDS = [
    {
        rows: 2,
        columns: 3
    },
    {
        rows: 3,
        columns: 4
    },
    {
        rows: 3,
        columns: 6
    }
];

renderFirstScreen(appElement);

function clearElement(element) {
    element.textContent = '';
}