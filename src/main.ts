import './style.css';
import { GameTimer } from './timer';
import { renderFirstScreen } from './firstScreen';
import { mixArrays, Cart } from './lib/utilityFunctions';

const appElement: HTMLElement | null = document.querySelector('.app');

type Difficulty = {
    buttonText: string;
    cartsCount: number;
    layout: {
        rows: number;
        columns: number;
    };
};

declare global {
    interface Window {
        appState: {
            difficulty: string;
            gameDuration: number;
        };
        timer: GameTimer;
        DIFFICULTIES: {
            low: Difficulty;
            medium: Difficulty;
            high: Difficulty;
        };
        CARTS: Cart[];
    }
}

window.appState = {
    difficulty: '',
    gameDuration: 0,
};

window.timer = new GameTimer();

window.DIFFICULTIES = {
    low: {
        buttonText: '1',
        cartsCount: 6,
        layout: {
            rows: 2,
            columns: 3,
        },
    },
    medium: {
        buttonText: '2',
        cartsCount: 12,
        layout: {
            rows: 3,
            columns: 4,
        },
    },
    high: {
        buttonText: '3',
        cartsCount: 18,
        layout: {
            rows: 3,
            columns: 6,
        },
    },
};

const SUITS = ['hearts', 'diamonds', 'crosses', 'spades'];

const RANKS = ['6', '7', '8', '9', '10', 'Q', 'K', 'J', 'A'];

window.CARTS = mixArrays(SUITS, RANKS, 'suit', 'rank');

console.log(window.CARTS);

if (appElement !== null) {
    renderFirstScreen(appElement);
}

export { appElement };
