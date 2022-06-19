const appElement = document.querySelector('.app');

window.appState = {
    difficulty: null,
    gameDuration: 0
}

window.timer = new Timer();

window.DIFFICULTIES = {
    low: {
        buttonText: '1',
        cartsCount: 6,
        layout: {
            rows: 2,
            columns: 3
        }
    },
    medium: {
        buttonText: '2',
        cartsCount: 12,
        layout: {
            rows: 3,
            columns: 4
        }
    },
    high: {
        buttonText: '3',
        cartsCount: 18,
        layout: {
            rows: 3,
            columns: 6
        }
    }
};

renderFirstScreen(appElement);

function clearElement(element) {
    element.textContent = '';
}