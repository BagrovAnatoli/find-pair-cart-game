import { templateEngine } from './lib/templateEngine.js';
import { clearElement } from './functions.js';
import { renderFirstScreen } from './firstScreen.js';
import { appElement } from './main.js';

function renderGameScreen(component) {
    console.log(`Игра на сложности ${window.appState.difficulty}`);
    component.appendChild(templateEngine(gameScreenTemplate()));

    setTimer(component);
    setPlayAgainHandler(component);
    const timeoutForRemember = setTimeout(() => {
        console.log('5 секунд прошли');
        turnAllCards(component);
        window.timer.run();
        setCartClickHandler(component);
        clearTimeout(timeoutForRemember);
    }, 5000);
}

function setPlayAgainHandler(component) {
    const button = component.querySelector('.button');
    button.addEventListener('click', () => {
        clearElement(component);
        renderFirstScreen(appElement);
        window.timer.clear();
    });
}

function setTimer(component) {
    const minutesElement = component.querySelector('.timer__min .timer__value');
    const secondsElement = component.querySelector('.timer__sec .timer__value');
    window.timer.setTimeElements(minutesElement, secondsElement);
}

function setCartClickHandler(component) {
    const cartsField = component.querySelector('.field');
    cartsField.addEventListener('click', (event) => {
        const target = event.target;
        const cart = target.closest('.cart');
        if (!cart) {
            return;
        }
        turnCart(cart);
    });
}

function turnCart(cartElement) {
    const suit = cartElement.dataset.suit;
    const rank = cartElement.dataset.rank;
    const side = cartElement.dataset.side;
    console.log(rank, suit, side);
    if (side === 'front') {
        cartElement
            .querySelector('.cart__front')
            .classList.add('cart__front_hidden');
        cartElement
            .querySelector('.cart__back')
            .classList.remove('cart__back_hidden');
        cartElement.dataset.side = 'back';
    }
    if (side === 'back') {
        cartElement
            .querySelector('.cart__back')
            .classList.add('cart__back_hidden');
        cartElement
            .querySelector('.cart__front')
            .classList.remove('cart__front_hidden');
        cartElement.dataset.side = 'front';
    }
}

function turnAllCards(component) {
    const carts = component.querySelectorAll('.cart');
    carts.forEach(turnCart);
}

function gameScreenTemplate() {
    return {
        tag: 'div',
        cls: 'screen',
        content: {
            tag: 'div',
            cls: 'game',
            content: [
                {
                    tag: 'div',
                    cls: 'header',
                    content: [
                        {
                            tag: 'div',
                            cls: 'timer',
                            content: [
                                {
                                    tag: 'div',
                                    cls: 'timer__min',
                                    content: [
                                        {
                                            tag: 'div',
                                            cls: 'timer__label',
                                            content: 'min',
                                        },
                                        {
                                            tag: 'div',
                                            cls: 'timer__value',
                                            content: '00',
                                        },
                                    ],
                                },
                                {
                                    tag: 'div',
                                    cls: 'timer__value',
                                    content: '.',
                                },
                                {
                                    tag: 'div',
                                    cls: 'timer__sec',
                                    content: [
                                        {
                                            tag: 'div',
                                            cls: 'timer__label',
                                            content: 'sec',
                                        },
                                        {
                                            tag: 'div',
                                            cls: 'timer__value',
                                            content: '00',
                                        },
                                    ],
                                },
                            ],
                        },
                        {
                            tag: 'button',
                            cls: 'button',
                            content: 'Начать заново',
                        },
                    ],
                },
                {
                    tag: 'div',
                    cls: 'field',
                    attrs: setGridStyle(),
                    content: renderCarts(),
                },
            ],
        },
    };
}

function setGridStyle() {
    const difficulty = window.appState.difficulty;
    const layout = window.DIFFICULTIES[difficulty].layout;
    return {
        style: `grid-template-columns: repeat(${layout.columns}, 1fr);grid-template-rows: repeat(${layout.rows}, 1fr);`,
    };
}

function renderCarts() {
    const difficulty = window.appState.difficulty;
    const carts = [];
    const cartsCount = window.DIFFICULTIES[difficulty].cartsCount;
    console.log('Количество карт: ' + cartsCount);
    for (let i = 1; i <= cartsCount; i++) {
        const id = i;
        carts.push(renderCart(id));
    }
    return carts;
}

function renderCart(id) {
    console.log('Карта № ' + id);
    const cart = window.CARTS[id - 1];
    const { suit, rank } = cart;
    return {
        tag: 'div',
        cls: 'cart',
        attrs: {
            'data-id': id,
            'data-suit': suit,
            'data-rank': rank,
            'data-side': 'front',
        },
        content: [
            {
                tag: 'div',
                cls: ['cart__front'],
                attrs: {
                    style: `background-image: url('./src/img/${rank}_${suit}.svg');`,
                },
            },
            {
                tag: 'div',
                cls: ['cart__back', 'cart__back_hidden'],
                attrs: {
                    style: `background-image: url('./src/img/shirt.svg');`,
                },
            },
        ],
    };
}

{
    /* <div class="screen">
    <div class="game">
        <div class="header">
            <div class="timer">
                <div class="timer__min">
                    <div class="timer__label">min</div>
                    <div class="timer__value">00</div>
                </div>
                <div class="timer__value">.</div>
                <div class="timer__sec">
                    <div class="timer__label">sec</div>
                    <div class="timer__value">00</div>
                </div>
            </div>
            <button class="button">Начать заново</button>
        </div>
        <div class="field">
            <div class="cart">1</div>
            <div class="cart">2</div>
            <div class="cart">3</div>
            <div class="cart">4</div>
            <div class="cart">5</div>
            <div class="cart">6</div>
            <div class="cart">7</div>
            <div class="cart">8</div>
            <div class="cart">9</div>
            <div class="cart">10</div>
            <div class="cart">11</div>
            <div class="cart">12</div>
            <div class="cart">13</div>
            <div class="cart">14</div>
            <div class="cart">15</div>
            <div class="cart">16</div>
            <div class="cart">17</div>
            <div class="cart">18</div>
            <div class="cart">19</div>
            <div class="cart">20</div>
            <div class="cart">21</div>
            <div class="cart">22</div>
            <div class="cart">23</div>
            <div class="cart">24</div>
            <div class="cart">25</div>
            <div class="cart">26</div>
            <div class="cart">27</div>
            <div class="cart">28</div>
            <div class="cart">29</div>
            <div class="cart">30</div>
            <div class="cart">31</div>
            <div class="cart">32</div>
            <div class="cart">33</div>
            <div class="cart">34</div>
            <div class="cart">35</div>
            <div class="cart">36</div>
        </div>
    </div>
</div> */
}

export { renderGameScreen };
